'use client'
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}
const drawerWidth = 240;
const navItems = [
    { title: 'Home', url: '/' },
    { title: 'Specialities', url: '/specialities' },
    { title: 'Doctor', url: '/doctor' },
    { title: 'Services', url: '/services' },
    { title: 'Reviews', url: '/reviews' }
];

const MainNav = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle}>
            <Typography variant="h6" sx={{ my: 2, ml: 2, color:'#0D6EFD' }}>
                <Link href='/'>Dr. OnCall</Link>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <Link href={item.url}>{item.title}</Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: '#fff', color: '#000' }}>
                <Toolbar sx={{width:'100%',display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' }, color: '#0D6EFD' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        // sx={{ flexGrow: 1 }}
                        sx={{color: '#0D6EFD'}}
                    >
                        <Link href='/'>Dr. OnCall</Link>
                    </Typography>
                    {/* Navitems for the Desktop/Laptop Devices */}
                    <Box sx={{
                        display: {
                            xs: 'none', sm: 'block',
                        }
                    }}>
                        {navItems.map((item, index) => (
                            <Button key={index} sx={{
                                mx:1,
                                color: '#000',
                                '&:hover': {
                                    backgroundColor: '#0E82FD',
                                    color: '#fff'
                                }
                            }}>
                                <Link href={item.url}>{item.title}</Link>
                            </Button>
                        ))}
                    </Box>
                    {/* Action Buttons */}
                    <Box sx={{display: 'flex', gap:'8px'}}>
                        <Button variant="contained"><Link href='/login'>Login</Link></Button>
                        <Button variant="outlined"><Link href='/register'>Register</Link></Button>
                    </Box>
                </Toolbar>
            </AppBar>
            {/* //Drawer for Mobile Devices */}
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}

export default MainNav;