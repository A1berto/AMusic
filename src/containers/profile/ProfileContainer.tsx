import * as React from 'react'
import {FC, useMemo, useState} from 'react'
import {Avatar, Button, Tooltip, Typography} from '@material-ui/core'
import {AMUSIC_PALETTE_COLORS} from '../../AMusic_theme'
import {CurrentDialogType} from '../../redux/dialogs/current-dialog.constants'
import {setCurrentDialog} from '../../redux/dialogs/current-dialogs.actions'
import {useDispatch, useSelector} from 'react-redux'
import {Form, Formik} from 'formik'
import {PROFILE_FIELDS_NAMES, PROFILE_FORM_INIT_VALUES, profileValidationSchema} from './profile.constants'
import {
    changeProfilePasswordAction,
    isChangeProfilePasswordPendingSelector,
    isUpdateProfilePendingSelector,
    updateProfileAction
} from './redux/profile.actions'
import {DEFAULT_REQUEST_ID} from 'fetch-with-redux-observable'
import {IProfileFormFields} from './profile.types'
import {profileRootSelector} from '../../redux/selectors'
import ProfileContent from './components/ProfileContent'


interface IProfileProps {
}

const ProfileContainer: FC<IProfileProps> = () => {

    const [isEditProfileData, setIsEditProfileData] = useState<boolean>(false)

    const profile = useSelector(profileRootSelector)
    const isChangeProfilePasswordPending = useSelector(isChangeProfilePasswordPendingSelector)
    const isUpdateProfilePending = useSelector(isUpdateProfilePendingSelector)

    const dispatch = useDispatch()

    /* Fetch to be to send an email to user to change email */
    const handleChangeCredentials = () => {
        dispatch(changeProfilePasswordAction.build(null, DEFAULT_REQUEST_ID))
    }

    /* Open the dialog to allow the user to edit profile image */
    const handleOpenEditImageDialog = () => {
        dispatch(setCurrentDialog(CurrentDialogType.EDIT_PROFILE_IMAGE))
    }

    const normalizedFormValues = useMemo(() => ({
        ...PROFILE_FORM_INIT_VALUES,
        [PROFILE_FIELDS_NAMES.name]: profile?.name ?? '',
        [PROFILE_FIELDS_NAMES.surname]: profile?.surname ?? '',
        [PROFILE_FIELDS_NAMES.birthDay]: profile?.birthDay ?? '',
        [PROFILE_FIELDS_NAMES.city]: profile?.city ?? '',
        [PROFILE_FIELDS_NAMES.sex]: profile?.sex ?? '',
    }), [profile])

    /* check if the user has changed any data and after fetch to be */
    const handleEditFormSubmit = (values: IProfileFormFields) => {
        if (isEditProfileData) {
            //@ts-ignore
            const differences = Object.keys(values).filter((key: string) => values[key] !== normalizedFormValues[key]) ?? ''
            differences.length && dispatch(updateProfileAction.build(values, DEFAULT_REQUEST_ID))
        }
        setIsEditProfileData(prevState => !prevState)
    }

    return (
        <div style={{width: '70%'}}>
            <div className="row">
                {/* PROFILE IMAGE */}
                <div className="col-12 d-flex justify-content-center">
                    <Tooltip title="Modifica immagine profilo" placement="right" className="c-pointer">
                        <Avatar
                            className="profileImage"
                            variant="circular"
                            alt="ProfileContainer Image"
                            src={profile?.photoUrl}
                            onClick={handleOpenEditImageDialog}/>
                    </Tooltip>
                </div>

                {/* TITLE*/}
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

                        {/* PROFILE CONTENT */}
                        <ProfileContent isEditProfileData={isEditProfileData} profile={profile}/>

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
                            <div className={`row d-flex justify-content-end animate__animated animate__infinite ${isChangeProfilePasswordPending ? 'animate__pulse' : ''}`} style={{marginTop: '176px'}}>
                                <Button variant="contained" onClick={handleChangeCredentials}>
                                    Modifica password
                                </Button>
                            </div>
                            <div
                                className={`row d-flex justify-content-end mt-2 animate__animated animate__infinite ${isUpdateProfilePending ? 'animate__pulse' : ''}`}>
                                <Button variant="contained" type={'submit'} disabled={isUpdateProfilePending}>
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
export default ProfileContainer