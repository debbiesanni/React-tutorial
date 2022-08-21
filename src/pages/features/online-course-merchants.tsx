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
// import image from '../../images/onlinemach.jpg';
// import image1 from '../../images/karol.jpg';
// import App from '../../images/nnw.png';

const cntn = require('../../images/cntn.png');
const image2 = require('../../images/eschoool.jpg');
const image = require('../../images/onlinemach.jpg');
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
                title="Features - Online Course Merchants"
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
                                                marginTop: 50,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            ONLINE COURSE MERCHANTS{' '}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 20,
                                                marginTop: 30,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            {' '}
                                            Contentionary has easy to create
                                            online course tools that enables
                                            individuals, schools, and online
                                            course providers to teach and make
                                            money from their online courses.
                                        </Typography>
                                    </Hidden>

                                    <Hidden only="lg">
                                        <Typography
                                            style={{
                                                fontSize: 50,
                                                color: '#333333',
                                                marginTop: 50,
                                                lineHeight: 1.0,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            ONLINE COURSE MERCHANTS{' '}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 17,
                                                marginTop: 30,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            {' '}
                                            Contentionary has easy to create
                                            online course tools that enables
                                            individuals, schools, and online
                                            course providers to teach and make
                                            money from their online courses.
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
                                        ONLINE COURSE MERCHANTS
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                            marginTop: 20,
                                        }}
                                    >
                                        {' '}
                                        Contentionary has easy to create online
                                        course tools that enables individuals,
                                        schools, and online course providers to
                                        teach and make money from their online
                                        courses.
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
                                    Online Course Merchants have unlimited
                                    access to controls how users and subscribers
                                    interact with their courses.
                                </Typography>

                                <Typography
                                    style={{
                                        fontSize: 18,
                                        color: '#F57E27',
                                        marginTop: 20,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Create your course with these simple steps:
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
                                                Add video:
                                            </span>{' '}
                                            import your recorded course videos
                                            to your created course, and add your
                                            introduction to your online course.
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
                                                Modules:
                                            </span>{' '}
                                            segment your course in modules
                                            making it easier to interact with
                                            your lectures.
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
                                                Add Fee:{' '}
                                            </span>
                                            Add a fee a user will pay to
                                            subscribe to your course
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
                                                Format:{' '}
                                            </span>{' '}
                                            Add any format of course content
                                            (videos, audios, PDF)
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
                                                Set duration:{' '}
                                            </span>{' '}
                                            control the duration of time/days a
                                            subscriber will have access to your
                                            online course.
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
                                    Online course manager is suitable for:
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
                                            Private home Tutors
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            Lecturers and School Teachers’
                                            lectures
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            Business School lecturers
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            Professional lecturers
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            Skills lectures.
                                        </li>
                                        <li
                                            style={{
                                                fontSize: 16,
                                                marginTop: 20,
                                                textAlign: 'left',
                                            }}
                                        >
                                            Certificate programs
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
