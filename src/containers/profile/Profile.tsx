import * as React from 'react'
import {FC, useState} from 'react'
import {Avatar, Button, InputBase, MenuItem, Tooltip, Typography} from '@material-ui/core'
import {AMUSIC_PALETTE_COLORS} from '../../AMusic_theme'
import {CurrentDialogType} from '../../redux/dialogs/current-dialog.constants'
import {setCurrentDialog} from '../../redux/dialogs/current-dialogs.actions'
import {useDispatch, useSelector} from 'react-redux'
import {Field, Form, Formik} from 'formik'
import {PROFILE_FIELDS_NAMES, PROFILE_FORM_INIT_VALUES} from './profile.constants'
import {changeProfilePasswordAction, updateProfileAction} from './redux/profile.actions'
import {DEFAULT_REQUEST_ID} from 'fetch-with-redux-observable'
import {Select, TextField} from 'formik-material-ui'
import {IProfileFormFields} from './profile.types'
import {profileImageSelector} from './redux/profile.selectors'

interface IProfileProps {
}

const Profile: FC<IProfileProps> = () => {

    const profileImage = useSelector(profileImageSelector)

    const [isEditProfileData, setIsEditProfileData] = useState<boolean>(false)
    const [password, setPassword] = useState<string>()

    const dispatch = useDispatch()

    const handleEditFormSubmit = (values: IProfileFormFields) => {
        setIsEditProfileData(prevState => !prevState)
        isEditProfileData && dispatch(updateProfileAction.build(values, DEFAULT_REQUEST_ID))
    }

    const handleChangeCredentials = () => {
        dispatch(changeProfilePasswordAction.build(null, DEFAULT_REQUEST_ID))
    }

    /* Open the dialog to allow the user to edit profile image */
    const handleOpenEditImageDialog = () => {
        dispatch(setCurrentDialog(CurrentDialogType.EDIT_PROFILE_IMAGE))
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    //TODO non inserire i default value cosi. Prendere i dati dai selector e valorizzare gli initValues
    return (
        <div style={{width: '70%'}}>
            <div className="row">
                {/* PROFILE IMAGE */}
                <div className="col-12 d-flex justify-content-center">
                    <Tooltip title="Change profile image" placement="right" className="c-pointer">
                        <Avatar
                            className="profileImage"
                            variant="circle"
                            alt="Profile Image"
                            src={profileImage}
                            onClick={handleOpenEditImageDialog}/>
                    </Tooltip>
                </div>

                {/* PROFILE NAME*/}
                <div className="col-12 d-flex justify-content-center"
                     style={{
                         marginTop: '-10px',
                         background: AMUSIC_PALETTE_COLORS.BLACK,
                         zIndex: 1
                     }}>
                    <Typography variant={'h3'} color="primary">Informazioni profilo</Typography>
                </div>
            </div>

            <Formik initialValues={PROFILE_FORM_INIT_VALUES}
                    onSubmit={handleEditFormSubmit}
                    validateOnChange={true}>
                <Form className="col-12" autoComplete="off">
                    <div className="row mt-5">
                        <div className="col-6">
                            {/* PROFILE INFOS */}
                            <div className="row">
                                <div className="col-12 px-1 mb-2">
                                    <Typography variant="h2" color="secondary">
                                        Dati
                                    </Typography>
                                </div>
                                <div className="col-12 d-flex align-items-center mt-4">
                                    <div className="col-3">
                                        <Typography variant="h4"
                                                    color="secondary"
                                                    style={{opacity: 0.6}}>
                                            Nome
                                        </Typography>
                                    </div>
                                    <div className="col-6">
                                        <Field
                                            type="text"
                                            name={PROFILE_FIELDS_NAMES.name}
                                            component={TextField}
                                            inputProps={{
                                                placeholder: 'Inserisci il tuo nome'
                                            }}
                                            disabled={!isEditProfileData}
                                            color="secondary"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 d-flex align-items-center mt-4">
                                    <div className="col-3">
                                        <Typography variant="h4"
                                                    color="secondary"
                                                    style={{opacity: 0.6}}>
                                            Cognome
                                        </Typography>
                                    </div>
                                    <div className="col-6">
                                        <Field
                                            type="text"
                                            name={PROFILE_FIELDS_NAMES.surname}
                                            component={TextField}
                                            inputProps={{
                                                placeholder: 'Inserisci il tuo cognome'
                                            }}
                                            disabled={!isEditProfileData}
                                            color="secondary"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 d-flex align-items-center mt-4">
                                    <div className="col-3">
                                        <Typography variant="h4"
                                                    color="secondary"
                                                    style={{opacity: 0.6}}>
                                            Città
                                        </Typography>
                                    </div>
                                    <div className="col-6">
                                        <Field
                                            type="text"
                                            name={PROFILE_FIELDS_NAMES.city}
                                            component={TextField}
                                            inputProps={{
                                                placeholder: 'Inserisci una città'
                                            }}
                                            disabled={!isEditProfileData}
                                            color="secondary"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 d-flex align-items-center mt-4">
                                    <div className="col-3">
                                        <Typography variant="h4"
                                                    color="secondary"
                                                    style={{opacity: 0.6}}>
                                            Nascita
                                        </Typography>
                                    </div>
                                    <div className="col-6">
                                        <Field
                                            type="text"
                                            name={PROFILE_FIELDS_NAMES.birthDate}
                                            component={TextField}
                                            inputProps={{
                                                placeholder: 'Inserisci data di nascita'
                                            }}
                                            disabled={!isEditProfileData}
                                            color="secondary"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 d-flex align-items-center mt-4">
                                    <div className="col-3">
                                        <Typography variant="h4"
                                                    color="secondary"
                                                    style={{opacity: 0.6}}>
                                            Sesso
                                        </Typography>
                                    </div>
                                    <div className="col-6">
                                        <Field
                                            type="text"
                                            name={PROFILE_FIELDS_NAMES.sex}
                                            component={Select}
                                            inputProps={{
                                                placeholder: 'Inserisci il tuo sesso'
                                            }}
                                            disabled={!isEditProfileData}
                                            color="secondary"
                                        >
                                            {
                                                ['Maschio', 'Femmina', 'Altro'].map((sexType, index: number) =>
                                                    <MenuItem value={sexType} key={index}>
                                                        {sexType}
                                                    </MenuItem>
                                                )
                                            }
                                        </Field>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-6">
                            <div className="row">

                                {/* PROFILE CREDENTIALS */}
                                <div className="col-12 d-flex justify-content-end px-1 mb-2">
                                    <Typography variant="h2" color="secondary">
                                        Credenziali
                                    </Typography>
                                </div>
                                <div className="col-12 d-flex justify-content-end align-items-center mt-4">
                                    <div className="col-3">
                                        <Typography variant="h4"
                                                    color="secondary"
                                                    style={{opacity: 0.6}}>
                                            Email
                                        </Typography>
                                    </div>
                                    <div className="col-4">
                                        <Field
                                            type="text"
                                            component={InputBase}
                                            name={PROFILE_FIELDS_NAMES.email}
                                            disabled={true}
                                            color="secondary"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 d-flex justify-content-end align-items-center mt-4">
                                    <div className="col-3">
                                        <Typography variant="h4"
                                                    color="secondary"
                                                    style={{opacity: 0.6}}>
                                            Password
                                        </Typography>
                                    </div>
                                    <div className="col-4">
                                        <Field
                                            type="password"
                                            component={TextField}
                                            name={PROFILE_FIELDS_NAMES.password}
                                            color="secondary"
                                            value={password}
                                            InputProps={{readOnly: true}}
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* EDIT BUTTONS */}
                            <div className="row d-flex justify-content-end" style={{marginTop: '112px'}}>
                                <Button variant="contained" onClick={handleChangeCredentials}>
                                    Modifica password
                                </Button>
                            </div>
                            <div className="row d-flex justify-content-end mt-2">
                                <Button variant="contained" type={'submit'}>
                                    {isEditProfileData ? 'Conferma modifica' : 'Modifica dati'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
export default Profile