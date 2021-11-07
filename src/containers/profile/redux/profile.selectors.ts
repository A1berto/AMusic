import {profileRootSelector} from '../../../redux/selectors'
import {createSelector} from 'reselect'
import {IProfile} from '../profile.types'

export const profileNominativeSelector = createSelector(
    profileRootSelector,
    (profile: IProfile | null): string => `${profile?.name ?? ''} ${profile?.surname ?? ''}`.trim()
)

export const profileImageSelector = createSelector(
    profileRootSelector,
    (profile: IProfile | null): any => profile?.image
)