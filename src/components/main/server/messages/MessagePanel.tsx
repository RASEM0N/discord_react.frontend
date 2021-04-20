import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Messages from './Messages'
import MessageForm from './MessageForm'

const useStyle = makeStyles((theme) => ({
    root: {
        position: 'relative',
        height: '99%',
        padding: '4px 4px 0 4px',
    },

    messages: {
        height: '92vh',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
            width: 8,
            height: 16,
        },

        '&::-webkit-scrollbar-thumb ': {
            backgroundColor: '#202225',
            borderRadius: 8,
        },
        '&::-webkit-scrollbar-thumb:hover ': {
            backgroundColor: '#DCDDDE',
        },

        '&::-webkit-scrollbar-track': {
            borderRadius: 8,
            backgroundColor: '#2e3338',
        },
    },
}))

const MessagePanel = () => {
    const styles = useStyle()

    return (
        <div className={styles.root}>
            <div className={styles.messages}>
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
            </div>

            <MessageForm />
        </div>
    )
}

export default MessagePanel
