import {FieldInputProps} from 'formik/dist/types'

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