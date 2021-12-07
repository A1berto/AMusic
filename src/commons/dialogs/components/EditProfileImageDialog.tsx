import * as React from 'react'
import {FC, useCallback, useState} from 'react'
import {Button, CircularProgress, IconButton, Typography} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {Field, Form, Formik} from 'formik'
import CloseIcon from '@material-ui/icons/Close'
import {DropzoneField} from '../../DropezoneFields'
import {closeCurrentDialog} from '../../../redux/dialogs/current-dialogs.actions'
import {
    DROPZONE_FORM_INIT_VALUES,
    GENERIC_DROPZONE_VALIDATION_SCHEMA
} from '../../../containers/profile/profile.constants'
import {IProfileImageFields} from '../../../containers/profile/profile.types'
import {DEFAULT_REQUEST_ID, HttpMethods} from 'fetch-with-redux-observable'
import {addError, addSuccess} from 'fetch-with-redux-observable/dist/user-message/user-message.actions'
import {fetchProfileAction} from '../../../containers/profile/redux/profile.actions'

interface IEditProfileImageDialogProps {
}

const EditProfileImageDialog: FC<IEditProfileImageDialogProps> = () => {

    const [isInPending, setIsInPending] = useState<boolean>(false)

    const dispatch = useDispatch()

    const handleClose = useCallback(() => {
        dispatch(closeCurrentDialog())
    }, [dispatch])

    /** @description Fetch to change profile image**/
    const handleSubmit = (values: IProfileImageFields) => {
        if (values.dropzone) {
            const formData = new FormData()
            formData.append('file', values.dropzone)

            // Set spinner
            setIsInPending(true)
            
            fetch(`private/user/uploadPhoto`, {
                method: HttpMethods.POST,
                body: formData,
            }).then(async (response) => {
                console.log("response Upload Photo>>",response)

                if (response.ok) {
                    dispatch(fetchProfileAction.build(null, DEFAULT_REQUEST_ID))
                    dispatch(addSuccess({userMessage: 'Documento caricato con successo'}))
                    dispatch(closeCurrentDialog())
                } else {
                    dispatch(addError({userMessage: 'Ops! Errore durante il caricamento'}))
                }

            }).finally(() => {
                setIsInPending(false)
            })

        }
    }

    return (
        <div className="row m-3" style={{minWidth: '600px'}}>
            <div className="col-12">
                <div className="row">

                    {/* TITLE */}
                    <div className="col-10 d-flex align-items-center">
                        <Typography variant="h5" color="primary">
                            Edit Profile Image
                        </Typography>
                    </div>

                    {/* CLOSE DIALOG ICON */}
                    <div className="col-2 text-end p-0">
                        <IconButton onClick={handleClose}
                                    color="secondary">
                            <CloseIcon/>
                        </IconButton>
                    </div>
                </div>

                <div className="row">
                    <Formik initialValues={DROPZONE_FORM_INIT_VALUES}
                            onSubmit={handleSubmit}
                            validationSchema={GENERIC_DROPZONE_VALIDATION_SCHEMA}>
                        <Form>

                            {/* UPLOAD FILE IMAGE */}
                            <div className="col-12 p-3">
                                <Field
                                    name={'dropzone'}
                                    component={DropzoneField}
                                    accept=".jpg, .jpeg, .svg, .png"
                                    multiple={false}
                                    maxSize={5000000}   //5 Megabyte
                                />
                            </div>

                            <div className="col-12 pb-1 pt-2 d-flex align-items-center justify-content-between">
                                <Button variant="contained"
                                        onClick={handleClose}
                                        color="secondary">
                                    ANNULLA
                                </Button>

                                {/* SUBMIT */}
                                <Button type="submit" variant="contained">
                                    CONFERMA
                                    {
                                        isInPending && <CircularProgress className="ms-2" color="inherit" size={20}/>
                                    }
                                </Button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}
export default EditProfileImageDialog
