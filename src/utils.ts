import {FieldInputProps} from 'formik/dist/types'
import {useEffect, useRef} from 'react'
import moment from 'moment/moment'

/**
 * GENERIC DROPZONE FILE NAME NORMALIZER
 * @description se il file che carico ha una dimensione minore a 0.00MB visualizzo il suo valore in KB
 **/
export const genericDropzoneFileNameNormalizer = (field: FieldInputProps<any>) => {
    const fieldValue = field.value?.size
    const fieldName = field.value?.name
    const megaByteValue = fieldValue && (fieldValue / 1024 / 1024).toFixed(2)
    const kiloByteValue = fieldValue && (fieldValue / 1000).toFixed(2)
    return megaByteValue && parseFloat(megaByteValue) > 0.00 ? `${fieldName} - ${megaByteValue} MB` : `${fieldName} - ${kiloByteValue} KB`
}

export const mobileMaxWidth = '(max-width:991px)'


/**
 * @label CUSTOM HOOK
 * Returns the previuos value of something
 * @param value
 */
export const usePrevious = (value: any): any => {
    const ref = useRef()

    useEffect(() => {
        if (value) {
            ref.current = value
        }
    })
    return ref.current
}


export const YUP_DEFAULT_ERROR_VALUE = 'Campo obbligatorio'
export const halfHour = 1800000

export const actualDate= moment(new Date()).format('yyyy-MM-DD')
export const hundredYearsAgo= moment(new Date()).subtract(100,'years').format('yyyy-MM-DD')