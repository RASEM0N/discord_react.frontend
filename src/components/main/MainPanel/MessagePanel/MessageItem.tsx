import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { MessageType } from '../../../../store/message-reducer'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: '0px 0',
        backgroundColor: 'inherit',
    },
    user: {
        display: 'inline',
        color: '#ff0000',
        marginRight: 5,
        fontSize: 16,
    },
    date: {
        display: 'inline',
        color: '#676769',
        fontSize: 12,
    },
    text: {
        color: '#DCDDDE',
        fontSize: 16,
    },
}))

const MessageItem: React.FC<MessageType> = ({ content, user, date }) => {
    const styles = useStyles()

    return (
        <List className={styles.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={user.avatar} />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <>
                            <Typography
                                className={styles.user}
                                variant={'body1'}
                            >
                                {user.name}
                            </Typography>{' '}
                            <Typography
                                className={styles.date}
                                variant={'body2'}
                            >
                                {date}
                            </Typography>
                        </>
                    }
                    secondary={
                        <>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                                className={styles.text}
                            >
                                {content}
                            </Typography>
                        </>
                    }
                />
            </ListItem>
            {/*<Divider variant="inset" component="li" />*/}
        </List>
    )
}
export default MessageItem
