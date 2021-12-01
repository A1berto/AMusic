import * as React from 'react'
import {FC, useCallback} from 'react'
import {Button, IconButton, Typography} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {Field, Form, Formik} from 'formik'
import CloseIcon from '@material-ui/icons/Close'
import {DropzoneField} from '../../DropezoneFields'
import {closeCurrentDialog} from '../../../redux/dialogs/current-dialogs.actions'
import {DROPZONE_FORM_INIT_VALUES} from '../../../containers/profile/profile.constants'
import {IProfileImageFields} from '../../../containers/profile/profile.types'
import {HttpMethods} from 'fetch-with-redux-observable'
import {addError, addSuccess} from 'fetch-with-redux-observable/dist/user-message/user-message.actions'

interface IEditProfileImageDialogProps {
}

const EditProfileImageDialog: FC<IEditProfileImageDialogProps> = () => {
    const dispatch = useDispatch()

    const handleClose = useCallback(() => {
        dispatch(closeCurrentDialog())
    }, [dispatch])

    /** @description Fetch to change profile image**/
    const handleSubmit = (values: IProfileImageFields) => {
        if (values.dropzone) {
            const formData = new FormData()
            formData.append('file', values.dropzone)

            console.log('qui')
            fetch(`storage/upload`, {
                method: HttpMethods.POST,
                body: formData,
            }).then(async (response) => {
                if (response.ok) {
                    dispatch(addSuccess({userMessage: 'Documento caricato con successo'}))
                } else {
                    dispatch(addError({userMessage: 'Ops! Errore durante il caricamento'}))
                }
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
                    <Formik initialValues={DROPZONE_FORM_INIT_VALUES} onSubmit={handleSubmit}>
                        <Form>
                            <div className="col-12 p-3">
                                <Field
                                    name={'dropzone'}
                                    component={DropzoneField}
                                    accept=".jpg, .jpeg, .svg, .png"
                                    multiple={false}
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
