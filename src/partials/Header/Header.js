import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './Header.style'

// JSS - JavaScript Stylesheet


const Header = () => {
    const classes = useStyles()
    return (
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
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
    )
}

export default Header