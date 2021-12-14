import * as React from 'react'
import {useEffect, useState} from 'react'
import {PaymentElement, useElements, useStripe} from '@stripe/react-stripe-js'
import {Button} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {addError, addInfo, addSuccess} from 'fetch-with-redux-observable/dist/user-message/user-message.actions'
import {closeCurrentDialog} from '../../../redux/dialogs/current-dialogs.actions'
import {fetchEventsListAction, resetStripeClienteSecretAction} from '../redux/eventi.actions'
import {DEFAULT_REQUEST_ID} from 'fetch-with-redux-observable'


const PaymentForm = () => {

    const stripe = useStripe()
    const elements = useElements()
    const dispatch = useDispatch()

    const [message, setMessage] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    /* Intercept payment status */
    useEffect(() => {
        if (!stripe) {
            return
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            'payment_intent_client_secret'
        )

        if (!clientSecret) {
            return
        }

        stripe.retrievePaymentIntent(clientSecret).then(({paymentIntent}) => {
            switch (paymentIntent?.status) {
                case 'succeeded':
                    dispatch(addSuccess({userMessage: 'Pagamento avvenuto con successo!'}))
                    setMessage('Pagamento avvenuto con successo!')
                    break
                case 'processing':
                    dispatch(addInfo({userMessage: 'Pagamento in elaborazione'}))
                    setMessage('Pagamento in elaborazione')
                    break
                case 'requires_payment_method':
                    dispatch(addError({userMessage: 'Il tuo pagamento non è andato a buon fine, riprova'}))
                    setMessage('Il tuo pagamento non è andato a buon fine, riprova')
                    break
                default:
                    dispatch(addError({userMessage: 'Ops! Qualcosa è andato storto'}))
                    setMessage('Ops! Qualcosa è andato storto')
                    break
            }
        })
    }, [dispatch, stripe])

    /* Confirm payment if it is all right*/
    const handleSubmit = async (e:any) => {
        e.preventDefault()

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            return
        }

        setIsLoading(true)

        await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/#/events',
            },
            redirect: 'if_required'
        }).then((paymentIntent) => {
            dispatch(resetStripeClienteSecretAction(''))
            if (!!paymentIntent.error) {
                dispatch(addError({userMessage: 'Ops! Errore durante il pagamento'}))
            } else {
                dispatch(closeCurrentDialog())
                dispatch(fetchEventsListAction.build(null,DEFAULT_REQUEST_ID))
                dispatch(addSuccess({userMessage: 'Pagamento avvenuto con successo!'}))
            }
        })

        setIsLoading(false)
    }

    return (
        <>
            <div style={{background: 'rgba(229, 229, 229, 0.95)', borderRadius: 8}}>
                <form className="p-3">

                    <PaymentElement id="payment-element" className="p-0"/>

                    <div className="col-12 pt-3 d-flex justify-content-center">
                        <Button variant="contained"
                                color="primary"
                                disabled={isLoading || !stripe || !elements}
                                onClick={handleSubmit}>
                        <span id="button-text">
                            {
                                isLoading ? <div className="spinner" id="spinner"/> : 'Paga'
                            }
                        </span>
                        </Button>
                    </div>

                    {/* SHOW ANY ERROR OR SUCCESS MESSAGES */}
                    {message && <div id="payment-message">{message}</div>}
                </form>
            </div>
        </>
    )
}
export default PaymentForm