import * as React from 'react'
import {FC, useState} from 'react'
import {Avatar, Button, CircularProgress, MenuItem, Tooltip, Typography} from '@material-ui/core'
import {AMUSIC_PALETTE_COLORS} from '../../AMusic_theme'
import {CurrentDialogType} from '../../redux/dialogs/current-dialog.constants'
import {setCurrentDialog} from '../../redux/dialogs/current-dialogs.actions'
import {useDispatch, useSelector} from 'react-redux'
import {Field, Form, Formik} from 'formik'
import {PROFILE_FIELDS_NAMES, PROFILE_FORM_INIT_VALUES, profileValidationSchema, sexOptions} from './profile.constants'
import {
    changeProfilePasswordAction,
    isChangeProfilePasswordPendingSelector,
    isUpdateProfilePendingSelector,
    updateProfileAction
} from './redux/profile.actions'
import {DEFAULT_REQUEST_ID} from 'fetch-with-redux-observable'
import {Select, TextField} from 'formik-material-ui'
import {IProfileFormFields} from './profile.types'
import {profileRootSelector} from '../../redux/selectors'
import {actualDate, hundredYearsAgo} from '../../utils'


interface IProfileProps {
}

const ProfileContainer: FC<IProfileProps> = () => {

    const [isEditProfileData, setIsEditProfileData] = useState<boolean>(false)

    const dispatch = useDispatch()

    const profile = useSelector(profileRootSelector)
    const isChangeProfilePasswordPending = useSelector(isChangeProfilePasswordPendingSelector)
    const isUpdateProfilePending = useSelector(isUpdateProfilePendingSelector)

    const handleEditFormSubmit = (values: IProfileFormFields) => {
        isEditProfileData && dispatch(updateProfileAction.build(values, DEFAULT_REQUEST_ID))
        setIsEditProfileData(prevState => !prevState)
    }

    const handleChangeCredentials = () => {
        dispatch(changeProfilePasswordAction.build(null, DEFAULT_REQUEST_ID))
    }

    /* Open the dialog to allow the user to edit profile image */
    const handleOpenEditImageDialog = () => {
        dispatch(setCurrentDialog(CurrentDialogType.EDIT_PROFILE_IMAGE))
    }

    const normalizedFormValues = {
        ...PROFILE_FORM_INIT_VALUES,
        [PROFILE_FIELDS_NAMES.name]: profile?.name ?? '',
        [PROFILE_FIELDS_NAMES.surname]: profile?.surname ?? '',
        [PROFILE_FIELDS_NAMES.birthDate]: profile?.birthDate ?? '',
        [PROFILE_FIELDS_NAMES.city]: profile?.city ?? '',
        [PROFILE_FIELDS_NAMES.sex]: profile?.sex ?? '',
    }


    return (
        <div style={{width: '70%'}}>
            <div className="row">
                {/* PROFILE IMAGE */}
                <div className="col-12 d-flex justify-content-center">
                    <Tooltip title="Change profile image" placement="right" className="c-pointer">
                        <Avatar
                            className="profileImage"
                            variant="circle"
                            alt="ProfileContainer Image"
                            src={profile?.photoUrl}
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

            <Formik initialValues={normalizedFormValues}
                    onSubmit={handleEditFormSubmit}
                    validateOnChange={true}
                    validationSchema={profileValidationSchema}>
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
                                                    color="textSecondary">
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
                                            disabled={!isEditProfileData || profile?.name}
                                            color="secondary"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 d-flex align-items-center mt-4">
                                    <div className="col-3">
                                        <Typography variant="h4"
                                                    color="textSecondary">
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
                                                    color="textSecondary">
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
                                                    color="textSecondary">
                                            Nascita
                                        </Typography>
                                    </div>
                                    <div className="col-6">
                                        <Field
                                            type="date"
                                            name={PROFILE_FIELDS_NAMES.birthDate}
                                            component={TextField}
                                            color="secondary"
                                            disabled={!isEditProfileData}
                                            value={profile?.birthDate}
                                            InputProps={{
                                                inputProps: {min: hundredYearsAgo, max: actualDate}
                                            }}
                                            fullWidth
                                        />
                                    </div>
                                </div>
                                <div className="col-12 d-flex align-items-center mt-4">
                                    <div className="col-3">
                                        <Typography variant="h4"
                                                    color="textSecondary">
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
                                            fullWidth
                                        >
                                            {
                                                sexOptions.map((sexType: string, index: number) =>
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
                                <div className="col-12 d-flex justify-content-end align-items-end mt-4 px-0">
                                    <div className="col-auto me-3">
                                        <Typography variant="h4"
                                                    color="textSecondary">
                                            Email
                                        </Typography>
                                    </div>
                                    <div className="col-auto">
                                        <Typography variant="h6"
                                                    color="secondary">
                                            {profile?.email}
                                        </Typography>
                                    </div>
                                </div>
                            </div>

                            {/* EDIT BUTTONS */}
                            <div className="row d-flex justify-content-end" style={{marginTop: '176px'}}>
                                <Button variant="contained" onClick={handleChangeCredentials}>
                                    Modifica password
                                    {
                                        isChangeProfilePasswordPending &&
                                        <CircularProgress className="ms-2" size={20} style={{color: 'white'}}/>
                                    }
                                </Button>
                            </div>
                            <div className="row d-flex justify-content-end mt-2">
                                <Button variant="contained" type={'submit'} disabled={isUpdateProfilePending}>
                                    {isEditProfileData ? 'Conferma modifica' : 'Modifica dati'}
                                    {
                                        isUpdateProfilePending &&
                                        <CircularProgress className="ms-2" size={20} style={{color: 'white'}}/>
                                    }
                                </Button>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
export default ProfileContainer