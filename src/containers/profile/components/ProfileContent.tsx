import * as React from 'react'
import {FC} from 'react'
import {MenuItem, Typography} from '@material-ui/core'
import {Field} from 'formik'
import {PROFILE_FIELDS_NAMES, sexOptions} from '../profile.constants'
import {Select, TextField} from 'formik-material-ui'
import {actualDate, hundredYearsAgo} from '../../../utils'
import {IProfile} from '../profile.types'

interface IProfileContentProps {
    isEditProfileData: boolean
    profile: IProfile | null
}

const ProfileContent: FC<IProfileContentProps> = props => {
    const {isEditProfileData, profile} = props

    return (
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
                            disabled={!isEditProfileData || !!profile?.name.trim()}
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
                            disabled={!isEditProfileData || !!profile?.surname.trim()}
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
                            name={PROFILE_FIELDS_NAMES.birthDay}
                            component={TextField}
                            color="secondary"
                            disabled={!isEditProfileData}
                            value={profile?.birthDay}
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
    )
}
export default ProfileContent