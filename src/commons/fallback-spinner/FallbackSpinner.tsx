import * as React from 'react'
import {FC} from 'react'
import './fallback-spinner.css'

interface IFallbackSpinnerProps {
}

const FallbackSpinnerFC: FC<IFallbackSpinnerProps> = () => {

    return (
        <>
            <div className="spinner-container">
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export const FallbackSpinner = FallbackSpinnerFC
