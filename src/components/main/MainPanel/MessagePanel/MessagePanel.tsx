import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MessageItem from './MessageItem'
import MessageForm from './MessageForm'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../../../store/store'
import { messageRef } from '../../../../firebase/config'
import { ChannelTypeForState } from '../../../../store/channel-reducer'
import { MessageTypeForState } from '../../../../store/message-reducer'

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

    const currentChannel = useSelector<
        RootStateType,
        ChannelTypeForState | null
    >((state) => state.channel.currentChannel)

    const [messages, setMessages] = useState<Array<MessageTypeForState>>([])

    useEffect(() => {
        if (!currentChannel) return
        let loadedMessages: Array<MessageTypeForState> = []
        messageRef.child(currentChannel.channelId).on('child_added', (snap) => {
            let channel: MessageTypeForState = {
                messageId: snap.key,
                ...snap.val(),
            }
            loadedMessages.push(channel)
            console.log(channel)
            setMessages([...messages, ...loadedMessages])
        })
    }, [currentChannel])

    return (
        <div className={styles.root}>
            {currentChannel && (
                <>
                    <div className={styles.messages}>
                        {messages &&
                            messages.length > 0 &&
                            messages.map((item) => {
                                return (
                                    <MessageItem
                                        key={item.messageId}
                                        {...item}
                                    />
                                )
                            })}
                    </div>

                    <MessageForm currentChannel={currentChannel} />
                </>
            )}
        </div>
    )
}

export default MessagePanel
