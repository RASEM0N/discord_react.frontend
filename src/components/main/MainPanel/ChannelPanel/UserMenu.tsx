import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'

import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    ListItemAvatar,
    Typography,
    Avatar,
} from '@material-ui/core'

import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ImageIcon from '@material-ui/icons/Image'
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'

import useSingOut from '../../../../hooks/useSignOut'
import { RootStateType } from '../../../../store/store'
import { UserType } from '../../../../store/user-reducer'

const useStyle = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#292b2f',
        color: '#4d4f53',
        '& svg': {
            color: '#4d4f53',
        },
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}))

const UserMenu = () => {
    const styles = useStyle()
    const { signOut } = useSingOut()
    const user = useSelector<RootStateType, UserType | null>(
        (state) => state.user.currentUser
    )

    const [open, setOpen] = useState<boolean>(false)

    const handleClick = () => {
        setOpen(!open)
    }

    const handleSignOut = () => {
        signOut()
    }

    return (
        <List component="nav" className={styles.root}>
            <ListItem button onClick={handleClick}>
                <ListItemAvatar>
                    <Avatar src={user?.photoURL ? user.photoURL : undefined} />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        user?.displayName ? (
                            <Typography variant={'h6'}>
                                {user.displayName}
                            </Typography>
                        ) : undefined
                    }
                />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {/*<ListItem button className={styles.nested}>*/}
                    {/*    <ListItemIcon>*/}
                    {/*        <AccountCircleIcon />*/}
                    {/*    </ListItemIcon>*/}
                    {/*    <ListItemText*/}
                    {/*        primary={`Signed is as ${*/}
                    {/*            user?.displayName ? user.displayName : undefined*/}
                    {/*        }`}*/}
                    {/*    />*/}
                    {/*</ListItem>*/}
                    <ListItem button className={styles.nested}>
                        <ListItemIcon>
                            <ImageIcon />
                        </ListItemIcon>
                        <ListItemText primary="Change a avatar" />
                    </ListItem>
                    <ListItem
                        button
                        className={styles.nested}
                        onClick={handleSignOut}
                    >
                        <ListItemIcon>
                            <MeetingRoomIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sing out" />
                    </ListItem>
                    <ListItem button className={styles.nested}>
                        <ListItemIcon>
                            <SettingsApplicationsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </List>
            </Collapse>
        </List>
    )
}

export default UserMenu
