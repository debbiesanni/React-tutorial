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
import Wrapper from '../../components/wrapper';
import Predict from '../../images/Predict.svg';
import Testing from '../../images/Testing.svg';
import Swag from '../../images/Swag.svg';
import Detailed from '../../images/Detailed.svg';
// import cntn from '../../images/cntn.png';
// import image from '../../images/online.jpg';
// import image1 from '../../images/stupy.jpg';
// import App from '../../images/eschoool.jpg';
// import App1 from '../../images/phapp.png';

const cntn = require('../../images/cntn.png');
const image = require('../../images/online.jpg');
const image1 = require('../../images/stupy.jpg');
const App = require('../../images/eschoool.jpg');
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
}));

function Index() {
    const classes = useStyle();

    return (
        <div>
            <Wrapper
                showFooter={true}
                showHeader={true}
                title="Features - Online Quiz Competition"
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
                                            ONLINE QUIZ COMPETITION MANAGER{' '}
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
                                            ONLINE QUIZ COMPETITION MANAGER{' '}
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
                                                backgroundColor: '#21CD9C',
                                                marginTop: 20,
                                                padding: '10px 50px',
                                                textTransform: 'inherit',
                                                color: '#333333',
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
                                        ONLINE QUIZ COMPETITION MANAGER{' '}
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
                                                backgroundColor: '#21CD9C',
                                                marginTop: 30,
                                                padding: '10px 50px',
                                                textTransform: 'inherit',
                                                color: '#333333',
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
                                            fontSize: 30,
                                            textAlign: 'center',
                                            color: '#333333',
                                            padding: '0 10%',
                                        }}
                                    >
                                        A centre is created at no cost and can
                                        be used for several testing and learning
                                        purposes
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp>
                                    <Typography
                                        style={{
                                            fontSize: 25,
                                            textAlign: 'center',
                                            color: '#333333',
                                        }}
                                    >
                                        A centre is created at no cost and can
                                        be used for several testing and learning
                                        purposes
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
                                    <Typography
                                        style={{
                                            fontSize: 15,
                                            color: '#333333',
                                            paddingLeft: '10%',
                                            marginTop: 60,
                                        }}
                                    >
                                        The Contentionary League Manager tools
                                        provides the most advanced platform for
                                        educators, instructors, schools and
                                        organizations to organize and conduct
                                        online quiz competition seamlessly.
                                    </Typography>

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
                                                    Create League with these few
                                                    steps
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
                                                    Create{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    create league and conduct
                                                    competition remotely
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
                                                    Upload{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    provide contents (books,
                                                    videos, audios etc.) to
                                                    study with for the quiz.
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
                                                    Supervise{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    add and monitor exams with
                                                    proctored integration
                                                    (monitor activity logs of
                                                    candidates).
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
                                                    Real time Results{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    use the table to see
                                                    real-time top performance as
                                                    they submit their scrip
                                                </p>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Hidden>
                                <Hidden mdUp>
                                    <Typography
                                        style={{
                                            fontSize: 15,
                                            color: '#333333',
                                            marginTop: 60,
                                        }}
                                    >
                                        The Contentionary League Manager tools
                                        provides the most advanced platform for
                                        educators, instructors, schools and
                                        organizations to organize and conduct
                                        online quiz competition seamlessly.
                                    </Typography>

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
                                                    Create League with these few
                                                    steps
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
                                                    Create{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    create league and conduct
                                                    competition remotely
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
                                                    Upload{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    provide contents (books,
                                                    videos, audios etc.) to
                                                    study with for the quiz.
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
                                                    Supervise{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    add and monitor exams with
                                                    proctored integration
                                                    (monitor activity logs of
                                                    candidates).
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
                                                    Real time Results{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    use the table to see
                                                    real-time top performance as
                                                    they submit their scrip
                                                </p>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Hidden>
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{ padding: '0 10% 100px 10%' }}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <hr
                                    style={{
                                        width: '10%',
                                        backgroundColor: '#F57E27',
                                        marginLeft: '45%',
                                        border: '2px solid #f57e27',
                                        marginBottom: 30,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={4} style={{ marginTop: 50 }}>
                                <Typography
                                    style={{
                                        fontSize: 16,
                                        color: '#333333',
                                    }}
                                >
                                    Leagues comes with super interesting tools
                                    to make online competitions amazing:
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
                                            Real-time Chat system amongst league
                                            participants.
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            See real time result and activity of
                                            each participants with other
                                            analysis displayed in a table for
                                            all participants to view positions.
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            Automate how and when new task/exams
                                            will be activated for candidates to
                                            attempt.
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            Leagues could span for unlimited
                                            number of days.
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            Leagues could be private or made
                                            public, could be paid or free
                                            leeagues
                                        </li>
                                    </ul>
                                </div>
                            </Grid>

                            <Grid item xs={12} md={4} style={{ marginTop: 50 }}>
                                <Typography
                                    style={{
                                        fontSize: 16,
                                        color: '#333333',
                                    }}
                                >
                                    League Manager can be used for:
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
                                            School inter-class Quiz competition
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            Recruitment sieving of candidates
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            Scholarship assessment to get the
                                            top performance
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            Entrance Exams to obtain best
                                            candidates
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            Inter-School Competitions
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            State, National and International
                                            Competitions
                                        </li>
                                    </ul>
                                </div>
                            </Grid>

                            <Grid item xs={12} md={4} style={{ marginTop: 50 }}>
                                <Typography
                                    style={{
                                        fontSize: 20,
                                        color: '#F57E27',
                                    }}
                                >
                                    League manager is designed to suit
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
                                            <span
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Transparency:{' '}
                                            </span>{' '}
                                            Built with super interesting
                                            technology to make participants
                                            results appear in a table accessible
                                            to anyone (except when league is
                                            private).
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            <span
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Algorithm:{' '}
                                            </span>{' '}
                                            A unique algorithm that updates
                                            candidates to appear at the top of
                                            the table according to score and
                                            speed.
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            <span
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Exams:{' '}
                                            </span>{' '}
                                            Add exams from your center to league
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            <span
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Schedule:{' '}
                                            </span>{' '}
                                            scheduled your league to start and
                                            end at your own time.
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            <span
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Bulk Invite:{' '}
                                            </span>{' '}
                                            invite candidates via their emails
                                            or share league’s link for
                                            candidates to join league on their
                                            own.
                                        </li>
                                    </ul>
                                </div>
                                <Typography
                                    style={{
                                        fontSize: 16,
                                        color: '#333333',
                                        marginTop: 20,
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
                                    to know how to use other awesome features
                                    made available to you.
                                </Typography>
                            </Grid>
                        </Grid>
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
