import * as React from 'react'
import {FC, useState} from 'react'
import {Avatar, Button, InputBase, MenuItem, Select, Tooltip, Typography} from '@material-ui/core'
import Image from '../../assets/img/avatar-man.jpg'
import {AMUSIC_PALETTE_COLORS} from '../../AMusic_theme'
import {CurrentDialogType} from '../../redux/dialogs/current-dialog.constants'
import {setCurrentDialog} from '../../redux/dialogs/current-dialogs.actions'
import {useDispatch} from 'react-redux'
import {Field, Form, Formik, FormikProps} from 'formik'
import {IProfile} from './profile.types'
import {PROFILE_FIELDS_NAMES, PROFILE_FORM_INIT_VALUES} from './profile.constants'

interface IProfileProps {
}

const Profile: FC<IProfileProps> = () => {

    const [isEditProfile, setIsEditProfile] = useState<boolean>(false)

    const dispatch = useDispatch()

    //La utilizzerò per popolare l'avatar, ogni volta che effettuo la modifica devo cambiare lo state su redux
    /*
        const profileImage = useSelector(profileImageSelector)
    */

    const handleEditClick = (values: IProfile) => {
        setIsEditProfile(prevState => !prevState)
        /*TODO implementare chiamata editProfile( passo i dati al be )
                isEditProfile && fetchEditProfile
        */
    }

    /* Open the dialog to allow the user to edit profile image */
    const handleOpenEditImageDialog = () => {
        dispatch(setCurrentDialog(CurrentDialogType.EDIT_PROFILE_IMAGE))
    }

    //TODO non inserire i default value cosi. Prendere i dati dai selector e valorizzare gli initValues
    return (
        <div style={{width: '70%'}}>
            <Formik initialValues={PROFILE_FORM_INIT_VALUES}
                    onSubmit={handleEditClick}
                    validateOnChange={true}>
                {
                    (formikProps: FormikProps<IProfile>) => {
                        return <Form autoComplete="off">
                            <div className="row">
                                {/* PROFILE IMAGE */}
                                <div className="col-12 d-flex justify-content-center">
                                    <Tooltip title="Change profile image" placement="right" className="c-pointer">
                                        <Avatar
                                            className="profileImage"
                                            variant="circle"
                                            alt="Profile Image"
                                            src={Image}         //TODO passare l'url che viene dal be
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
                                            <div className="col-4">
                                                <Field
                                                    type="text"
                                                    component={InputBase}
                                                    name={PROFILE_FIELDS_NAMES.name}
                                                    defaultValue="Alberto"
                                                    disabled={!isEditProfile}
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
                                            <div className="col-4">
                                                <Field
                                                    type="text"
                                                    component={InputBase}
                                                    name={PROFILE_FIELDS_NAMES.surname}
                                                    defaultValue="Manuguerra"
                                                    disabled={!isEditProfile}
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
                                            <div className="col-4">
                                                <Field
                                                    type="text"
                                                    component={InputBase}
                                                    name={PROFILE_FIELDS_NAMES.city}
                                                    defaultValue="Trapani"
                                                    disabled={!isEditProfile}
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
                                            <div className="col-4">
                                                <Field
                                                    type="text"
                                                    component={InputBase}
                                                    name={PROFILE_FIELDS_NAMES.birthDate}
                                                    defaultValue="22/10/2010"
                                                    disabled={!isEditProfile}
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
                                            <div className="col-4">
                                                <Field
                                                    type="text"
                                                    component={Select}
                                                    name={PROFILE_FIELDS_NAMES.sex}
                                                    defaultValue="Maschio"
                                                    disabled={!isEditProfile}
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
                                                    defaultValue="albertomanuguerra18"
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
                                                    component={InputBase}
                                                    name={PROFILE_FIELDS_NAMES.password}
                                                    defaultValue="asfasfasdasd"
                                                    disabled={!isEditProfile}
                                                    color="secondary"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* EDIT BUTTON */}
                                    <div className="row d-flex justify-content-end" style={{marginTop: '130px'}}>
                                        <Button variant="contained" type="submit">
                                            {isEditProfile ? 'Conferma modifica' : 'Modifica dati'}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    }}
            </Formik>
        </div>
    )
}
export default Profile