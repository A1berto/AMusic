import {profileRootSelector} from '../../../redux/selectors'
import {createSelector} from 'reselect'
import {IProfile} from '../profile.types'



export const profileIdSelector = createSelector(
    profileRootSelector,
    (profile: IProfile | null): string => profile?.id ?? ''
)

export const profileNominativeSelector = createSelector(
    profileRootSelector,
    (profile: IProfile | null): string => `${profile?.name ?? ''} ${profile?.surname ?? ''}`.trim()
)

export const profileEmailSelector = createSelector(
    profileRootSelector,
    (profile: IProfile | null): string => profile?.email ?? ''
)

export const profileImageSelector = createSelector(
    profileRootSelector,
    (profile: IProfile | null): any => profile?.image
)