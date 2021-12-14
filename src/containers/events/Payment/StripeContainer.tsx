import * as React from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe, StripeElementsOptions} from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'


const PUBLIC_KEY = 'pk_test_51JsmshAjkGk83dhJgBxxXPaT3bpz43Es0I5LSSVkfNwFBepT60tQzYknLCXsvS5iaUmbu4STmpZan62ZMuLMsH5Z00vcIjPy5x'
const stripePromise = loadStripe(PUBLIC_KEY)

const StripeContainer = (props:any) => {
    const {clientSecret} = props

    const appearance = {
        variables: {
            colorPrimary: '#0570de',
            colorBackground: '#ffffff',
            colorText: '#30313d',
            colorDanger: '#df1b41',
            fontFamily: 'Ideal Sans, system-ui, sans-serif',
            spacingUnit: '2px',
            borderRadius: '4px',
        },
        labels: 'floating',
    }

    const options: StripeElementsOptions= {
        clientSecret,
        appearance,
    }

    return (
        <>
            <Elements options={options} stripe={stripePromise}>
                <PaymentForm/>
            </Elements>
        </>
    )
}
export default StripeContainer