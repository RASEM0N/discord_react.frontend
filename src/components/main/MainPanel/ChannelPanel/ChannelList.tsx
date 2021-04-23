import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import ChannelForm from './ChannelForm'

import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
} from '@material-ui/core'

import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import LineStyleIcon from '@material-ui/icons/LineStyle'
import RemoveIcon from '@material-ui/icons/Remove'

import { channelRef } from '../../../../firebase/config'
import {
    ChannelType,
    getCurrentChannel,
} from '../../../../store/channel-reducer'
import { AppDispatchType } from '../../../../store/store'

const useStyle = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        justifyContent: 'center',
        color: '#7f8a97',
        '& svg': {
            color: '#7f8a97',
        },
    },
    nested: {
        paddingTop: theme.spacing(1) - 5,
        paddingBottom: theme.spacing(1) - 5,
        paddingLeft: theme.spacing(4),
    },

    add: {
        minWidth: 'auto',
    },
    item: {
        '& .MuiListItemIcon-root': {
            // minWidth: '10px',
        },
    },
}))

const ChannelList = () => {
    const styles = useStyle()
    const dispatch = useDispatch<AppDispatchType>()
    const [open, setOpen] = useState<boolean>(true)
    const [openAdd, setOpenAdd] = useState<boolean>(false)
    const [channels, setChannel] = useState<Array<ChannelType>>([])

    const handleClick = (e: any) => {
        if (e.target.id === 'openModal') {
            setOpen(!open)
        } else {
            if (e.target.id === 'openAdd') {
                setOpenAdd(true)
            }
        }
    }

    useEffect(() => {
        let loadedChannels: Array<ChannelType> = []
        channelRef.on('child_added', (snap) => {
            let channel: ChannelType = {
                id: snap.key,
                ...snap.val(),
            }
            loadedChannels.push(channel)
            setChannel([...channels, ...loadedChannels])
        })
    }, [])

    return (
        <List component="nav" className={styles.root}>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <LineStyleIcon />
                </ListItemIcon>
                <ListItemText primary={'ChannelList name'} />
                {open ? (
                    <ExpandLess id={'openModal'} />
                ) : (
                    <ExpandMore id={'openModal'} />
                )}
                <ListItemIcon className={styles.add}>
                    <AddIcon id={'openAdd'} />
                </ListItemIcon>
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {channels &&
                        channels.length > 0 &&
                        channels.map((item) => (
                            <ListItem
                                button
                                className={styles.nested}
                                key={item.id}
                                onClick={() =>
                                    dispatch(getCurrentChannel(item))
                                }
                            >
                                <ListItemIcon>
                                    <RemoveIcon />
                                </ListItemIcon>
                                <ListItemText primary={item.channelName} />
                            </ListItem>
                        ))}
                </List>
            </Collapse>

            {openAdd && <ChannelForm setOpenAdd={setOpenAdd} />}
        </List>
    )
}

export default ChannelList
