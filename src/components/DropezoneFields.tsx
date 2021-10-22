import * as React from 'react'
import {FC, useCallback, useMemo} from 'react'
import {ErrorMessage, FieldProps} from 'formik'
import {DropzoneOptions, FileRejection, useDropzone} from 'react-dropzone'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import {FormHelperText, Link, Typography} from '@material-ui/core'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import {IGenericEntities} from '../types'
import {genericDropzoneFileNameNormalizer} from '../utils'


const defaultBaseStyle: React.CSSProperties = {
    padding: '15px',
    borderWidth: 2,
    borderRadius: 6,
    borderColor: 'gray',
    borderStyle: 'dashed',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
}

const activeStyle = {
    borderColor: '#2196f3'
}

const acceptStyle = {
    borderColor: '#00e676'
}

const rejectStyle = {
    borderColor: '#ff1744'
}

interface IDropzoneFieldProps extends FieldProps, DropzoneOptions {
    baseStyle?: React.CSSProperties
    customErrors?: IGenericEntities<string>
}

/**
 * @describe Gestione dropzone-formik per single e multi file
 * Possibilità di eliminare i file caricati nel caso in cui la dropzone sia di tipo multiple,
 * nel caso in cui non lo fosse ogni volta che viene caricato un file, viene "sovrascritto" quello precedente.
 * Gestione della visualizzazione degli errori relativi alla dropzone separata da quella del form (formik).
 * Possibilità di aggiunta di ulteriori errori attraverso l'utilizzo della prop customErrors.
 * Per una corretta visualizzazione del componte è NECESSARIO bootstrap.
 */
export const DropzoneField: FC<IDropzoneFieldProps> = props => {
    const {field, meta, form, baseStyle = defaultBaseStyle, customErrors, ...dropzoneOptions} = props

    const dropzoneErrorsMapper: IGenericEntities<string> = useMemo(() => ({
        'file-too-large': 'Dimensione massima superata',
        'file-too-small': 'Dimensione minima non raggiunta',
        'too-many-files': 'Limite massimo di file raggiunto',
        'file-invalid-type': 'Tipo di file non valido',
        ...customErrors
    }), [customErrors])

    const onDropAccepted = useCallback((files: File[]) => {
        form.setFieldValue(
            field.name,
            props.multiple ? files : files[0]
        )
    }, [])

    const onDrop = useCallback(() => {
        form.setFieldTouched(field.name, true, false)
    }, [])


    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        fileRejections,
    } = useDropzone({...dropzoneOptions, multiple: props.multiple, onDropAccepted, onDrop})

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [isDragActive, isDragReject, isDragAccept])

    const handleDeleteFile = useCallback((current: File) =>
            form.setFieldValue(
                field.name,
                field?.value.length === 1 ? '' : field?.value.filter((value: File) => value !== current))
        , [field])

    const getFileList = useCallback((files: File[]) => files?.map((current: File) =>
        <li className="ml-2">
            {current.name} - {(current.size / 1024 / 1024).toFixed(2)} MB
            <DeleteOutlineIcon
                className="c-pointer"
                onClick={() => handleDeleteFile(current)}/>
        </li>
    ), [field])

    const getFileRejectionsList = useCallback((fileRejections) => fileRejections.map((current: FileRejection) =>
        <li className="ml-2">{current.file?.name} - {dropzoneErrorsMapper[current.errors[0]?.code]}</li>
    ), [])

    return (
        <div className="container">
            <div {...getRootProps({style})}>
                <input {...getInputProps()} />
                {
                    (!field.value) ?
                        <div className="row text-center">
                            <div className="col-12">
                                <CloudUploadIcon/>
                            </div>
                            <div className="col-12">
                                <Typography
                                    className="mx-1">
                                    Trascina {props?.multiple ? 'le immagini' : 'l\' immagine'} qui oppure
                                </Typography>
                                <Link className="c-pointer" color="primary" underline="always">
                                    seleziona {props?.multiple ? 'le immagini' : 'l\' immagine'}
                                </Link>
                            </div>
                        </div> :
                        <>
                            <div className="row py-2 d-flex  align-items-center justify-content-center">
                                <div className="col-4 text-center">
                                    <CloudUploadIcon/>
                                    <Typography
                                        className="mx-1">
                                        Trascina qui
                                    </Typography>
                                </div>
                                <div className="col-2 d-flex justify-content-center">
                                    <img src={URL.createObjectURL(field.value)}
                                         alt="Image Uploaded"
                                         style={{
                                             borderRadius: '50%',
                                             objectFit: 'cover',
                                             objectPosition: 'center',
                                             height: '80px',
                                             width: '80px',
                                         }}/>
                                </div>
                                <div className="col-5 d-flex justify-content-center">
                                    <div className="row flex-column px-2">
                                        <Typography className="d-block"
                                                    variant="subtitle1"
                                                    color="secondary"
                                                    style={{opacity: 0.6}}>
                                            {props.multiple ? 'Immagini caricate:' : 'Immagine caricata:'}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="secondary"
                                            style={{fontSize: '12px'}}>
                                            {props.multiple ? getFileList(field.value) : genericDropzoneFileNameNormalizer(field)}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </>
                }
            </div>

            <FormHelperText
                className="text-center"
                error={true}>
                {getFileRejectionsList(fileRejections)}
            </FormHelperText>
            <ErrorMessage
                name={field.name}
                render={(message: string) =>
                    <FormHelperText
                        className="text-center"
                        error={true}>
                        {message}
                    </FormHelperText>}/>
        </div>
    )
}