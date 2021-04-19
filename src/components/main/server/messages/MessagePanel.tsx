import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Messages from './Messages'
import MessageForm from './MessageForm'

const useStyle = makeStyles((theme) => ({
    root: {
        position: 'relative',

        height: '99%',
    },
}))

const MessagePanel = () => {
    const styles = useStyle()

    return (
        <div className={styles.root}>
            <Messages />
            <MessageForm />
        </div>
    )
}

export default MessagePanel
