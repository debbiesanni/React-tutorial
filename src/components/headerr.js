import React from 'react';
import {
    Grid,
    AppBar,
    Toolbar,
    Typography,
    Hidden,
    Divider,
    List,
    ListItem,
    Button,
    ListItemText,
    IconButton,
    Drawer,
    ButtonGroup,
    Modal,
    Backdrop,
    Fade,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import SortIcon from '@material-ui/icons/Sort';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import Logo from '../images/logoo.png';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#B9CDE3',
        width: '100%',
        flexGrow: 1,
    },
    avatar: {
        marginLeft: '32%',
        width: 100,
        height: 100,
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: 5,
        padding: 20,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
    },
}));

function View(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ fontSize: 14, color: '#717171' }}>
            <List>
                <ListItem button onclick={handleOpen}>
                    <ListItemText>
                        <Typography
                            style={{
                                fontSize: 14,
                                color: '#717171',
                            }}
                        >
                            Market Place
                        </Typography>
                    </ListItemText>
                </ListItem>

                <ListItem button onclick={handleOpen}>
                    <ListItemText>
                        <Typography
                            style={{
                                fontSize: 14,
                                color: '#f57e27',
                            }}
                        >
                            Log in
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem button onclick={handleOpen}>
                    <ListItemText>
                        <Typography
                            style={{
                                fontSize: 14,
                                color: '#f57e27',
                            }}
                        >
                            Create Account
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem button onclick={handleOpen}>
                    <ListItemText>
                        <Typography
                            style={{
                                fontSize: 14,
                                color: '#717171',
                            }}
                        >
                            Own a Center
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <listItemTest>
                        <a
                            href="https://forms.gle/4N7ZCLKyp3LSRuZo7"
                            target="_blank"
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                fontSize: 15,
                            }}
                        >
                            <Typography
                                variant="caption"
                                style={{ fontSize: 14 }}
                            >
                                Apply as Tutor
                            </Typography>
                        </a>
                    </listItemTest>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <a href="/features" style={{ textDecoration: 'none' }}>
                            {' '}
                            <Typography
                                style={{
                                    fontSize: 14,
                                    color: '#717171',
                                }}
                            >
                                Features
                            </Typography>
                        </a>
                    </ListItemText>
                </ListItem>
                <ListItem button onclick={handleOpen}>
                    <ListItemText>
                        <Typography
                            style={{
                                fontSize: 14,
                                color: '#717171',
                            }}
                        >
                            Pricing
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem button onclick={handleOpen}>
                    <ListItemText>
                        <Typography
                            style={{
                                fontSize: 14,
                                color: '#717171',
                            }}
                        >
                            Integration
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2
                            id="transition-modal-title"
                            style={{ textAlign: 'center', color: '#f57e27' }}
                        >
                            Contentionary
                        </h2>
                        <p
                            id="transition-modal-description"
                            style={{ textAlign: 'center' }}
                        >
                            Coming Soon
                        </p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );

    return (
        <div className={classes.root}>
            <Grid container>
                <AppBar
                    position="fixed"
                    className={classes.appBar}
                    style={{
                        height: 70,
                        backgroundColor: '#212121',
                    }}
                >
                    <Toolbar>
                        <Grid container style={{ width: '100%' }}>
                            <Hidden smDown>
                                <Grid item xs={12}>
                                    <div
                                        style={{
                                            marginLeft: '5%',
                                            marginRight: '5%',
                                        }}
                                    >
                                        <Grid container>
                                            <Grid item sm={12}>
                                                <div
                                                    style={{
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    <a
                                                        href="https://contentionary.com"
                                                        style={{
                                                            textDecoration:
                                                                'none',
                                                            color: 'inherit',
                                                        }}
                                                    >
                                                        <img
                                                            src={Logo}
                                                            height="50px"
                                                            width="auto"
                                                            alt="Contentionary_Logo"
                                                            style={{
                                                                marginTop: 10,
                                                                marginRight:
                                                                    'auto',
                                                                marginLeft:
                                                                    'auto',
                                                                justifyContent:
                                                                    'center',
                                                                alignContent:
                                                                    'center',
                                                            }}
                                                        />
                                                    </a>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Hidden>

                            <Hidden mdUp>
                                <Grid item xs={12}>
                                    <div style={{ textAlign: 'center' }}>
                                        <a
                                            href="https://contentionary.com"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'inherit',
                                            }}
                                        >
                                            <img
                                                src={Logo}
                                                height="50px"
                                                width="auto"
                                                alt="School Logo"
                                                style={{ marginTop: 15 }}
                                            />
                                        </a>
                                    </div>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor="left"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>

                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <h2
                                id="transition-modal-title"
                                style={{
                                    textAlign: 'center',
                                    color: '#f57e27',
                                }}
                            >
                                Contentionary
                            </h2>
                            <p
                                id="transition-modal-description"
                                style={{ textAlign: 'center' }}
                            >
                                Coming Soon
                            </p>
                        </div>
                    </Fade>
                </Modal>
            </Grid>
        </div>
    );
}
export default View;
