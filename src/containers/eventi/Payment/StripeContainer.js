import * as React from 'react'
import {useEffect} from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'
import {fetchPaymentAction} from '../redux/eventi.actions'
import {DEFAULT_REQUEST_ID} from 'fetch-with-redux-observable'
import {useDispatch, useSelector} from 'react-redux'
import {paymentClientSecretSelector} from '../redux/eventi.selectors'


const PUBLIC_KEY = 'pk_test_51JsmshAjkGk83dhJgBxxXPaT3bpz43Es0I5LSSVkfNwFBepT60tQzYknLCXsvS5iaUmbu4STmpZan62ZMuLMsH5Z00vcIjPy5x'
const stripePromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {

    const dispatch = useDispatch()
    const clientSecret = useSelector(paymentClientSecretSelector)

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        dispatch(fetchPaymentAction.build({
            provider: 'STRIPE',
            //oppure K7ffhv0BIn6f8J46FkcH
            eventDocumentId: 'K7ffhv0BIn6f8J46FkcH',
            userEmail: 'andrea.messina220399@gmail.com'
        }, DEFAULT_REQUEST_ID))
    }, [dispatch])

    const appearance = {
        theme: 'stripe',
    }
    const options = {
        clientSecret,
        appearance,
    }
    return (
        <>
            {
                !!clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <PaymentForm/>
                    </Elements>
                )
            }
        </>
    )
}
export default StripeContainer