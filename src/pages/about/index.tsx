import React from 'react';

import { Grid, Typography, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Wrapper from '../../components/wrapper';
// import Imagebg from '../../images/resourcebg.png';
// import image from '../../images/nnw.png';

const Imagebg = require('../../images/resourcebg.png');
const image = require('../../images/nnw.png');

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

function Index() {
    const classes = useStyle();

    return (
        <div>
            <Wrapper
                showFooter={true}
                showHeader={true}
                title="Contentionary - About"
                description="Contentionary"
            >
                <div>
                    <div
                        style={{
                            background: ' url( ' + Imagebg + ') ',
                            backgroundSize: 'cover',
                            width: 'auto',
                            height: 200,
                        }}
                    >
                        <div
                            style={{
                                padding: '50px 10% 0px 10%',
                                color: '#fff',
                                fontSize: 16,
                            }}
                        >
                            <Hidden smDown>
                                <Typography
                                    style={{
                                        fontSize: 50,
                                        fontWeight: 'bold',
                                        color: '#F57E27',
                                        lineHeight: 1.1,
                                        fontFamily: 'cooper black',
                                        width: '80%',
                                    }}
                                >
                                    About Contentionary
                                </Typography>
                            </Hidden>

                            <Hidden mdUp>
                                <Hidden only="xs">
                                    <Typography
                                        style={{
                                            fontSize: 40,
                                            color: '#F57E27',
                                            lineHeight: 1.1,
                                            fontFamily: 'cooper black',
                                        }}
                                    >
                                        About Contentionary
                                    </Typography>
                                </Hidden>
                                <Hidden only="sm">
                                    <Typography
                                        style={{
                                            fontSize: 30,
                                            color: '#F57E27',
                                            lineHeight: 1.1,
                                            fontFamily: 'cooper black',
                                        }}
                                    >
                                        About Contentionary
                                    </Typography>
                                </Hidden>
                            </Hidden>
                        </div>
                    </div>

                    <div
                        className="scrollspy"
                        style={{ backgroundColor: '#fff' }}
                    >
                        <div style={{ padding: '100px 10%' }}>
                            <Grid container spacing={5}>
                                <Grid item xs={12}>
                                    <Typography
                                        style={{
                                            fontSize: 25,
                                            textAlign: 'center',
                                        }}
                                    >
                                        Contentionary is an online marketplace
                                        built to equip and test the global
                                        workforce and student for better
                                        competitiveness. It is a marketplace for
                                        learning content and preparatory test
                                        content.
                                    </Typography>
                                </Grid>
                                <hr
                                    style={{
                                        width: '10%',
                                        backgroundColor: '#F57E27',
                                        marginLeft: '45%',
                                        border: '2px solid #f57e27',
                                        marginBottom: 30,
                                        marginTop: 30,
                                    }}
                                />
                                <Grid item xs={12} sm={6}>
                                    <Typography
                                        style={{
                                            fontSize: 20,
                                            marginBottom: 20,
                                            color: '#F57E27',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        About Contentionary for Instructors and
                                        Examiners
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 18,
                                        }}
                                    >
                                        Contentionary.com is a marketplace that
                                        allows instructors and examiners to
                                        create CENTRES which can be use for
                                        online learning and testing of any sort.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography
                                        style={{
                                            fontSize: 20,
                                            marginBottom: 20,
                                            color: '#F57E27',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        About Contentionary for Workforce and
                                        Students
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 18,
                                        }}
                                    >
                                        Workforce and students can subscribe to
                                        centres of their choice and access
                                        whatever learning or testing contents
                                        are made accessible to them. These could
                                        be private or public centres, and free
                                        or paid centres.
                                    </Typography>
                                </Grid>
                                <hr
                                    style={{
                                        width: '10%',
                                        backgroundColor: '#F57E27',
                                        marginLeft: '45%',
                                        border: '2px solid #f57e27',
                                        marginBottom: 30,
                                        marginTop: 30,
                                    }}
                                />
                                <Grid item xs={12} sm={6}>
                                    <Typography
                                        style={{
                                            fontSize: 20,
                                            marginBottom: 20,
                                            color: '#F57E27',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Phone contacts
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        +234-803-753-7762 <br />
                                        <span
                                            style={{
                                                fontWeight: 'bold',
                                                color: '#F57E27',
                                            }}
                                        >
                                            {' '}
                                            WhatsApp only:
                                        </span>{' '}
                                        +234-905-605-8938
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: 20,
                                            marginBottom: 20,
                                            color: '#F57E27',
                                            fontWeight: 'bold',
                                            marginTop: 30,
                                        }}
                                    >
                                        Resource Emails
                                    </Typography>

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
                                                Enquiries –{' '}
                                            </span>
                                            contact@contentionary.com
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
                                                Sales Department –{' '}
                                            </span>
                                            sales@contentionary.com
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
                                                Help –
                                            </span>{' '}
                                            support@contentionary.com
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
                                                Feedback –{' '}
                                            </span>
                                            feedback@contentionary.com
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
                                                Instructors-
                                            </span>{' '}
                                            instructor@contentionary.com
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
                                                Jobs and openings-{' '}
                                            </span>
                                            application@contentionary.com
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
                                                Proposals -{' '}
                                            </span>
                                            admin@contentionary.com
                                        </li>
                                    </ul>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <img
                                        src={image}
                                        style={{ width: '100%', marginTop: 30 }}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Index;
