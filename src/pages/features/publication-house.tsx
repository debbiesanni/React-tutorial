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
// import image from '../../images/library.jpg';
// import image1 from '../../images/lib.jpg';
// import App from '../../images/nnw.png';

const cntn = require('../../images/cntn.png');
const image2 = require('../../images/eschoool.jpg');
const image = require('../../images/library.jpg');
const image1 = require('../../images/lib.jpg');
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
                title="Features - Publishing House"
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
                                                marginTop: 80,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            A PUBLISHING HOUSE{' '}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 22,
                                                lineHeight: 1.3,
                                                paddingLeft: '10%',
                                                marginTop: 10,
                                            }}
                                        >
                                            (BOOKS, PDFs, SLIDES, TEMPLATES,
                                            RESEARCH, JOUURNALS etc.)
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 20,
                                                marginTop: 30,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            {' '}
                                            Take your publications to your
                                            audience.
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
                                            A PUBLISHING HOUSE{' '}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 22,
                                                lineHeight: 1.3,
                                                paddingLeft: '10%',
                                                marginTop: 10,
                                            }}
                                        >
                                            (BOOKS, PDFs, SLIDES, TEMPLATES,
                                            RESEARCH, JOUURNALS etc.)
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 17,
                                                marginTop: 30,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            {' '}
                                            Take your publications to your
                                            audience.
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
                                        A PUBLISHING HOUSE <br />{' '}
                                        <span
                                            style={{
                                                fontSize: 15,
                                                lineHeight: 1,
                                            }}
                                        >
                                            {' '}
                                            (BOOKS, PDFs, SLIDES, TEMPLATES,
                                            RESEARCH, JOUURNALS etc.)
                                        </span>{' '}
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                            marginTop: 20,
                                        }}
                                    >
                                        {' '}
                                        Take your publications to your audience.
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
                                        Here are facts you need to know about
                                        when using your centre as a publication
                                        house;
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
                                        Here are facts you need to know about
                                        when using your centre as a publication
                                        house;
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} md={6} style={{ marginTop: 90 }}>
                                <img src={image1} width="100%" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Hidden smDown>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                            color: '#333333',
                                            paddingLeft: '10%',
                                            marginTop: 100,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Here are facts you need to know about
                                        when using your centre as a publication
                                        house:
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
                                                Contentionary allows the creator
                                                of a publication to decide if
                                                the content is to be downloaded
                                                or read only.
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Amount for a content to be sold
                                                is decided by the creator of the
                                                content.
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                The owner of the content has
                                                full control of their contents
                                                and can take them down whenever
                                                they decide to.
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 16,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                When uploading a publication, a
                                                centre allows creator to
                                                categorize them and create
                                                folders for easy accessibility
                                                and better arrangement.
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
                                        It takes just a few minutes to get your
                                        publication out there.
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 15,
                                            color: '#333333',
                                            paddingLeft: '10%',
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
                                            fontSize: 15,
                                            color: '#333333',
                                            marginTop: 20,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Here are facts you need to know about
                                        when using your centre as a publication
                                        house:
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
                                                Contentionary allows the creator
                                                of a publication to decide if
                                                the content is to be downloaded
                                                or read only.
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 15,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Amount for a content to be sold
                                                is decided by the creator of the
                                                content.
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 15,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                The owner of the content has
                                                full control of their contents
                                                and can take them down whenever
                                                they decide to.
                                            </li>
                                            <li
                                                style={{
                                                    fontSize: 15,
                                                    marginTop: 20,
                                                    textAlign: 'left',
                                                }}
                                            >
                                                When uploading a publication, a
                                                centre allows creator to
                                                categorize them and create
                                                folders for easy accessibility
                                                and better arrangement.
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
                                        It takes just a few minutes to get your
                                        publication out there.
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 15,
                                            color: '#333333',
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
