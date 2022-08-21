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
// import image from '../../images/tea.jpg';
// import image1 from '../../images/karol.jpg';
// import App from '../../images/nnw.png';

const cntn = require('../../images/cntn.png')
const App = require('../../images/nnw.png')
const image = require('../../images/tea.jpg');
const image1 = require('../../images/karol.jpg');

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
                title="Contentionary - Features"
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
                                            Contentionary Centre{' '}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 20,
                                                marginTop: 40,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            {' '}
                                            Your digital institute where you
                                            engage with your subscribers and
                                            other users of the platform.
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
                                            Contentionary Centre{' '}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 17,
                                                marginTop: 30,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            {' '}
                                            Your digital institute where you
                                            engage with your subscribers and
                                            other users of the platform.
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
                                        Contentionary Centre{' '}
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                            marginTop: 20,
                                        }}
                                    >
                                        {' '}
                                        Your digital institute where you engage
                                        with your subscribers and other users of
                                        the platform.
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
                            <Grid item xs={12} md={6} style={{ marginTop: 50 }}>
                                <img src={image1} width="100%" />
                            </Grid>
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
                                        With contentionary.com you can create a
                                        free centre where you can teach, publish
                                        and test your subscribers.
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 15,
                                            color: '#333333',
                                            paddingLeft: '10%',
                                            marginTop: 20,
                                        }}
                                    >
                                        An examiner or an instructor tool to
                                        sell and share contents and exams is
                                        his/her centre. An instructor can create
                                        more than one centre for several
                                        reasons. A centre can be made private or
                                        public.
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 15,
                                            color: '#333333',
                                            paddingLeft: '10%',
                                            marginTop: 20,
                                        }}
                                    >
                                        A private centre will require acceptance
                                        from the creator for any user to be a
                                        subscriber or only when added by the
                                        creator independently via mails.
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 15,
                                            color: '#333333',
                                            marginTop: 20,
                                            paddingLeft: '10%',
                                        }}
                                    >
                                        A centre can be configured to be a paid
                                        centre or not. A centre can be
                                        customized in several ways and it can be
                                        integrated to your personal website.
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 15,
                                            color: '#333333',
                                            paddingLeft: '10%',
                                            marginTop: 20,
                                        }}
                                    >
                                        Centre creators can also add managers to
                                        aid management of contents and other
                                        task assigned.
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp>
                                    <Typography
                                        style={{
                                            fontSize: 15,
                                            color: '#333333',
                                            marginTop: 60,
                                        }}
                                    >
                                        With contentionary.com you can create a
                                        free centre where you can teach, publish
                                        and test your subscribers.
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 15,
                                            color: '#333333',
                                            marginTop: 20,
                                        }}
                                    >
                                        An examiner or an instructor tool to
                                        sell and share contents and exams is
                                        his/her centre. An instructor can create
                                        more than one centre for several
                                        reasons. A centre can be made private or
                                        public.
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 15,
                                            color: '#333333',
                                            marginTop: 20,
                                        }}
                                    >
                                        A private centre will require acceptance
                                        from the creator for any user to be a
                                        subscriber or only when added by the
                                        creator independently via mails.
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 15,
                                            color: '#333333',
                                            marginTop: 20,
                                        }}
                                    >
                                        A centre can be configured to be a paid
                                        centre or not. A centre can be
                                        customized in several ways and it can be
                                        integrated to your personal website.
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 15,
                                            color: '#333333',
                                            marginTop: 20,
                                        }}
                                    >
                                        Centre creators can also add managers to
                                        aid management of contents and other
                                        task assigned.
                                    </Typography>
                                </Hidden>
                            </Grid>
                        </Grid>
                    </div>

                    <div
                        id="allfeatures"
                        style={{ backgroundColor: '#F57E27', marginTop: 0 }}
                    >
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
                                            href="features/educators-exam-manager"
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
                                            href="features/online-learning-video-and-audio"
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
                                            href="features/publication-house"
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
                                            href="features/preparatory-exam-manager"
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
                                            href="features/question-bank-manager"
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
                                            href="features/exam-merchants"
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
                                            href="features/online-quiz-competition-manager"
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
                                            href="features/online-course-merchants"
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
