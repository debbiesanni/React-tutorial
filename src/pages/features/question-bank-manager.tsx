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
// import image from '../../images/hr.jpg';
// import image1 from '../../images/karol.jpg';
// import App from '../../images/nnw.png';

const cntn = require('../../images/cntn.png');
const image2 = require('../../images/eschoool.jpg');
const image = require('../../images/hr.jpg');
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
                title="Features - Question Bank Manager"
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
                                            QUESTION BANK (Q-Bank) MANAGER{' '}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 20,
                                                marginTop: 30,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            {' '}
                                            (MCQs, THEORETICAL, BOOLEAN,
                                            MULTI-CHOICE etc.)
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
                                            QUESTION BANK (Q-Bank) MANAGER{' '}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 17,
                                                marginTop: 30,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            {' '}
                                            (MCQs, THEORETICAL, BOOLEAN,
                                            MULTI-CHOICE etc.)
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
                                        QUESTION BANK (Q-Bank) MANAGER
                                        <br />{' '}
                                        <span style={{ fontSize: 15 }}>
                                            {' '}
                                            (MCQs, THEORETICAL, BOOLEAN,
                                            MULTI-CHOICE etc.)
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
                                <Hidden smDown>
                                    <Typography
                                        style={{
                                            fontSize: 22,
                                            color: '#333333',
                                        }}
                                    >
                                        Contentionary Question Bank manager tool
                                        gives the provision to keep your
                                        questions saved exclusive to you. Create
                                        a question Bank folders to segment your
                                        questions in subject types, Topic types,
                                        question types etc.
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp>
                                    <Typography
                                        style={{
                                            fontSize: 18,
                                            color: '#333333',
                                        }}
                                    >
                                        Contentionary Question Bank manager tool
                                        gives the provision to keep your
                                        questions saved exclusive to you. Create
                                        a question Bank folders to segment your
                                        questions in subject types, Topic types,
                                        question types etc.
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} md={6} style={{ marginTop: 50 }}>
                                <Typography
                                    style={{
                                        fontSize: 16,
                                        color: '#333333',
                                    }}
                                >
                                    Create questions of all types, store them in
                                    your question bank, access them anytime and
                                    assign them to any new exam created exams.
                                </Typography>

                                <Typography
                                    style={{
                                        fontSize: 20,
                                        color: '#333333',
                                        marginTop: 20,
                                    }}
                                >
                                    Questions can be:
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
                                                Written –{' '}
                                            </span>
                                            type and save questions directly
                                            from your question bank
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
                                                Added –
                                            </span>{' '}
                                            copy and paste your questions and
                                            keep them safe in your bank
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
                                                Imported –{' '}
                                            </span>
                                            import your questions saved CSV file
                                            into your question bank.
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
                                                Duplicate-
                                            </span>{' '}
                                            Duplicate question from a
                                            colleague’s question bank
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
                                                Buy-{' '}
                                            </span>
                                            Buy question bank from
                                            contentionary.
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
                                    Unlimited Question Storage:
                                </Typography>
                                <Typography
                                    style={{
                                        fontSize: 16,
                                        color: '#333333',
                                        marginTop: 20,
                                    }}
                                >
                                    Add unlimited number of Questions into your
                                    question bank, and use them anytime. Create
                                    your questions and assign the questions
                                    stored from your Q-bank into the exams
                                    anytime, making it superfast to create
                                    exams.
                                </Typography>
                                <Typography
                                    style={{
                                        fontSize: 20,
                                        color: '#333333',
                                        marginTop: 20,
                                    }}
                                >
                                    Simple to create:
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
                                                Name your Q-bank:{' '}
                                            </span>
                                            Create your Q-bank folder and give
                                            it a name to easily assign questions
                                            to them.
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
                                                Set your questions:
                                            </span>{' '}
                                            MCQs, theoretical questions, Boolean
                                            test, psychometric exams, situation
                                            judgement test are all available to
                                            create as question types.
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
                                                Tick questions:{' '}
                                            </span>
                                            Assign questions into your exams by
                                            ticking the questions from your
                                            Q-bank.
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
