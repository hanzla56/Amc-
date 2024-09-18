import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import logo from "@/assets/logo.png"
import { IoIosSearch } from "react-icons/io";


const Mobile_nav = () => {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home', 'Discover', 'AMC Kids', 'Influence','Español'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            {/* <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon> */}
                            <ListItemText primary={text} sx={{ color: 'white', textAlign:'center' }}  />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <section className='mobile_nav_section'>
            <div className='mobile_nav_container'>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={toggleDrawer('left', true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{textAlign:"center"}}>
                                <img src={logo.src} className='nav_mobile_logo' alt="" />
                            </Typography>
                            <Button color="inherit"><IoIosSearch style={{fontSize:"28px"}} /></Button>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Drawer
                    anchor='left'
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    sx={{ '& .MuiDrawer-paper': { backgroundColor: 'black' } }}>
                    {list('left')}
                </Drawer>
            </div>
        </section>
    )
}

export default Mobile_nav;
