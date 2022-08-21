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
// import cntn from '../../images/cntn.png';
// import image2 from '../../images/eschoool.jpg';
// import image from '../../images/exammach.jpg';
// import image1 from '../../images/karol.jpg';
// import App from '../../images/nnw.png';



const cntn = require('../../images/cntn.png');
const image2 = require('../../images/eschoool.jpg');
const image = require('../../images/exammach.jpg');
const image1 = require('../../images/karol.jpg');
const App = require('../../images/nnw.png');

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
                title="Features - Examination Merchants"
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
                                            EXAMINATION MERCHANTS{' '}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 20,
                                                marginTop: 30,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            {' '}
                                            Contentionary makes it easy for
                                            private individuals, school,
                                            organizations to sell exams to any
                                            subscriber.
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
                                            EXAMINATION MERCHANTS{' '}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 17,
                                                marginTop: 30,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            {' '}
                                            Contentionary makes it easy for
                                            private individuals, school,
                                            organizations to sell exams to any
                                            subscriber.
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
                                                color: '#fff',
                                            }}
                                        >
                                            Get Started
                                        </Button>
                                    </a>
                                </div>
                            </Grid>
                            <Grid item md={6}>
                                <img src={image} style={{ width: '100%' }} />
                            </Grid>
                        </Hidden>
                        <Hidden mdUp>
                            <Grid item xs={12}>
                                <img src={image} style={{ width: '100%' }} />
                            </Grid>
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
                                        EXAMINATION MERCHANTS
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                            marginTop: 20,
                                        }}
                                    >
                                        {' '}
                                        Contentionary makes it easy for private
                                        individuals, school, organizations to
                                        sell exams to any subscriber.
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
                                                color: '#fff',
                                            }}
                                        >
                                            Get Started
                                        </Button>
                                    </a>
                                </div>
                            </Grid>
                        </Hidden>
                    </Grid>

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
                            <Grid item xs={12} md={6} style={{ marginTop: 50 }}>
                                <Typography
                                    style={{
                                        fontSize: 16,
                                        color: '#333333',
                                    }}
                                >
                                    Contentionary is a Perfect system to
                                    monetize your preparatory exams.
                                </Typography>

                                <Typography
                                    style={{
                                        fontSize: 18,
                                        color: '#F57E27',
                                        marginTop: 20,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    100% Control
                                </Typography>
                                <Typography
                                    style={{
                                        fontSize: 16,
                                        color: '#333333',
                                        marginTop: 20,
                                    }}
                                >
                                    Exam Merchants have unlimited access to
                                    control how users and subscribers interact
                                    with their exams.
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
                                                {' '}
                                                Set duration:
                                            </span>{' '}
                                            control number of attempts a user
                                            takes your exams and the duration
                                            the exam expires to a subscribed
                                            user.
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
                                                Privatize:
                                            </span>{' '}
                                            make your exam accessible only to
                                            users invited by you or those who
                                            paid.
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
                                                Configure:{' '}
                                            </span>
                                            decide number of trial questions
                                            users can take before they
                                            subscribe.
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
                                                {' '}
                                                Monetize:{' '}
                                            </span>{' '}
                                            decide the amount to be paid to
                                            access your exams.
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
                                                {' '}
                                                Cash-out:{' '}
                                            </span>{' '}
                                            cash out instantly when we sales are
                                            made.
                                        </li>
                                    </ul>
                                </div>
                            </Grid>

                            <Grid item xs={12} md={6} style={{ marginTop: 50 }}>
                                <Typography
                                    style={{
                                        fontSize: 20,
                                        color: '#F57E27',
                                    }}
                                >
                                    Access to all Contentionary premium
                                    features:
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
                                            Unlimited number of exams added to
                                            your centre
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            Unlimited number of questions
                                            upload.
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            All forms of question structure
                                            (MCQs, Theoretical, Files uploads,
                                            Audio, SJT etc.)
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
