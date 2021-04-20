import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Messages from './Message'
import MessageForm from './MessageForm'
import { useSelector } from 'react-redux'
import { Store } from '../../../../interfaces/store'
import { Channel } from '../../../../interfaces/channel'
import { channelRef, messageRef } from '../../../../firebase/config'
import { Message } from '../../../../interfaces/message'

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

const MessagesPanel = () => {
    const styles = useStyle()

    const currentChannel = useSelector<
        Store,
        {
            id: string
            channel: Channel
        } | null
    >((state) => state.channel.currentChannel)

    const [messages, setMessages] = useState<
        Array<{
            id: string
            message: Message
        }>
    >([])

    useEffect(() => {
        if (!currentChannel) return
        // @ts-ignore
        let loadedMessages = []
        // @ts-ignore
        messageRef.child(currentChannel.id).on('child_added', (snap) => {
            let channel = {
                id: snap.key,
                message: snap.val(),
            }
            loadedMessages.push(channel)
            console.log(channel)
            // @ts-ignore
            setMessages([...messages, ...loadedMessages])
        })
    }, [currentChannel])

    console.log(messages)

    return (
        <div className={styles.root}>
            {currentChannel && (
                <>
                    <div className={styles.messages}>
                        {messages &&
                            messages.length > 0 &&
                            messages.map((item) => {
                                console.log('1')
                                return (
                                    <Messages key={item.id} {...item.message} />
                                )
                            })}
                    </div>

                    <MessageForm currentChannel={currentChannel} />
                </>
            )}
        </div>
    )
}

export default MessagesPanel
