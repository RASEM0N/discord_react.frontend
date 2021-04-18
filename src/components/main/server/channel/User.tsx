import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ImageIcon from '@material-ui/icons/Image'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications'
import Avatar from '@material-ui/core/Avatar'
import { useDispatch, useSelector } from 'react-redux'
import { Store } from '../../../../interfaces/store'
import { IUser } from '../../../../interfaces/user'
import { clearCurrentUser } from '../../../../store/user/user'
import useSingOut from '../../../../hooks/useSignOut'

const useStyle = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#292b2f',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}))

const User = () => {
    const styles = useStyle()
    const { isLoading, signOut } = useSingOut()
    const dispatch = useDispatch()
    const user = useSelector<Store, IUser | null>(
        (state) => state.user.currentUser
    )

    const [open, setOpen] = useState<boolean>(true)

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
                    <Avatar
                        alt="Remy Sharp"
                        src="https://cdn.awwni.me/1eq60.jpg"
                    />
                </ListItemAvatar>
                <ListItemText primary="#USER" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={styles.nested}>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Signed is as #USER" />
                    </ListItem>
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

export default User
