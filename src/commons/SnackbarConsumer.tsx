import * as React from 'react'
import {useEffect} from 'react'
import {withSnackbar, WithSnackbarProps} from 'notistack'
import {lastMessageSelector, UserMessageType} from 'fetch-with-redux-observable/dist/user-message/user-message.reducers'
import {useSelector} from 'react-redux'
import {usePrevious} from '../utils'

interface ISnackbarConsumerComponentProps {
    variant: UserMessageType
    time?: number
}

const SnackbarConsumerFC: React.FC<ISnackbarConsumerComponentProps & WithSnackbarProps> = props => {

    const {variant, enqueueSnackbar, time = 4000} = props

    const lastMessage = useSelector(lastMessageSelector(variant))
    const previousMessage = usePrevious(lastMessage)

    useEffect(() => {
        lastMessage?.userMessage &&
        previousMessage?.timestamp !== lastMessage?.timestamp &&
        enqueueSnackbar(lastMessage.userMessage, {variant: variant, autoHideDuration: time})
    })

    return (<></>)

}

export const SnackbarConsumer = withSnackbar(SnackbarConsumerFC)
