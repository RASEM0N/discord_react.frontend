import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import LineStyleIcon from '@material-ui/icons/LineStyle'
import RemoveIcon from '@material-ui/icons/Remove'
import CreateChannelForm from './CreateChannelForm'
import { channelRef } from '../../../../firebase/config'
import { Channel as Channel1 } from '../../../../interfaces/channel'
import { useDispatch } from 'react-redux'
import { setCurrentChannel } from '../../../../store/channel/channel'

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

const Channel = () => {
    const styles = useStyle()
    const dispatch = useDispatch()
    const [open, setOpen] = useState<boolean>(true)
    const [openAdd, setOpenAdd] = useState<boolean>(false)
    const [channels, setChannel] = useState<Array<Channel1>>([])

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // @ts-ignore
        if (e.target.id === 'openModal') {
            setOpen(!open)
        } else {
            // @ts-ignore
            if (e.target.id === 'openAdd') {
                setOpenAdd(true)
            }
        }
    }
    // #TODO Закинуть в global store
    useEffect(() => {
        // @ts-ignore
        let loadedChannels = []
        channelRef.on('child_added', (snap) => {
            loadedChannels.push(snap.val())
            // @ts-ignore
            setChannel([...channels, ...loadedChannels])
        })
    }, [])

    return (
        <List component="nav" className={styles.root}>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <LineStyleIcon />
                </ListItemIcon>
                <ListItemText primary={'Channel name'} />
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
                                onClick={() =>
                                    dispatch(setCurrentChannel(item))
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

            {openAdd && <CreateChannelForm setOpenAdd={setOpenAdd} />}
        </List>
    )
}

export default Channel
