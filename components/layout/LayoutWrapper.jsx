'use client';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Collapse, Grid } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import Link from 'next/link';
import Image from 'next/image';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Fragment, useState } from 'react';
import Footer from './Footer';
const drawerWidth = 200;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(!open && {
        [theme.breakpoints.up('xs')]: {
            width: `calc(100% - ${theme.spacing(7)})`,
        },
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${theme.spacing(7.8)})`,
        },
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${theme.spacing(8)})`,
        },
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,

        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),


    }),
}));
const FooterBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    bottom: 0,
    top: `calc(100% - ${theme.spacing(5)})`,

    ...(!open && {
        [theme.breakpoints.up('xs')]: {
            width: `calc(100% - ${theme.spacing(7)})`,
        },
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${theme.spacing(7.8)})`,
        },
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${theme.spacing(8)})`,
        },
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,


        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),


    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function LayoutWrapper({ children }) {

    const [open, setOpen] = useState(false);


    const handleDrawerControl = () => {
        setOpen(!open);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <AppBar position="fixed" open={open} sx={{ backgroundColor: '#33ab9f', border: 0 }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerControl}
                            edge="start"
                            sx={{
                                marginRight: 5,
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Grid display={'grid'} gridTemplateColumns={'1fr 1fr 1fr'} gap={3}>
                            <Link href='/'>
                                <ListItemText primary={'Accounts'} />
                            </Link>
                            <Link href='/'>
                                <span style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                                    <LogoutIcon sx={{ color: 'white' }} />
                                    <ListItemText primary={`Logout`} />
                                </span>
                            </Link>
                            <Link href='/'>
                                <span style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                                    <FormatListBulletedIcon sx={{ color: 'white' }} />
                                    <ListItemText primary={`Modules`} />
                                </span>
                            </Link>

                        </Grid>

                    </Toolbar>
                </AppBar>

                <Drawer variant="permanent" open={open}>
                    <Link href='/'>
                        {
                            open ? <Grid sx={{ display: 'flex', justifyContent: 'start', py: 2, pl: 2, backgroundColor: '#33ab9f', color: 'white' }}>
                                <Grid display={'flex'} flexDirection={'column'} gap={1.5}>
                                    <Image src={'/dumy_teacher.png'}
                                        height={60}
                                        width={60}
                                        alt='Student photo'
                                        loading='lazy'
                                        style={{
                                            borderRadius: '50%'
                                        }}
                                    />
                                    <Typography>Omni Solution Ltd</Typography>
                                </Grid>
                            </Grid>
                                :
                                <Grid sx={{
                                    backgroundColor: '  ', color: 'white',
                                    height: '1fr', padding: 1,
                                }}>
                                    <img src={'/omni.jpeg'}

                                        alt='Student photo'
                                        loading='lazy'
                                        style={{
                                            borderRadius: '50%',
                                            maxHeight: '100%',
                                            border: '1px solid',
                                        }}
                                    />
                                </Grid>
                        }
                    </Link>

                    <Divider />
                    <List>
                        {/* {['Inbox', 'Starred'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))} */}
                        <ListItem disablePadding sx={{ display: 'block' }}>
                            <MenuWithSubmenu
                                menu={{ title: 'Settings', icon: <SettingsIcon /> }}
                                subMenu={[
                                    { title: 'Group Entry', icon: <GroupIcon />, link: '/group-entry' },
                                ]}
                            />
                        </ListItem>


                    </List>

                </Drawer>
                <Box component="main" sx={{
                    flexGrow: 1, p: 2, width: '100%',
                    backgroundColor: '#f5f5f5'
                }}>
                    <DrawerHeader />
                    <Grid sx={{ minHeight: 'calc(100vh - 100px) !important' }}>
                        {children}
                    </Grid>
                </Box>
            </Box>
            <FooterBar position="fixed" open={open} sx={{ backgroundColor: 'white', color: 'black', border: '1px solid lightGrey', px: 2, py: 1 }}>
                <Footer />
            </FooterBar>
        </>
    );
}



const MenuWithSubmenu = ({ menu, subMenu }) => {
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <ListItemButton onClick={() => setOpen(!open)}>
                <ListItemIcon>
                    {menu?.icon}
                </ListItemIcon>
                <ListItemText primary={`${menu?.title}`} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        subMenu.map(i => (
                            <Link href={i?.link}>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        {i?.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={`${i?.title}`} />
                                </ListItemButton>
                            </Link>
                        )
                        )
                    }


                </List>
            </Collapse>
        </Fragment>
    );
};

