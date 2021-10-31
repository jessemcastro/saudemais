import { useState } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core'

import { useHistory } from 'react-router-dom'

import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import ListIcon from '@material-ui/icons/List'
import PersonAddIcon from '@material-ui/icons/PersonAdd'

import useStyles from './Header.style'

// JSS - JavaScript Stylesheet


const Header = () => {
    const classes = useStyles()
    const history = useHistory()

    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleMenuClick = route => {
        history.push(route)
        handleToggleMenu()
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => handleToggleMenu()}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title} component="div" sx={{ flexGrow: 1 }}>
                    My App
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
                <List>
                    <ListItem button onClick={() => handleMenuClick('/')}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => handleMenuClick('/customers')}>
                        <ListItemIcon>
                            <ListIcon />
                        </ListItemIcon>
                        <ListItemText>Lista de Clientes</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => handleMenuClick('/customers/add')}>
                        <ListItemIcon>
                            <PersonAddIcon />
                        </ListItemIcon>
                        <ListItemText>Cadastro de Clientes</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default Header