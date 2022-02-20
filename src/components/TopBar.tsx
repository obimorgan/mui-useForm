import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';

export const TopBar = () => {
    return (
        <>
            <Box>
                <AppBar position='fixed' color='primary'>
                    <Toolbar>
                        <IconButton
                            size='medium'
                            edge='start'
                            color='inherit'
                            aria-label='open drawer'
                            sx={{ mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography>Chat</Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}> */}
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                // aria-controls={menuId}
                                aria-haspopup="true"
                                // onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        {/* </Box> */}
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
} 