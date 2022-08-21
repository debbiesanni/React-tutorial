import React from 'react';

import {
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardHeader,
    Avatar,
    Hidden,
    Button,
    Tabs,
    AppBar,
    Tab,
    Box,
    Divider,
    Modal,
    Backdrop,
    Fade,
    Paper,
} from '@material-ui/core';
import {} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import Predict from '../../images/Predict.svg';
import Testing from '../../images/Testing.svg';
import Swag from '../../images/Swag.svg';
import Detailed from '../../images/Detailed.svg';
import Wrapper from '../../components/wrapper';
// import cntn from '../../images/cntn.png';
// import image from '../../images/prepare.jpg';
// import image1 from '../../images/prep.jpg';
// import App from '../../images/onlineexam.jpg';
// import App1 from '../../images/phapp.png';

const cntn = require('../../images/cntn.png');
const image = require('../../images/prepare.jpg');
const image1 = require('../../images/prep.jpg');
const App = require('../../images/onlineexam.jpg');
const App1 = require('../../images/phapp.png');

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: '#181818',
        width: '100%',
    },

    firstdiv: {
        width: '100%',
        backgroundBlendMode: 'overlay',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
    },
    contentText: {},
    thirdDiv: {},
}));

function Index() {
    const classes = useStyle();

    return (
        <div>
            <Wrapper
                showFooter={true}
                showHeader={true}
                title="Features - Preparatory Exam Manager"
                description="Contentionary"
            >
                <div>
                    <Grid container style={{ marginBottom: 60 }}>
                        <Hidden smDown>
                            <Grid item md={6}>
                                <div
                                    style={{
                                        paddingLeft: '10%',
                                        paddingRight: 50,
                                    }}
                                >
                                    <Hidden mdDown>
                                        <Typography
                                            style={{
                                                fontSize: 60,
                                                color: '#333333',
                                                lineHeight: 1.0,
                                                marginTop: 100,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            PREPARATORY EXAMINATION MANAGER{' '}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 20,
                                                marginTop: 30,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            {' '}
                                            (For Private educators, Schools,
                                            institutes or centres)
                                        </Typography>
                                    </Hidden>

                                    <Hidden only="lg">
                                        <Typography
                                            style={{
                                                fontSize: 50,
                                                color: '#333333',
                                                marginTop: 70,
                                                lineHeight: 1.0,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            PREPARATORY EXAMINATION MANAGER{' '}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 17,
                                                marginTop: 30,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            {' '}
                                            (For Private educators, Schools,
                                            institutes or centres)
                                        </Typography>
                                    </Hidden>

                                    <a
                                        href="https://contentionary.com/create-account"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            paddingLeft: '10%',
                                        }}
                                    >
                                        <Button
                                            style={{
                                                backgroundColor: '#F57E27',
                                                marginTop: 20,
                                                padding: '10px 50px',
                                                textTransform: 'inherit',
                                                color: '#ffffff',
                                            }}
                                        >
                                            Get Started
                                        </Button>
                                    </a>
                                </div>
                            </Grid>
                            <Grid item md={6}>
                                <img
                                    src={image}
                                    style={{
                                        width: '100%',
                                        paddingBottom: 30,
                                    }}
                                />
                            </Grid>
                        </Hidden>
                        <Hidden mdUp>
                            <Grid item xs={12}>
                                <div
                                    style={{
                                        padding: '50px 20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography
                                        style={{
                                            fontSize: 30,
                                            color: '#333333',
                                            lineHeight: 1.0,
                                        }}
                                    >
                                        PREPARATORY EXAMINATION MANAGER{' '}
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                            marginTop: 20,
                                        }}
                                    >
                                        {' '}
                                        (For Private educators, Schools,
                                        institutes or centres)
                                    </Typography>

                                    <a
                                        href="https://contentionary.com/create-account"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <Button
                                            style={{
                                                backgroundColor: '#F57E27',
                                                marginTop: 30,
                                                padding: '10px 50px',
                                                textTransform: 'inherit',
                                                color: '#ffffff',
                                            }}
                                        >
                                            Get Started
                                        </Button>
                                    </a>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <img src={image} style={{ width: '100%' }} />
                            </Grid>
                        </Hidden>
                    </Grid>

                    <div style={{ padding: '0 10% 100px 10%' }}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Hidden smDown>
                                    <Typography
                                        style={{
                                            fontSize: 22,
                                            textAlign: 'center',
                                            color: '#333333',
                                            padding: '0 10%',
                                        }}
                                    >
                                        Contentionary preparatory examination
                                        manager is everything you need to
                                        organize, track, and nurture your
                                        students to be better. 100% accessible
                                        with all devices, preparatory Students
                                        can be at their locations and still get
                                        access to teacher’s preparatory exams.
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp>
                                    <Typography
                                        style={{
                                            fontSize: 18,
                                            textAlign: 'center',
                                            color: '#333333',
                                        }}
                                    >
                                        {' '}
                                        Contentionary preparatory examination
                                        manager is everything you need to
                                        organize, track, and nurture your
                                        students to be better. 100% accessible
                                        with all devices, preparatory Students
                                        can be at their locations and still get
                                        access to teacher’s preparatory exams.
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Hidden smDown>
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    style={{ marginTop: 50 }}
                                >
                                    <img src={image1} width="100%" />
                                </Grid>
                            </Hidden>
                            <Grid item xs={12} md={6}>
                                <Hidden smDown>
                                    <hr
                                        style={{
                                            width: '10%',
                                            backgroundColor: '#F57E27',
                                            marginLeft: '45%',
                                            border: '2px solid #f57e27',
                                            marginBottom: 20,
                                            marginTop: 30,
                                        }}
                                    />
                                    <Grid
                                        container
                                        spacing={5}
                                        style={{
                                            paddingLeft: '10%',
                                        }}
                                    >
                                        <Grid
                                            item
                                            xs={12}
                                            style={{ textAlign: 'center' }}
                                        >
                                            <Hidden smDown>
                                                <Typography
                                                    gutterBottom
                                                    component="p"
                                                    style={{
                                                        color: '#333333',
                                                        fontSize: 25,
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    The All-in-One tool to
                                                    conduct preparatory exams.
                                                </Typography>
                                            </Hidden>
                                        </Grid>

                                        <Grid
                                            xs={12}
                                            sm={6}
                                            item
                                            style={{
                                                textAlign: 'center',
                                                color: '#FBF1D1',
                                            }}
                                        >
                                            <Paper
                                                style={{
                                                    backgroundColor: '#f5f5f5',
                                                }}
                                            >
                                                <div style={{ padding: 10 }}>
                                                    <img
                                                        src={Predict}
                                                        alt="Predict"
                                                        style={{
                                                            height: '100px',
                                                            width: 'auto',
                                                            margin: '10px auto',
                                                        }}
                                                    />
                                                </div>
                                                <p
                                                    style={{
                                                        textAlign: 'center',
                                                        fontSize: 20,
                                                        margin: 10,
                                                        color: '#FF8019',
                                                    }}
                                                >
                                                    {' '}
                                                    Real-time scores:{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    Exams is automatically
                                                    configured to show scores
                                                    after exam is submitted
                                                </p>
                                            </Paper>
                                        </Grid>
                                        <Grid
                                            xs={12}
                                            sm={6}
                                            item
                                            style={{
                                                textAlign: 'center',
                                                color: '#FBF1D1',
                                            }}
                                        >
                                            <Paper
                                                style={{
                                                    backgroundColor: '#f5f5f5',
                                                }}
                                            >
                                                <div style={{ padding: 5 }}>
                                                    <img
                                                        src={Testing}
                                                        alt="Predict"
                                                        style={{
                                                            height: '100px',
                                                            width: 'auto',
                                                            margin: '10px auto',
                                                        }}
                                                    />
                                                </div>
                                                <p
                                                    style={{
                                                        textAlign: 'center',
                                                        fontSize: 20,
                                                        margin: 10,
                                                        color: '#FF8019',
                                                    }}
                                                >
                                                    {' '}
                                                    Show Correction:{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    Activate the tool for
                                                    preparing candidates to see
                                                    corrections after taking
                                                    exam.
                                                </p>
                                            </Paper>
                                        </Grid>
                                        <Grid
                                            xs={12}
                                            sm={6}
                                            item
                                            style={{
                                                textAlign: 'center',
                                                color: '#FBF1D1',
                                            }}
                                        >
                                            <Paper
                                                style={{
                                                    backgroundColor: '#f5f5f5',
                                                }}
                                            >
                                                <div style={{ padding: 10 }}>
                                                    <img
                                                        src={Swag}
                                                        alt="Predict"
                                                        style={{
                                                            height: '100px',
                                                            width: 'auto',
                                                            margin: '10px auto',
                                                        }}
                                                    />
                                                </div>
                                                <p
                                                    style={{
                                                        textAlign: 'center',
                                                        fontSize: 20,
                                                        margin: 10,
                                                        color: '#FF8019',
                                                    }}
                                                >
                                                    {' '}
                                                    Show explanation:{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    Upload brief explanations to
                                                    questions added for
                                                    preparing students to get
                                                    better
                                                </p>
                                            </Paper>
                                        </Grid>
                                        <Grid
                                            xs={12}
                                            sm={6}
                                            item
                                            style={{
                                                textAlign: 'center',
                                                color: '#FBF1D1',
                                            }}
                                        >
                                            <Paper
                                                style={{
                                                    backgroundColor: '#f5f5f5',
                                                }}
                                            >
                                                <div style={{ padding: 15 }}>
                                                    <img
                                                        src={Detailed}
                                                        alt="Predict"
                                                        style={{
                                                            height: '100px',
                                                            width: 'auto',
                                                            margin: '10px auto',
                                                        }}
                                                    />
                                                </div>
                                                <p
                                                    style={{
                                                        textAlign: 'center',
                                                        fontSize: 20,
                                                        margin: 10,
                                                        color: '#FF8019',
                                                    }}
                                                >
                                                    {' '}
                                                    Re-attempt:{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    Allow preparing students to
                                                    re-attempt exams as many
                                                    times as possible or at a
                                                    certain number of attempts
                                                    and validity period in days.
                                                </p>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Hidden>
                                <Hidden mdUp>
                                    <hr
                                        style={{
                                            width: '10%',
                                            backgroundColor: '#F57E27',
                                            marginLeft: '45%',
                                            border: '2px solid #f57e27',
                                            marginBottom: 30,
                                            marginTop: 50,
                                        }}
                                    />
                                    <Grid container spacing={5}>
                                        <Grid
                                            item
                                            xs={12}
                                            style={{ textAlign: 'center' }}
                                        >
                                            <Hidden mdUp>
                                                <Typography
                                                    gutterBottom
                                                    component="p"
                                                    style={{
                                                        color: '#333333',
                                                        marginBottom: 20,
                                                        fontSize: 25,
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    The All-in-One tool to
                                                    conduct preparatory exams.
                                                </Typography>
                                            </Hidden>
                                        </Grid>

                                        <Grid
                                            xs={12}
                                            sm={6}
                                            md={3}
                                            item
                                            style={{
                                                textAlign: 'center',
                                                color: '#FBF1D1',
                                            }}
                                        >
                                            <Paper
                                                style={{
                                                    backgroundColor: '#f5f5f5',
                                                }}
                                            >
                                                <div style={{ padding: 10 }}>
                                                    <img
                                                        src={Predict}
                                                        width="70%"
                                                        alt="Predict"
                                                        style={{
                                                            margin: '10px auto',
                                                        }}
                                                    />
                                                </div>
                                                <p
                                                    style={{
                                                        textAlign: 'center',
                                                        fontSize: 20,
                                                        margin: 10,
                                                        color: '#FF8019',
                                                    }}
                                                >
                                                    {' '}
                                                    Real-time scores:{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    Exams is automatically
                                                    configured to show scores
                                                    after exam is submitted
                                                </p>
                                            </Paper>
                                        </Grid>
                                        <Grid
                                            xs={12}
                                            sm={6}
                                            md={3}
                                            item
                                            style={{
                                                textAlign: 'center',
                                                color: '#FBF1D1',
                                            }}
                                        >
                                            <Paper
                                                style={{
                                                    backgroundColor: '#f5f5f5',
                                                }}
                                            >
                                                <div style={{ padding: 5 }}>
                                                    <img
                                                        src={Testing}
                                                        width="70%"
                                                        alt="Predict"
                                                        style={{
                                                            margin: '10px auto',
                                                        }}
                                                    />
                                                </div>
                                                <p
                                                    style={{
                                                        textAlign: 'center',
                                                        fontSize: 20,
                                                        margin: 10,
                                                        color: '#FF8019',
                                                    }}
                                                >
                                                    {' '}
                                                    Show Correction:{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    Activate the tool for
                                                    preparing candidates to see
                                                    corrections after taking
                                                    exam.
                                                </p>
                                            </Paper>
                                        </Grid>
                                        <Grid
                                            xs={12}
                                            sm={6}
                                            md={3}
                                            item
                                            style={{
                                                textAlign: 'center',
                                                color: '#FBF1D1',
                                            }}
                                        >
                                            <Paper
                                                style={{
                                                    backgroundColor: '#f5f5f5',
                                                }}
                                            >
                                                <div style={{ padding: 10 }}>
                                                    <img
                                                        src={Swag}
                                                        width="70%"
                                                        alt="Predict"
                                                        style={{
                                                            margin: '10px auto',
                                                        }}
                                                    />
                                                </div>
                                                <p
                                                    style={{
                                                        textAlign: 'center',
                                                        fontSize: 20,
                                                        margin: 10,
                                                        color: '#FF8019',
                                                    }}
                                                >
                                                    {' '}
                                                    Show explanation:{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    Upload brief explanations to
                                                    questions added for
                                                    preparing students to get
                                                    better
                                                </p>
                                            </Paper>
                                        </Grid>
                                        <Grid
                                            xs={12}
                                            sm={6}
                                            md={3}
                                            item
                                            style={{
                                                textAlign: 'center',
                                                color: '#FBF1D1',
                                            }}
                                        >
                                            <Paper
                                                style={{
                                                    backgroundColor: '#f5f5f5',
                                                }}
                                            >
                                                <div style={{ padding: 15 }}>
                                                    <img
                                                        src={Detailed}
                                                        width="70%"
                                                        alt="Predict"
                                                        style={{
                                                            margin: '10px auto',
                                                        }}
                                                    />
                                                </div>
                                                <p
                                                    style={{
                                                        textAlign: 'center',
                                                        fontSize: 20,
                                                        margin: 10,
                                                        color: '#FF8019',
                                                    }}
                                                >
                                                    {' '}
                                                    Re-attempt:{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    Allow preparing students to
                                                    re-attempt exams as many
                                                    times as possible or at a
                                                    certain number of attempts
                                                    and validity period in days.
                                                </p>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Hidden>
                            </Grid>
                        </Grid>
                    </div>

                    <div
                        className={classes.thirdDiv}
                        style={{ backgroundColor: '#f5f5f5' }}
                    >
                        <div style={{ padding: '100px 10%', fontSize: 20 }}>
                            <Grid container spacing={8}>
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    style={{ textAlign: 'center' }}
                                >
                                    <img src={App} width="100%" height="auto" />
                                    <Hidden smDown>
                                        <a
                                            href="https://contentionary.com/"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <Button
                                                variant="contained"
                                                style={{
                                                    backgroundColor: '#F57E27',
                                                    textTransform: 'inherit',
                                                    marginTop: 30,
                                                    color: '#fff',
                                                    padding: '10px 20px',
                                                    textAlign: 'center',
                                                    fontSize: 15,
                                                }}
                                            >
                                                Start now to conduct Exams
                                            </Button>
                                        </a>
                                    </Hidden>
                                </Grid>
                                <Grid
                                    xs={12}
                                    md={6}
                                    item
                                    style={{
                                        fontSize: 30,
                                        color: '#333333',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography
                                        style={{
                                            fontSize: 25,
                                            textAlign: 'left',
                                        }}
                                    >
                                        Preparatory exam manager can be used
                                        for:
                                    </Typography>
                                    <Divider
                                        style={{
                                            marginTop: 5,
                                            marginBottom: 20,
                                            backgroundColor: '#F57E27',
                                        }}
                                    />
                                    <div>
                                        <ul>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Terminal Exam preparation
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Professional exam preparation
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Certificate Exams preparation
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Recruitment Exams preparation
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Aptitude tests preparation
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Scholarship test preparation
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                International exam programs
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Schools’ Entrance examination
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Any Preparatory Exams
                                            </li>
                                        </ul>
                                    </div>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                            textAlign: 'left',
                                        }}
                                    >
                                        And yes, it's free to get started.
                                    </Typography>

                                    <Typography
                                        style={{
                                            fontSize: 16,
                                            color: '#333333',
                                            marginTop: 20,
                                            textAlign: 'left',
                                        }}
                                    >
                                        Check{' '}
                                        <a
                                            href=""
                                            style={{
                                                textDecoration: 'none',
                                                color: 'inherit',
                                            }}
                                        >
                                            {' '}
                                            <span
                                                style={{
                                                    fontWeight: 'bold',
                                                    color: 'red',
                                                }}
                                            >
                                                resources{' '}
                                            </span>{' '}
                                        </a>
                                        to know how use other awesome features
                                        made available to you.
                                    </Typography>
                                    <Hidden mdUp>
                                        <a
                                            href="https://contentionary.com/"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <Button
                                                variant="contained"
                                                style={{
                                                    backgroundColor: '#F57E27',
                                                    textTransform: 'inherit',
                                                    marginTop: 30,
                                                    color: '#fff',
                                                    padding: '10px 20px',
                                                    textAlign: 'center',
                                                    fontSize: 15,
                                                }}
                                            >
                                                Start now to conduct Exams
                                            </Button>
                                        </a>
                                    </Hidden>
                                </Grid>
                            </Grid>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#F57E27', marginTop: 0 }}>
                        <div
                            style={{ padding: '50px 10%', textAlign: 'center' }}
                        >
                            <div
                                className={classes.contentText}
                                style={{ color: '#ffffff' }}
                            >
                                <Grid container spacing={4}>
                                    <Grid item xs={12}>
                                        <Hidden smDown>
                                            <Typography
                                                style={{
                                                    fontSize: 30,
                                                    color: '#333333',
                                                }}
                                            >
                                                Contentionary center can be used
                                                as any or all of the below
                                                tools;
                                            </Typography>
                                        </Hidden>
                                        <Hidden mdUp>
                                            <Typography
                                                style={{
                                                    fontSize: 25,
                                                    color: '#333333',
                                                }}
                                            >
                                                Contentionary center can be used
                                                as any or all of the below
                                                tools;
                                            </Typography>
                                        </Hidden>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={3}
                                        style={{ padding: 30 }}
                                    >
                                        <a
                                            href="educators-exam-manager"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'inherit',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            <Typography
                                                id="linking"
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Educators’ Examination Manager
                                            </Typography>
                                            <Hidden smUp>
                                                <Divider
                                                    style={{
                                                        backgroundColor:
                                                            '#ffffff',
                                                    }}
                                                />
                                            </Hidden>
                                        </a>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={3}
                                        style={{ padding: 30 }}
                                    >
                                        <a
                                            id="linking"
                                            href="online-learning-video-and-audio"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'inherit',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            <Typography
                                                id="linking"
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                E-learning platform (Videos and
                                                audios)
                                            </Typography>
                                            <Hidden smUp>
                                                <Divider
                                                    style={{
                                                        backgroundColor:
                                                            '#ffffff',
                                                    }}
                                                />
                                            </Hidden>
                                        </a>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={3}
                                        style={{ padding: 30 }}
                                    >
                                        <a
                                            id="linking"
                                            href="publication-house"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'inherit',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            <Typography
                                                id="linking"
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Publication House (PDFs format)
                                            </Typography>
                                            <Hidden smUp>
                                                <Divider
                                                    style={{
                                                        backgroundColor:
                                                            '#ffffff',
                                                    }}
                                                />
                                            </Hidden>
                                        </a>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={3}
                                        style={{ padding: 30 }}
                                    >
                                        <a
                                            id="linking"
                                            href="preparatory-exam-manager"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'inherit',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            <Typography
                                                id="linking"
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Preparatory Exam Manager
                                            </Typography>
                                            <Hidden smUp>
                                                <Divider
                                                    style={{
                                                        backgroundColor:
                                                            '#ffffff',
                                                    }}
                                                />
                                            </Hidden>
                                        </a>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={3}
                                        style={{ padding: 30 }}
                                    >
                                        <a
                                            id="linking"
                                            href="question-bank-manager"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'inherit',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            <Typography
                                                id="linking"
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Question Bank Manager
                                            </Typography>
                                            <Hidden smUp>
                                                <Divider
                                                    style={{
                                                        backgroundColor:
                                                            '#ffffff',
                                                    }}
                                                />
                                            </Hidden>
                                        </a>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={3}
                                        style={{ padding: 30 }}
                                    >
                                        <a
                                            id="linking"
                                            href="exam-merchants"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'inherit',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            <Typography
                                                id="linking"
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Examination Merchants
                                            </Typography>
                                            <Hidden smUp>
                                                <Divider
                                                    style={{
                                                        backgroundColor:
                                                            '#ffffff',
                                                    }}
                                                />
                                            </Hidden>
                                        </a>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={3}
                                        style={{ padding: 30 }}
                                    >
                                        <a
                                            id="linking"
                                            href="online-quiz-competition-manager"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'inherit',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            <Typography
                                                id="linking"
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Online Quiz Competition Manager
                                            </Typography>
                                            <Hidden smUp>
                                                <Divider
                                                    style={{
                                                        backgroundColor:
                                                            '#ffffff',
                                                    }}
                                                />
                                            </Hidden>
                                        </a>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={3}
                                        style={{ padding: 30 }}
                                    >
                                        <a
                                            id="linking"
                                            href="online-course-merchants"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'inherit',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            <Typography
                                                id="linking"
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Online course merchants
                                            </Typography>
                                            <Hidden smUp>
                                                <Divider
                                                    style={{
                                                        backgroundColor:
                                                            '#ffffff',
                                                    }}
                                                />
                                            </Hidden>
                                        </a>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Index;
