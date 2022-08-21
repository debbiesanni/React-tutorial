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
// import image from '../../images/skul.jpg';
// import image1 from '../../images/karol.jpg';
// import App from '../../images/nnw.png';

const cntn = require('../../images/cntn.png');
const image2 = require('../../images/eschoool.jpg');
const image = require('../../images/skul.jpg');
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
                title="Features - E-Learning Platform"
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
                                            E-LEARNING PLATFORM <br />{' '}
                                            <span style={{ fontSize: 30 }}>
                                                {' '}
                                                (VIDEOS AND AUDIOS)
                                            </span>{' '}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 20,
                                                marginTop: 40,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            {' '}
                                            Bringing your Digital Institute to
                                            your device.
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
                                            E-LEARNING PLATFORM <br />{' '}
                                            <span style={{ fontSize: 30 }}>
                                                {' '}
                                                (VIDEOS AND AUDIOS)
                                            </span>{' '}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 17,
                                                marginTop: 30,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            {' '}
                                            Bringing your Digital Institute to
                                            your device.
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
                                        E-LEARNING PLATFORM <br />{' '}
                                        <span style={{ fontSize: 15 }}>
                                            {' '}
                                            (VIDEOS AND AUDIOS)
                                        </span>{' '}
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                            marginTop: 20,
                                        }}
                                    >
                                        {' '}
                                        Bringing your Digital Institute to your
                                        device.
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
                        <Grid container>
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
                                <Hidden smDown>
                                    <Typography
                                        style={{
                                            fontSize: 30,
                                            textAlign: 'center',
                                            color: '#333333',
                                            padding: '0 10%',
                                        }}
                                    >
                                        A centre can be used as a digital
                                        classroom for learning. Instructors can
                                        upload videos, audios, PDFs for their
                                        students to use.
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
                                        A centre can be used as a digital
                                        classroom for learning. Instructors can
                                        upload videos, audios, PDFs for their
                                        students to use.
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} md={6} style={{ marginTop: 50 }}>
                                <img src={image1} width="100%" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Hidden smDown>
                                    <Typography
                                        style={{
                                            fontSize: 18,
                                            color: '#333333',
                                            paddingLeft: '10%',
                                            marginTop: 60,
                                        }}
                                    >
                                        Creating a course can be done in less
                                        than 5 minutes.
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                            color: '#333333',
                                            paddingLeft: '10%',
                                            marginTop: 20,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Here are the simple steps to create a
                                        course:
                                    </Typography>
                                    <Divider
                                        style={{
                                            marginTop: 5,
                                            marginBottom: 20,
                                            backgroundColor: '#F57E27',
                                            marginLeft: '10%',
                                        }}
                                    />
                                    <div
                                        style={{
                                            paddingLeft: '10%',
                                        }}
                                    >
                                        <ol>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Create a folder
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Create a course inside the
                                                created folder
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Create modules, customized
                                                course and upload file (video,
                                                audio or PDF)
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Add assessment, price tag etc.
                                            </li>
                                        </ol>
                                    </div>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                            color: '#333333',
                                            paddingLeft: '10%',
                                            marginTop: 20,
                                        }}
                                    >
                                        When attaching assessment to a course,
                                        you can also add the pass mark of the
                                        assessment as a prerequisite for the
                                        next module to be accessed.
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                            color: '#333333',
                                            marginTop: 60,
                                        }}
                                    >
                                        Creating a course can be done in less
                                        than 5 minutes.
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 15,
                                            color: '#333333',
                                            marginTop: 20,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Here are the simple steps to create a
                                        course:
                                    </Typography>
                                    <Divider
                                        style={{
                                            marginTop: 5,
                                            marginBottom: 20,
                                            backgroundColor: '#F57E27',
                                        }}
                                    />
                                    <div>
                                        <ol>
                                            <li
                                                style={{
                                                    fontSize: 15,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Create a folder
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 15,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Create a course inside the
                                                created folder
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 15,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Create modules, customized
                                                course and upload file (video,
                                                audio or PDF)
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 15,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Add assessment, price tag etc.
                                            </li>
                                        </ol>
                                    </div>{' '}
                                    <Typography
                                        style={{
                                            fontSize: 15,
                                            color: '#333333',
                                            marginTop: 20,
                                        }}
                                    >
                                        When attaching assessment to a course,
                                        you can also add the pass mark of the
                                        assessment as a prerequisite for the
                                        next module to be accessed.
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Hidden mdUp>
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    style={{ marginTop: 90 }}
                                >
                                    <img src={image2} width="100%" />
                                </Grid>
                            </Hidden>
                            <Grid item xs={12} md={6}>
                                <Hidden smDown>
                                    <Typography
                                        style={{
                                            fontSize: 20,
                                            color: '#333333',
                                            paddingRight: '10%',
                                            marginTop: 100,
                                        }}
                                    >
                                        What can you create?
                                    </Typography>
                                    <Divider
                                        style={{
                                            marginTop: 5,
                                            marginBottom: 20,
                                            backgroundColor: '#F57E27',
                                            marginRight: '10%',
                                        }}
                                    />
                                    <div
                                        style={{
                                            paddingRight: '10%',
                                        }}
                                    >
                                        <ol>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Educational lectures for your
                                                students
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Preparatory online course for
                                                professional, entrance, school
                                                exams or any type of
                                                professional exams.
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Inspirational videos
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Business lectures
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Skill acquisition videos and any
                                                video that is for educational
                                                purposes.
                                            </li>
                                        </ol>
                                    </div>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                            color: '#333333',
                                            paddingRight: '10%',
                                            marginTop: 20,
                                        }}
                                    >
                                        Visit{' '}
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
                                        to know how to upload a course
                                        seamlessly.
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp>
                                    <Typography
                                        style={{
                                            fontSize: 20,
                                            color: '#333333',
                                            marginTop: 60,
                                        }}
                                    >
                                        What can you create?
                                    </Typography>
                                    <Divider
                                        style={{
                                            marginTop: 5,
                                            marginBottom: 20,
                                            backgroundColor: '#F57E27',
                                        }}
                                    />
                                    <div>
                                        <ol>
                                            <li
                                                style={{
                                                    fontSize: 15,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Educational lectures for your
                                                students
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 15,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Preparatory online course for
                                                professional, entrance, school
                                                exams or any type of
                                                professional exams.
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 15,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Inspirational videos
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 15,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Business lectures
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 15,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Skill acquisition videos and any
                                                video that is for educational
                                                purposes.
                                            </li>
                                        </ol>
                                    </div>{' '}
                                    <Typography
                                        style={{
                                            fontSize: 15,
                                            color: '#333333',
                                            paddingRight: '10%',
                                            marginTop: 20,
                                        }}
                                    >
                                        Visit{' '}
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
                                        to know how to upload a course
                                        seamlessly.
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Hidden smDown>
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    style={{ marginTop: 90 }}
                                >
                                    <img src={image2} width="100%" />
                                </Grid>
                            </Hidden>
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
