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
// import cntn from '../../images/cntn.png';
// import image from '../../images/nnw.png';
// import image1 from '../../images/stupy.jpg';
// import App from '../../images/eschoool.jpg';
// import App1 from '../../images/phapp.png';
import Predict from '../../images/Predict.svg';
import Testing from '../../images/Testing.svg';
import Swag from '../../images/Swag.svg';
import Detailed from '../../images/Detailed.svg';
import Wrapper from '../../components/wrapper';

const App1 = require('../../images/phapp.png');
const App = require('../../images/eschoool.jpg');
const image1 = require('../../images/stupy.jpg');
const image = require('../../images/nnw.png');
const cntn = require('../../images/cntn.png');

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
    thirdDiv: {

    },
    contentText: {

    },
}));

function Index() {
    const classes = useStyle();

    return (
        <div>
            <Wrapper
                showFooter={true}
                showHeader={true}
                title="Features - Educators Exam Manager"
                description="Contentionary"
            >
                <div>
                    <Grid
                        container
                        style={{ marginBottom: 60, backgroundColor: '#F57E27' }}
                    >
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
                                            EDUCATORS’ EXAMINATIONS MANAGER{' '}
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
                                            EDUCATORS’ EXAMINATIONS MANAGER{' '}
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
                                        marginTop: 50,
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
                                        EDUCATORS’ EXAMINATIONS MANAGER{' '}
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
                                        The Contentionary centre can be used by
                                        educators to create and conduct highly
                                        secured exams seamlessly.
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 15,
                                            color: '#333333',
                                            paddingLeft: '10%',
                                            marginTop: 20,
                                        }}
                                    >
                                        Educators can assess/screen their
                                        students or subscribers with or without
                                        location as the exam manager suits
                                        remote and designated exam programs.
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
                                                    Conduct Exam in 4 simple
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
                                                    Setup Exams{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    Upload questions, configure
                                                    exam appearance and set exam
                                                    mode.
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
                                                    Invite Students{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    Send invitation to bulk
                                                    candidates or share access
                                                    pin to selected candidates.
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
                                                    Use students’ activity log
                                                    to monitor students’
                                                    activities. Deactivate exams
                                                    at set time.
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
                                                    Real time result{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    Download/share students’
                                                    real time results and
                                                    analysis using different
                                                    parameters.
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
                                        The Contentionary centre can be used by
                                        educators to create and conduct highly
                                        secured exams seamlessly.
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 15,
                                            color: '#333333',
                                            marginTop: 20,
                                        }}
                                    >
                                        Educators can assess/screen their
                                        students or subscribers with or without
                                        location as the exam manager suits
                                        remote and designated exam programs.
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
                                                    Conduct Exam in 4 simple
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
                                                    Setup Exams{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    Upload questions, configure
                                                    exam appearance and set exam
                                                    mode.
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
                                                    Invite Students{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    Send invitation to bulk
                                                    candidates or share access
                                                    pin to selected candidates.
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
                                                    Use students’ activity log
                                                    to monitor students’
                                                    activities. Deactivate exams
                                                    at set time.
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
                                                    Real time result{' '}
                                                </p>
                                                <p
                                                    style={{
                                                        padding:
                                                            '10px 10px 20px 10px',
                                                    }}
                                                >
                                                    Download/share students’
                                                    real time results and
                                                    analysis using different
                                                    parameters.
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
                        style={{ backgroundColor: '#222222' }}
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
                                                    marginTop: 10,
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
                                        color: '#f9f9f9',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography
                                        style={{
                                            fontSize: 25,
                                            textAlign: 'left',
                                        }}
                                    >
                                        No stress, exam manager is Best for:
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
                                                Distance learning
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                e-learning courses
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                School weekend quizzes and
                                                assignment
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Executive programs
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Certificate courses
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                School holiday testing
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Part time courses
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
                                                Any Exams
                                            </li>
                                        </ul>
                                    </div>
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
                                                    marginTop: 10,
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

                            <Grid item xs={12} style={{ marginTop: 30 }}>
                                <Typography style={{ color: '#CDCDCD' }}>
                                    Exam Questions are stored in your exclusive
                                    question bank; that means you can add all
                                    your questions to your question bank and
                                    fetch them whenever you want to conduct
                                    exams.
                                </Typography>
                                <Typography style={{ color: '#CDCDCD' }}>
                                    Click to see more about
                                    <a
                                        href="/question-bank"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        {' '}
                                        <span style={{ color: 'red' }}>
                                            {' '}
                                            Question Bank
                                        </span>
                                    </a>
                                    .
                                </Typography>
                            </Grid>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#FBF1D1', fontSize: 16 }}>
                        <div style={{ padding: '70px 10%' }}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="p"
                                style={{
                                    color: '#FF8019',
                                    fontSize: 25,
                                    marginBottom: 20,
                                    textAlign: 'center',
                                }}
                            >
                                All forms of educational question types are
                                compatible with contentionary. <br />{' '}
                                Contentionary Exam Manager supports
                            </Typography>
                            <Grid
                                container
                                spacing={4}
                                style={{ marginTop: 20 }}
                            >
                                <Grid item xs={12} sm={6}>
                                    <Paper
                                        style={{
                                            padding: '20px 50px',
                                            backgroundColor: '#333',
                                        }}
                                    >
                                        <Typography
                                            gutterBottom
                                            component="p"
                                            style={{
                                                marginBottom: 10,
                                                fontSize: 18,
                                                color: '#FF8019',
                                            }}
                                        >
                                            Multiple choice questions (MCQs)
                                        </Typography>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Paper
                                        style={{
                                            padding: '20px 50px',
                                            backgroundColor: '#333',
                                        }}
                                    >
                                        <Typography
                                            gutterBottom
                                            component="p"
                                            style={{
                                                marginBottom: 10,
                                                fontSize: 18,
                                                color: '#FF8019',
                                            }}
                                        >
                                            Theoretical questions
                                        </Typography>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Paper
                                        style={{
                                            padding: '20px 50px',
                                            backgroundColor: '#333',
                                        }}
                                    >
                                        <Typography
                                            gutterBottom
                                            component="p"
                                            style={{
                                                marginBottom: 10,
                                                fontSize: 18,
                                                color: '#FF8019',
                                            }}
                                        >
                                            True or false questions (Boolean)
                                        </Typography>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Paper
                                        style={{
                                            padding: '20px 50px',
                                            backgroundColor: '#333',
                                        }}
                                    >
                                        <Typography
                                            gutterBottom
                                            component="p"
                                            style={{
                                                marginBottom: 10,
                                                fontSize: 18,
                                                color: '#FF8019',
                                            }}
                                        >
                                            Non Verbal / Mathematical Equations
                                        </Typography>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Paper
                                        style={{
                                            padding: '20px 50px',
                                            backgroundColor: '#333',
                                        }}
                                    >
                                        <Typography
                                            gutterBottom
                                            component="p"
                                            style={{
                                                marginBottom: 10,
                                                fontSize: 18,
                                                color: '#FF8019',
                                            }}
                                        >
                                            Personality and Competency
                                        </Typography>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Paper
                                        style={{
                                            padding: '20px 50px',
                                            backgroundColor: '#333',
                                        }}
                                    >
                                        <Typography
                                            gutterBottom
                                            component="p"
                                            style={{
                                                marginBottom: 10,
                                                fontSize: 18,
                                                color: '#FF8019',
                                            }}
                                        >
                                            Situation Judgemental Test
                                        </Typography>
                                    </Paper>
                                </Grid>

                                <Hidden mdUp>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        style={{
                                            textAlign: 'center',
                                            marginTop: 50,
                                        }}
                                    >
                                        <img
                                            src={App1}
                                            width="100%"
                                            height="auto"
                                        />
                                    </Grid>
                                </Hidden>

                                <Grid
                                    xs={12}
                                    sm={6}
                                    md={8}
                                    item
                                    style={{
                                        fontSize: 30,
                                        color: '#333333',
                                        textAlign: 'center',
                                        marginTop: 50,
                                    }}
                                >
                                    <Typography
                                        style={{
                                            fontSize: 25,
                                            textAlign: 'left',
                                        }}
                                    >
                                        Tools used during setting remote exams:
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
                                                Distance learning
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Upload questions.
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Set exam mode.
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Set Activation time and
                                                deactivation time .
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Setting exam timer/duration.
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Attach special marks to certain
                                                questions of interest
                                                (optional).
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Invite candidates.
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Set exam instruction.
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Randomized exam questions and/or
                                                options.
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Monitor activity log of
                                                candidates.
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Sophisticated after-exam
                                                analytical tool.
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Proctored exams (AI
                                                supervision).
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                View or download script of
                                                candidates.
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                View or download results.
                                            </li>
                                        </ul>
                                    </div>
                                </Grid>

                                <Hidden smDown>
                                    <Grid
                                        item
                                        xs={12}
                                        md={4}
                                        style={{
                                            textAlign: 'center',
                                            marginTop: 50,
                                        }}
                                    >
                                        <img
                                            src={App1}
                                            width="100%"
                                            height="auto"
                                        />
                                    </Grid>
                                </Hidden>

                                <Grid
                                    item
                                    xs={12}
                                    style={{
                                        marginTop: 50,
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography
                                        gutterBottom
                                        component="p"
                                        style={{
                                            color: '#333',
                                            marginBottom: 25,
                                            textAlign: 'center',
                                            fontSize: 25,
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        Do not worry, we have your back
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} sm={6} md>
                                    <Typography
                                        gutterBottom
                                        component="p"
                                        style={{
                                            color: '#FF8019',
                                            fontSize: 18,
                                            marginBottom: 20,
                                        }}
                                    >
                                        We have a strong support system
                                    </Typography>

                                    <Typography
                                        gutterBottom
                                        component="p"
                                        style={{
                                            color: '#333',
                                            fontSize: 13,
                                            marginBottom: 20,
                                        }}
                                    >
                                        You have 24 hours access to our team to
                                        help throughout the entire screening
                                        process.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md>
                                    <Typography
                                        gutterBottom
                                        component="p"
                                        style={{
                                            color: '#FF8019',
                                            fontSize: 18,
                                        }}
                                    >
                                        100% data control
                                    </Typography>

                                    <Typography
                                        gutterBottom
                                        component="p"
                                        style={{
                                            color: '#333',
                                            fontSize: 13,
                                            marginTop: 10,
                                        }}
                                    >
                                        You have the full control of your
                                        questions, candidates’ data, results,
                                        and other confidential data. We maintain
                                        all privacy and copyrights laws.
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} sm={6} md>
                                    <Typography
                                        gutterBottom
                                        component="p"
                                        style={{
                                            color: '#FF8019',
                                            fontSize: 18,
                                        }}
                                    >
                                        High page loading speed
                                    </Typography>

                                    <Typography
                                        gutterBottom
                                        component="p"
                                        style={{
                                            color: '#333',
                                            fontSize: 13,
                                            marginTop: 10,
                                        }}
                                    >
                                        Contentionary is built with advance
                                        technology to aid page loading speed.
                                        Navigate questions even without
                                        internet(Note, the internet is needed
                                        when a candidate is to submit).
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} sm={6} md>
                                    <Typography
                                        gutterBottom
                                        component="p"
                                        style={{
                                            color: '#FF8019',
                                            fontSize: 18,
                                        }}
                                    >
                                        Super secured
                                    </Typography>

                                    <Typography
                                        gutterBottom
                                        component="p"
                                        style={{
                                            color: '#333',
                                            fontSize: 13,
                                            marginTop: 10,
                                        }}
                                    >
                                        Contentionary is built to be hacked
                                        proof. Backed up with other security
                                        software and application, you are safe
                                        to conduct your exams.
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} sm={6} md>
                                    <Typography
                                        gutterBottom
                                        component="p"
                                        style={{
                                            color: '#FF8019',
                                            fontSize: 18,
                                        }}
                                    >
                                        Very affordable
                                    </Typography>

                                    <Typography
                                        gutterBottom
                                        component="p"
                                        style={{
                                            color: '#333',
                                            fontSize: 13,
                                            marginTop: 10,
                                        }}
                                    >
                                        Contentionary is very affordable.
                                        Whether your budget is $0, whether you
                                        are testing 10 or 10,000 there's a plan
                                        made for you.{' '}
                                        <a
                                            target="_blank"
                                            href="https://pricing.contentionary.com"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'red',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {' '}
                                            <span>Check pricing</span>
                                        </a>{' '}
                                        plan to know more.
                                    </Typography>
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
