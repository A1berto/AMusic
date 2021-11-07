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

interface IEditProfileImageDialogProps {
}

const EditProfileImageDialog: FC<IEditProfileImageDialogProps> = props => {
    const dispatch = useDispatch()

    const handleClose = useCallback(() => {
        dispatch(closeCurrentDialog())
    }, [dispatch])

    const handleSubmit = (values: IProfileImageFields) => {
        console.log('values.dropzone>>>', values.dropzone)
        if (values.dropzone) {
            const formData = new FormData()
            formData.append('file', values.dropzone)
            /*TODO @alberto*/
            console.log('Effettuare una fetch al be')
        }
    }

    return (
        <div className="row m-3" style={{minWidth: '600px'}}>
            <div className="col-12">
                <div className="row">
                    <div className="col-10 d-flex align-items-center">
                        <Typography variant="h5" color="primary">
                            Edit Profile Image
                        </Typography>
                    </div>

                    <div className="col-2 text-end p-0">
                        <IconButton onClick={handleClose}
                                    color="secondary">
                            <CloseIcon/>
                        </IconButton>
                    </div>
                </div>

                <div className="row">
                    <Formik
                        initialValues={DROPZONE_FORM_INIT_VALUES} onSubmit={handleSubmit}>
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
