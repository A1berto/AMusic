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
    (profile: IProfile | null): string => profile?.photoUrl ?? ''
)

export const nameImageSelector = createSelector(
    profileRootSelector,
    (profile: IProfile | null): string => profile?.name ?? ''
)

export const surnameImageSelector = createSelector(
    profileRootSelector,
    (profile: IProfile | null): string => profile?.surname ?? ''
)

export const sexImageSelector = createSelector(
    profileRootSelector,
    (profile: IProfile | null): string => profile?.sex ?? ''
)

export const birthDateImageSelector = createSelector(
    profileRootSelector,
    (profile: IProfile | null): string => profile?.birthDate ?? ''
)

export const cityImageSelector = createSelector(
    profileRootSelector,
    (profile: IProfile | null): string => profile?.city ?? ''
)