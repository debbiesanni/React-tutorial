import React from 'react';

import {
    Grid,
    Typography,
    CardHeader,
    Hidden,
    AppBar,
    Divider,
} from '@material-ui/core';
// import {} from '@material-ui/icons';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/styles';
import Wrapper from '../../components/wrapper';
import { session } from '../../utils';

const image = require('../../images/pricing.jpg');

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
}));

function Index({user}) {
    const classes = useStyle();
    //const image = '../../images/pricing.jpg';

    return (
        <div>
            <Wrapper
                showFooter={true}
                showHeader={user ? true : false}
                showLogOutHeader={!user ? true : false}
                title="Contentionary - Pricing"
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
                                                color: '#F57E27',
                                                lineHeight: 1.0,
                                                marginTop: 100,
                                                paddingLeft: '10%',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Contentionary Pricing{' '}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 20,
                                                marginTop: 40,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            {' '}
                                            Use Contentionary as a tool to conduct world-class online exams, host online courses, online CBT competitions and upload your publications.
                                        </Typography>
                                    </Hidden>

                                    <Hidden only="lg">
                                        <Typography
                                            style={{
                                                fontSize: 50,
                                                color: '#F57E27',
                                                marginTop: 70,
                                                lineHeight: 1.0,
                                                paddingLeft: '10%',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Contentionary Pricing{' '}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: 17,
                                                marginTop: 30,
                                                paddingLeft: '10%',
                                            }}
                                        >
                                            {' '}
                                            Contentionary is not just an online
                                            tool for instructors and examiners
                                            to conduct online courses and exams,
                                            but also designed for you to make
                                            money from your knowledge at ease.
                                        </Typography>
                                    </Hidden>
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
                                            color: '#F57E27',
                                            lineHeight: 1.0,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Contentionary Pricing{' '}
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                            marginTop: 20,
                                        }}
                                    >
                                        {' '}
                                        Contentionary is not just an online tool
                                        for instructors and examiners to conduct
                                        online courses and exams, but also
                                        designed for you to make money from your
                                        knowledge at ease.
                                    </Typography>
                                </div>
                            </Grid>
                        </Hidden>
                    </Grid>

                    <div style={{ padding: '0 10% 100px 10%' }}>
                        <Grid container>
                            {/* <Grid item xs={12}>
                                <hr
                                    style={{
                                        width: '10%',
                                        backgroundColor: '#F57E27',
                                        marginLeft: '45%',
                                        border: '2px solid #f57e27',
                                        marginBottom: 30,
                                    }}
                                /> */}
                            {/* <Hidden smDown>
                                    <Typography
                                        style={{
                                            fontSize: 30,
                                            textAlign: 'center',
                                            color: '#F57E27',
                                            padding: '0 10%',
                                        }}
                                    >
                                        Contentionary Commission
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 22,
                                            textAlign: 'center',
                                            color: '#333333',
                                            padding: '0 10%',
                                        }}
                                    >
                                        Contentionary allows you to monetize
                                        your exams, online courses, publications
                                        (Books, PDFs, Slides, Templates,
                                        Research etc.), League competitions, and
                                        your Audio Podcasts in contentionary and
                                        get paid instantly when a user purchase
                                        your contents.
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp>
                                    <Typography
                                        style={{
                                            fontSize: 25,
                                            textAlign: 'center',
                                            color: '#F57E27',
                                        }}
                                    >
                                        Contentionary Commission
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 20,
                                            textAlign: 'center',
                                            color: '#333333',
                                        }}
                                    >
                                        Contentionary allows you to monetize
                                        your exams, online courses, publications
                                        (Books, PDFs, Slides, Templates,
                                        Research etc.), League competitions, and
                                        your Audio Podcasts in contentionary and
                                        get paid instantly when a user purchase
                                        your contents.
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: 50 }}>
                                <Typography
                                    style={{
                                        fontSize: 18,
                                        color: '#F57E27',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Contentionary's Commission when a user
                                    purchase your content:
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid
                                    container
                                    style={{
                                        color: '#333333',
                                        marginTop: 20,
                                        boxShadow: '2px 2px 4px #cdcdcd',
                                    }}
                                >
                                    <Grid
                                        item
                                        xs={2}
                                        style={{
                                            backgroundColor: '#F57E27',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 15,
                                                fontWeight: 'bold',
                                                color: '#ffffff',
                                            }}
                                        >
                                            S/N
                                        </Typography>
                                    </Grid> */}
                            {/* <Grid
                                        item
                                        xs={6}
                                        style={{
                                            backgroundColor: '#F57E27',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 15,
                                                fontWeight: 'bold',
                                                color: '#ffffff',
                                            }}
                                        >
                                            Description
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{
                                            backgroundColor: '#F57E27',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 15,
                                                fontWeight: 'bold',
                                                color: '#ffffff',
                                            }}
                                        >
                                            % Commission
                                        </Typography>
                                    </Grid>

                                    <Grid
                                        item
                                        xs={2}
                                        style={{
                                            backgroundColor: '#f5f5f5',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            1.
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{
                                            backgroundColor: '#f5f5f5',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Sales of video content (Online
                                            courses)
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{
                                            backgroundColor: '#f5f5f5',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            20% Commission
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{
                                            backgroundColor: '#F9E7D1',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            2.
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{
                                            backgroundColor: '#F9E7D1',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Sales on paid Exam
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{
                                            backgroundColor: '#F9E7D1',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            15% Commission
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{
                                            backgroundColor: '#f5f5f5',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            3.
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{
                                            backgroundColor: '#f5f5f5',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Sales of Publication content (PDFs,
                                            ebooks, templates, research, etc.)
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{
                                            backgroundColor: '#f5f5f5',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            10% Commission
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{
                                            backgroundColor: '#F9E7D1',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            4.
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{
                                            backgroundColor: '#F9E7D1',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Sales on paid Leagues
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{
                                            backgroundColor: '#F9E7D1',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            10% Commission
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{
                                            backgroundColor: '#f5f5f5',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            5.
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{
                                            backgroundColor: '#f5f5f5',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Private contents (exams, online courses, publications and leagues without ads interruption)
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{
                                            backgroundColor: '#f5f5f5',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            N500 per subscriber
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid> */}

                            {/* <Grid item xs={12}>
                                <Typography style={{ marginTop: 20 }}>
                                    You have 100% control on the pricing of your
                                    paid contents, and you have free unlimited
                                    access to all premium tools when you
                                    monetize your content.
                                </Typography>
                            </Grid> */}
                            <Grid item xs={12}>
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
                                <Hidden smDown>
                                    <Typography
                                        style={{
                                            fontSize: 20,
                                            textAlign: 'center',
                                            color: '#333333',
                                            padding: '0 10%',
                                        }}
                                    >
                                        What you can do with a Public or Private centre
                                    </Typography>
                                </Hidden>
                                <Hidden mdUp>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                            textAlign: 'center',
                                            color: '#F57E27',
                                        }}
                                    >
                                        What you can do with a Public or Private centre
                                    </Typography>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid
                                    container
                                    style={{
                                        color: '#333333',
                                        marginTop: 20,
                                        boxShadow: '2px 2px 4px #cdcdcd',
                                    }}
                                >
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#F57E27' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 15,
                                                fontWeight: 'bold',
                                                color: '#fff',
                                            }}
                                        >
                                            Features Description
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#F57E27' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 15,
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                                color: '#fff',
                                            }}
                                        >
                                            PUBLIC CENTRE <br/>(FREE)
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#F57E27' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 15,
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                                color: '#fff',
                                            }}
                                        >
                                            PRIVATE CENTRE <br/>(N15,000 per month)
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '40px 20px',
                                                fontSize: 13,
                                            }}
                                        >
                                            Contentionary’s charge on Sales of contents 
                                            <br/>(exams, Pubications, online course and leagues)
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                            <br />
                                            N100 + %10 per transaction fees
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                            <br />
                                            No transaction fees (excluding{' '}
                                            <br />
                                            payment gateway charges)
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Add unlimited number of subscribers
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Create contact groups
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CancelIcon
                                                style={{ color: '#b2b2b2' }}
                                            />{' '}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                                justifyContent: 'center',
                                                alignContent: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />{' '}
                                            <br />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Conduct unlimited number of Exams
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            Public Exam
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            Private Exam
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Add unlimited Leagues
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            Public Leagues
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            Private Leagues
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Host unlimited online courses
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            Public Courses
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                                justifyContent: 'center',
                                                alignContent: 'center',
                                            }}
                                        >
                                           Private Courses
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Add unlimited Publications
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            Public Publications
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            Private Publications
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Add files (PDFs, audio, videos) to online course
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                            <br />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                            <br />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Add Assessment to online course
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>{' '}
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Make publications private
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>{' '}
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Add Centre managers
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            1
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            Unlimited
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Add all question types (Objectives and Boolean <br/>questions, theoretical, multi-choice and Range questions
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                            <br />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                            <br />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Create question bank
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Add Online Course modules
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Download exam answer scripts (PDF)
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Generate exam access pins
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Invite exam candidates via email
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CancelIcon
                                                style={{ color: '#b2b2b2' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Transfer of question bank
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Add more than one author to a publication	
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Add leagues to online course
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>

                                    <Grid
                                        item
                                        xs={6}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: 20,
                                                fontSize: 13,
                                            }}
                                        >
                                            Certificate Generation	
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CancelIcon
                                                style={{ color: '#b2b2b2' }}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        style={{ backgroundColor: '#F9E7D1' }}
                                    >
                                        <Typography
                                            style={{
                                                padding: '20px 0',
                                                fontSize: 13,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <CheckCircleIcon
                                                style={{ color: 'green' }}
                                            />
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>

                    <div style={{ backgroundColor: '#F57E27', marginTop: 0 }}>
                        <div
                            style={{ padding: '50px 10%', textAlign: 'center' }}
                        >
                            <div
                                // className={classes.contentText}
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
export async function getServerSideProps({ req }) {
    const user: any = session.get(req);
    return { props: { user}}
}
export default Index;
