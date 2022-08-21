import React from 'react';

import { Grid, Typography, Hidden, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
// import Pixel from '../../images/resourcebg.png';
import Wrapper from '../../components/wrapper';

const Pixel = require('../../images/resourcebg.png');

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
                title="Contentionary - Privacy Policy"
                description="Contentionary"
            >
                <div>
                    <div
                        style={{
                            background: ' url( ' + Pixel + ') ',
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
                                        width: '70%',
                                    }}
                                >
                                    Contentionary - Privacy Policy
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
                                        Contentionary - Privacy Policy
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
                                        Contentionary - Privacy Policy
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
                            <Grid container spacing={6}>
                                <Grid
                                    item
                                    xs={12}
                                    sm={3}
                                    style={{
                                        borderRadius: 3,
                                        padding: 0,
                                        color: '#333',
                                    }}
                                >
                                    <a
                                        href="#introduction"
                                        style={{
                                            textDecoration: 'none',
                                            color: '#f5f5f5',
                                        }}
                                    >
                                        <p
                                            style={{
                                                padding: 10,
                                                backgroundColor: '#F57E27',
                                                margin: 0,
                                                border: '0.3px solid #b3b3b3',
                                                borderRadius: '2px 2px 0 0',
                                            }}
                                        >
                                            Introduction
                                        </p>
                                    </a>
                                    <a
                                        href="#definitions"
                                        className="drop"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <p
                                            className="drop"
                                            id="dropper"
                                            style={{
                                                padding: 10,
                                                margin: 0,
                                                border: '0.3px solid #b3b3b3',
                                                borderRightWidth: 0.3,
                                                borderLeftWidth: 0.3,
                                            }}
                                        >
                                            Definitions
                                        </p>
                                    </a>
                                    <a
                                        href="#information-collection-and-use"
                                        className="drop"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <p
                                            className="drop"
                                            id="dropper"
                                            style={{
                                                padding: 10,
                                                margin: 0,
                                                border: '0.3px solid #b3b3b3',
                                                borderRightWidth: 0.3,
                                                borderLeftWidth: 0.3,
                                                borderTopWidth: 0,
                                            }}
                                        >
                                            Information Collection and Use
                                        </p>
                                    </a>
                                    <a
                                        href="#types-of-data-collected"
                                        className="drop"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <p
                                            className="drop"
                                            id="dropper"
                                            style={{
                                                padding: 10,
                                                margin: 0,
                                                border: '0.3px solid #b3b3b3',
                                                borderRightWidth: 0.3,
                                                borderLeftWidth: 0.3,
                                                borderTopWidth: 0,
                                            }}
                                        >
                                            Types of Data Collected
                                        </p>
                                    </a>
                                    <a
                                        href="#use-of-data"
                                        className="drop"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <p
                                            className="drop"
                                            id="dropper"
                                            style={{
                                                padding: 10,
                                                margin: 0,
                                                border: '0.3px solid #b3b3b3',
                                                borderRightWidth: 0.3,
                                                borderLeftWidth: 0.3,
                                                borderTopWidth: 0,
                                            }}
                                        >
                                            Use of Data
                                        </p>
                                    </a>
                                    <a
                                        href="#retention-of-data"
                                        className="drop"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <p
                                            className="drop"
                                            id="dropper"
                                            style={{
                                                padding: 10,
                                                margin: 0,
                                                border: '0.3px solid #b3b3b3',
                                                borderRightWidth: 0.3,
                                                borderLeftWidth: 0.3,
                                                borderTopWidth: 0,
                                            }}
                                        >
                                            Retention of Data
                                        </p>
                                    </a>
                                    <a
                                        href="#transfer-of-data"
                                        className="drop"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <p
                                            className="drop"
                                            id="dropper"
                                            style={{
                                                padding: 10,
                                                margin: 0,
                                                border: '0.3px solid #b3b3b3',
                                                borderRightWidth: 0.3,
                                                borderLeftWidth: 0.3,
                                                borderTopWidth: 0,
                                            }}
                                        >
                                            Transfer of Data
                                        </p>
                                    </a>
                                    <a
                                        href="#disclosure-of-data"
                                        className="drop"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <p
                                            className="drop"
                                            id="dropper"
                                            style={{
                                                padding: 10,
                                                margin: 0,
                                                border: '0.3px solid #b3b3b3',
                                                borderRightWidth: 0.3,
                                                borderLeftWidth: 0.3,
                                                borderTopWidth: 0,
                                            }}
                                        >
                                            Disclosure of Data
                                        </p>
                                    </a>
                                    <a
                                        href="#security-of-data"
                                        className="drop"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <p
                                            className="drop"
                                            id="dropper"
                                            style={{
                                                padding: 10,
                                                margin: 0,
                                                border: '0.3px solid #b3b3b3',
                                                borderRightWidth: 0.3,
                                                borderLeftWidth: 0.3,
                                                borderTopWidth: 0,
                                            }}
                                        >
                                            Security of Data
                                        </p>
                                    </a>
                                    <a
                                        href="#service-providers"
                                        className="drop"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <p
                                            className="drop"
                                            id="dropper"
                                            style={{
                                                padding: 10,
                                                margin: 0,
                                                border: '0.3px solid #b3b3b3',
                                                borderRightWidth: 0.3,
                                                borderLeftWidth: 0.3,
                                                borderTopWidth: 0,
                                            }}
                                        >
                                            Service Providers
                                        </p>
                                    </a>
                                    <a
                                        href="#analytics"
                                        className="drop"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <p
                                            className="drop"
                                            id="dropper"
                                            style={{
                                                padding: 10,
                                                margin: 0,
                                                border: '0.3px solid #b3b3b3',
                                                borderRightWidth: 0.3,
                                                borderLeftWidth: 0.3,
                                                borderTopWidth: 0,
                                            }}
                                        >
                                            Analytics
                                        </p>
                                    </a>
                                    <a
                                        href="#ci-cd-tools"
                                        className="drop"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <p
                                            id="dropper"
                                            style={{
                                                padding: 10,
                                                margin: 0,
                                                border: '0.3px solid #b3b3b3',
                                                borderRightWidth: 0.3,
                                                borderLeftWidth: 0.3,
                                                borderTopWidth: 0,
                                            }}
                                        >
                                            CI/CD tools
                                        </p>
                                    </a>
                                    <a
                                        href="#advertising"
                                        className="drop"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <p
                                            className="drop"
                                            id="dropper"
                                            style={{
                                                padding: 10,
                                                margin: 0,
                                                border: '0.3px solid #b3b3b3',
                                                borderRightWidth: 0.3,
                                                borderLeftWidth: 0.3,
                                                borderTopWidth: 0,
                                            }}
                                        >
                                            Advertising
                                        </p>
                                    </a>
                                    <a
                                        href="#behavioral-remarketing"
                                        className="drop"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <p
                                            className="drop"
                                            id="dropper"
                                            style={{
                                                padding: 10,
                                                margin: 0,
                                                border: '0.3px solid #b3b3b3',
                                                borderRightWidth: 0.3,
                                                borderLeftWidth: 0.3,
                                                borderTopWidth: 0,
                                            }}
                                        >
                                            Behavioral Remarketing
                                        </p>
                                    </a>
                                    <a
                                        href="#payments"
                                        className="drop"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <p
                                            className="drop"
                                            id="dropper"
                                            style={{
                                                padding: 10,
                                                margin: 0,
                                                border: '0.3px solid #b3b3b3',
                                                borderRightWidth: 0.3,
                                                borderLeftWidth: 0.3,
                                                borderTopWidth: 0,
                                            }}
                                        >
                                            Payments
                                        </p>
                                    </a>
                                    <a
                                        href="#links-to-other-sites"
                                        className="drop"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <p
                                            className="drop"
                                            id="dropper"
                                            style={{
                                                padding: 10,
                                                margin: 0,
                                                border: '0.3px solid #b3b3b3',
                                                borderRightWidth: 0.3,
                                                borderLeftWidth: 0.3,
                                                borderTopWidth: 0,
                                            }}
                                        >
                                            Links to Other Sites
                                        </p>
                                    </a>
                                    <a
                                        href="#changes-to-this-privacy-policy"
                                        className="drop"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <p
                                            className="drop"
                                            id="dropper"
                                            style={{
                                                padding: 10,
                                                margin: 0,
                                                border: '0.3px solid #b3b3b3',
                                                borderRightWidth: 0.3,
                                                borderLeftWidth: 0.3,
                                                borderTopWidth: 0,
                                            }}
                                        >
                                            Changes to This Privacy Policy
                                        </p>
                                    </a>
                                    <a
                                        href="#contact"
                                        className="drop"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <p
                                            className="drop"
                                            id="dropper"
                                            style={{
                                                padding: 10,
                                                margin: 0,
                                                border: '0.3px solid #b3b3b3',
                                                borderRightWidth: 0.3,
                                                borderLeftWidth: 0.3,
                                                borderTopWidth: 0,
                                            }}
                                        >
                                            Contact
                                        </p>
                                    </a>
                                </Grid>

                                <Grid xs={12} sm={9} item>
                                    <div id="introduction">
                                        <Hidden smDown>
                                            <Typography
                                                style={{
                                                    color: '#F57E27',
                                                    fontSize: 22,
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                Privacy Policy
                                            </Typography>
                                        </Hidden>
                                        <Hidden mdUp>
                                            <Typography
                                                style={{
                                                    color: '#F57E27',
                                                    fontSize: 20,
                                                    fontWeight: 'bold',
                                                    fontFamily:
                                                        'sans-serif, Arial',
                                                }}
                                            >
                                                Privacy Policy
                                            </Typography>
                                        </Hidden>
                                        <Typography style={{ fontSize: 14 }}>
                                            {' '}
                                            <i>
                                                This Privacy Policy was last
                                                updated on April 21, 2021
                                            </i>
                                        </Typography>
                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Welcome to <b> Contentionary </b> (
                                            <b>“Company”</b>, <b>“we ”</b>,{' '}
                                            <b>“our”</b>, <b>“us”</b>)! operates{' '}
                                            <span>
                                                <a
                                                    href="https://contentionary.com"
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: '#f57e27',
                                                    }}
                                                >
                                                    https://contentionary.com
                                                </a>
                                            </span>{' '}
                                            and Contentionary mobile application
                                            (hereinafter referred to as{' '}
                                            <b>“Service”</b>).
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Our Privacy Policy governs your
                                            visit to{' '}
                                            <span>
                                                <a
                                                    href="https://contentionary.com"
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: '#f57e27',
                                                    }}
                                                >
                                                    https://contentionary.com
                                                </a>
                                            </span>{' '}
                                            and Contentionary mobile
                                            application, and explains how we
                                            collect, safeguard and disclose
                                            information that results from your
                                            use of our Service.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            We use your data to provide and
                                            improve Service. By using Service,
                                            you agree to the collection and use
                                            of information in accordance with
                                            this policy. Unless otherwise
                                            defined in this Privacy Policy, the
                                            terms used in this Privacy Policy
                                            have the same meanings as in our
                                            Terms and Conditions.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Our Terms and Conditions (
                                            <b>“Terms”</b>) govern all use of
                                            our Service and together with the
                                            Privacy Policy constitutes your
                                            agreement with us (
                                            <b>“agreement”</b>).
                                        </Typography>
                                    </div>

                                    <div
                                        style={{ background: 'white' }}
                                        id="definitions"
                                    >
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                1.
                                            </span>{' '}
                                            Definitions
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <b>SERVICE</b> means the
                                            http://contentionary.com website and
                                            Contentionary mobile application
                                            operated by Contentionary.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <b>PERSONAL DATA</b> means data
                                            about a living individual who can be
                                            identified from those data (or from
                                            those and other information either
                                            in our possession or likely to come
                                            into our possession).
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <b>USAGE DATA</b> is data collected
                                            automatically either generated by
                                            the use of Service or from Service
                                            infrastructure itself (for example,
                                            the duration of a page visit).
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <b>COOKIES</b> are small files
                                            stored on your device (computer or
                                            mobile device).
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <b>DATA CONTROLLER</b> means a
                                            natural or legal person who (either
                                            alone or jointly or in common with
                                            other persons) determines the
                                            purposes for which and the manner in
                                            which any personal data are, or are
                                            to be, processed. For the purpose of
                                            this Privacy Policy, we are a Data
                                            Controller of your data.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <b>
                                                DATA PROCESSORS (OR SERVICE
                                                PROVIDERS)
                                            </b>{' '}
                                            means any natural or legal person
                                            who processes the data on behalf of
                                            the Data Controller. We may use the
                                            services of various Service
                                            Providers in order to process your
                                            data more effectively.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <b>DATA SUBJECT</b> is any living
                                            individual who is the subject of
                                            Personal Data.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <b>THE USER</b> is the individual
                                            using our Service. The User
                                            corresponds to the Data Subject, who
                                            is the subject of Personal Data.
                                        </Typography>
                                    </div>

                                    <div id="information-collection-and-use">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                2.
                                            </span>{' '}
                                            Information Collection and Use
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            We collect several different types
                                            of information for various purposes
                                            to provide and improve our Service
                                            to you.
                                        </Typography>
                                    </div>

                                    <div
                                        style={{ background: 'white' }}
                                        id="types-of-data-collected"
                                    >
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                3.
                                            </span>{' '}
                                            Types of Data Collected
                                        </Typography>
                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <b>Personal Data</b>) While using
                                            our Service, we may ask you to
                                            provide us with certain personally
                                            identifiable information that can be
                                            used to contact or identify you (
                                            <b>“Personal Data”</b>
                                            ). Personally identifiable
                                            information may include, but is not
                                            limited to:
                                        </Typography>
                                        <ol
                                            type="a"
                                            style={{ marginLeft: '5%' }}
                                        >
                                            <li
                                                style={{
                                                    marginTop: 20,
                                                    color: '#333',
                                                    fontFamily:
                                                        'sans-serif, Arial',
                                                }}
                                            >
                                                {' '}
                                                Email address
                                            </li>
                                            <li
                                                style={{
                                                    marginTop: 20,
                                                    color: '#333',
                                                    fontFamily:
                                                        'sans-serif, Arial',
                                                }}
                                            >
                                                {' '}
                                                First name and last name
                                            </li>
                                            <li
                                                style={{
                                                    marginTop: 20,
                                                    color: '#333',
                                                    fontFamily:
                                                        'sans-serif, Arial',
                                                }}
                                            >
                                                {' '}
                                                Phone number
                                            </li>
                                            <li
                                                style={{
                                                    marginTop: 20,
                                                    color: '#333',
                                                    fontFamily:
                                                        'sans-serif, Arial',
                                                }}
                                            >
                                                {' '}
                                                Address, State, Province,
                                                ZIP/Postal code, City
                                            </li>
                                            <li
                                                style={{
                                                    marginTop: 20,
                                                    color: '#333',
                                                    fontFamily:
                                                        'sans-serif, Arial',
                                                }}
                                            >
                                                {' '}
                                                Cookies and Usage Data
                                            </li>
                                        </ol>
                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            We may use your Personal Data to
                                            contact you with newsletters,
                                            marketing or promotional materials
                                            and other information that may be of
                                            interest to you. You may opt out of
                                            receiving any, or all, of these
                                            communications from us by following
                                            the unsubscribe link.
                                        </Typography>
                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <b>Usage Data</b> <br /> We may also
                                            collect information that your
                                            browser sends whenever you visit our
                                            Service or when you access Service
                                            by or through a mobile device
                                            (“Usage Data”).
                                        </Typography>
                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            This Usage Data may include
                                            information such as your computer's
                                            Internet Protocol address (e.g. IP
                                            address), browser type, browser
                                            version, the pages of our Service
                                            that you visit, the time and date of
                                            your visit, the time spent on those
                                            pages, unique device identifiers and
                                            other diagnostic data.
                                        </Typography>
                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            When you access Service with a
                                            mobile device, this Usage Data may
                                            include information such as the type
                                            of mobile device you use, your
                                            mobile device unique ID, the IP
                                            address of your mobile device, your
                                            mobile operating system, the type of
                                            mobile Internet browser you use,
                                            unique device identifiers and other
                                            diagnostic data.
                                        </Typography>
                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <b>Location Data</b> <br /> We may
                                            use and store information about your
                                            location if you give us permission
                                            to do so (<b>“Location Data”</b>).
                                            We use this data to provide features
                                            of our Service, to improve and
                                            customize our Service.
                                        </Typography>
                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            You can enable or disable location
                                            services when you use our Service at
                                            any time by way of your device
                                            settings.
                                        </Typography>
                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <b>Tracking Cookies Data</b> <br />{' '}
                                            We use cookies and similar tracking
                                            technologies to track the activity
                                            on our Service and we hold certain
                                            information.
                                        </Typography>
                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            {' '}
                                            Cookies are files with a small
                                            amount of data which may include an
                                            anonymous unique identifier. Cookies
                                            are sent to your browser from a
                                            website and stored on your device.
                                            Other tracking technologies are also
                                            used such as beacons, tags and
                                            scripts to collect and track
                                            information and to improve and
                                            analyze our Service.
                                        </Typography>
                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            {' '}
                                            You can instruct your browser to
                                            refuse all cookies or to indicate
                                            when a cookie is being sent.
                                            However, if you do not accept
                                            cookies, you may not be able to use
                                            some portions of our Service.
                                        </Typography>
                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            {' '}
                                            Examples of Cookies we use:
                                            <ol
                                                type="a"
                                                style={{ marginLeft: '5%' }}
                                            >
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    <b>Session Cookies:</b> We
                                                    use Session Cookies to
                                                    operate our Service.
                                                </li>
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        Preference Cookies:
                                                    </b>{' '}
                                                    We use Preference Cookies to
                                                    remember your preferences
                                                    and various settings.
                                                </li>
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    <b>Security Cookies:</b> We
                                                    use Security Cookies for
                                                    security purposes.
                                                </li>
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        Advertising Cookies:
                                                    </b>{' '}
                                                    Advertising Cookies are used
                                                    to serve you with
                                                    advertisements that may be
                                                    relevant to you and your
                                                    interests.
                                                </li>
                                            </ol>
                                        </Typography>
                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <b>Other Data</b> <br /> While using
                                            our Service, we may also collect the
                                            following information: sex, age,
                                            date of birth, place of birth,
                                            passport details, citizenship,
                                            registration at place of residence
                                            and actual address, telephone number
                                            (work, mobile), details of documents
                                            on education, qualification,
                                            professional training, employment
                                            agreements, non-disclosure
                                            agreements, information on bonuses
                                            and compensation, information on
                                            marital status, family members,
                                            social security (or other taxpayer
                                            identification) number, office
                                            location and other data.
                                        </Typography>
                                    </div>

                                    <div id="use-of-data">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                4.
                                            </span>{' '}
                                            Use of Data
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            {' '}
                                            Contentionary uses the collected
                                            data for various purposes:
                                            <ol
                                                type="a"
                                                style={{ marginLeft: '5%' }}
                                            >
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    to provide and maintain our
                                                    Service;
                                                </li>
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    to notify you about changes
                                                    to our Service;
                                                </li>
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    to allow you to participate
                                                    in interactive features of
                                                    our Service when you choose
                                                    to do so;
                                                </li>
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    to provide customer support;
                                                </li>
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    to gather analysis or
                                                    valuable information so that
                                                    we can improve our Service;
                                                </li>
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    to monitor the usage of our
                                                    Service;
                                                </li>
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    to detect, prevent and
                                                    address technical issues;
                                                </li>
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    to fulfill any other purpose
                                                    for which you provide it;
                                                </li>
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    to carry out our obligations
                                                    and enforce our rights
                                                    arising from any contracts
                                                    entered into between you and
                                                    us, including for billing
                                                    and collection;
                                                </li>
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    to provide you with notices
                                                    about your account and/or
                                                    subscription, including
                                                    expiration and renewal
                                                    notices, email-instructions,
                                                    etc.;
                                                </li>
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    to provide you with news,
                                                    special offers and general
                                                    information about other
                                                    goods, services and events
                                                    which we offer that are
                                                    similar to those that you
                                                    have already purchased or
                                                    enquired about unless you
                                                    have opted not to receive
                                                    such information;
                                                </li>
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    in any other way we may
                                                    describe when you provide
                                                    the information;
                                                </li>
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    for any other purpose with
                                                    your consent.
                                                </li>
                                            </ol>
                                        </Typography>
                                    </div>

                                    <div id="retention-of-data">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                5.
                                            </span>{' '}
                                            Retention of Data
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            We will retain your Personal Data
                                            only for as long as is necessary for
                                            the purposes set out in this Privacy
                                            Policy. We will retain and use your
                                            Personal Data to the extent
                                            necessary to comply with our legal
                                            obligations (for example, if we are
                                            required to retain your data to
                                            comply with applicable laws),
                                            resolve disputes, and enforce our
                                            legal agreements and policies.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            We will also retain Usage Data for
                                            internal analysis purposes. Usage
                                            Data is generally retained for a
                                            shorter period, except when this
                                            data is used to strengthen the
                                            security or to improve the
                                            functionality of our Service, or we
                                            are legally obligated to retain this
                                            data for longer time periods.
                                        </Typography>
                                    </div>

                                    <div id="transfer-of-data">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                6.
                                            </span>{' '}
                                            Transfer of Data
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Your information, including Personal
                                            Data, may be transferred to – and
                                            maintained on – computers located
                                            outside of your state, province,
                                            country or other governmental
                                            jurisdiction where the data
                                            protection laws may differ from
                                            those of your jurisdiction.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            If you are located outside Nigeria
                                            or United States and choose to
                                            provide information to us, please
                                            note that we transfer the data,
                                            including Personal Data, to United
                                            States and process it there.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Your consent to this Privacy Policy
                                            followed by your submission of such
                                            information represents your
                                            agreement to that transfer.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Your continued usContentionary will
                                            take all the steps reasonably
                                            necessary to ensure that your data
                                            is treated securely and in
                                            accordance with this Privacy Policy
                                            and no transfer of your Personal
                                            Data will take place to an
                                            organisation or a country unless
                                            there are adequate controls in place
                                            including the security of your data
                                            and other personal information.{' '}
                                        </Typography>
                                    </div>

                                    <div
                                        style={{ background: 'white' }}
                                        id="disclosure-of-data"
                                    >
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                7.
                                            </span>{' '}
                                            Disclosure of Data
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            We may disclose personal information
                                            that we collect, or you provide:
                                            <ol
                                                type="a"
                                                style={{ marginLeft: '5%' }}
                                            >
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        Disclosure for Law
                                                        Enforcement.
                                                    </b>{' '}
                                                    <br /> Under certain
                                                    circumstances, we may be
                                                    required to disclose your
                                                    Personal Data if required to
                                                    do so by law or in response
                                                    to valid requests by public
                                                    authorities.
                                                </li>
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        {' '}
                                                        Business Transaction.
                                                    </b>{' '}
                                                    <br /> If we or our
                                                    subsidiaries are involved in
                                                    a merger, acquisition or
                                                    asset sale, your Personal
                                                    Data may be transferred.
                                                </li>
                                                <li
                                                    style={{
                                                        marginTop: 20,
                                                        color: '#333',
                                                        fontFamily:
                                                            'sans-serif, Arial',
                                                    }}
                                                >
                                                    {' '}
                                                    <b>
                                                        Other cases. We may
                                                        disclose your
                                                        information also:
                                                    </b>{' '}
                                                    <br />
                                                    <ol type="i">
                                                        <li
                                                            style={{
                                                                marginTop: 20,
                                                                color: '#333',
                                                                fontFamily:
                                                                    'sans-serif, Arial',
                                                            }}
                                                        >
                                                            {' '}
                                                            to our subsidiaries
                                                            and affiliates;
                                                        </li>
                                                        <li
                                                            style={{
                                                                marginTop: 20,
                                                                color: '#333',
                                                                fontFamily:
                                                                    'sans-serif, Arial',
                                                            }}
                                                        >
                                                            {' '}
                                                            to contractors,
                                                            service providers,
                                                            and other third
                                                            parties we use to
                                                            support our
                                                            business;
                                                        </li>
                                                        <li
                                                            style={{
                                                                marginTop: 20,
                                                                color: '#333',
                                                                fontFamily:
                                                                    'sans-serif, Arial',
                                                            }}
                                                        >
                                                            {' '}
                                                            to fulfill the
                                                            purpose for which
                                                            you provide it;
                                                        </li>
                                                        <li
                                                            style={{
                                                                marginTop: 20,
                                                                color: '#333',
                                                                fontFamily:
                                                                    'sans-serif, Arial',
                                                            }}
                                                        >
                                                            {' '}
                                                            for the purpose of
                                                            including your
                                                            company’s logo on
                                                            our website;
                                                        </li>
                                                        <li
                                                            style={{
                                                                marginTop: 20,
                                                                color: '#333',
                                                                fontFamily:
                                                                    'sans-serif, Arial',
                                                            }}
                                                        >
                                                            {' '}
                                                            for any other
                                                            purpose disclosed by
                                                            us when you provide
                                                            the information;
                                                        </li>
                                                        <li
                                                            style={{
                                                                marginTop: 20,
                                                                color: '#333',
                                                                fontFamily:
                                                                    'sans-serif, Arial',
                                                            }}
                                                        >
                                                            {' '}
                                                            with your consent in
                                                            any other cases;
                                                        </li>
                                                        <li
                                                            style={{
                                                                marginTop: 20,
                                                                color: '#333',
                                                                fontFamily:
                                                                    'sans-serif, Arial',
                                                            }}
                                                        >
                                                            {' '}
                                                            if we believe
                                                            disclosure is
                                                            necessary or
                                                            appropriate to
                                                            protect the rights,
                                                            property, or safety
                                                            of the Company, our
                                                            customers, or
                                                            others.
                                                        </li>
                                                    </ol>
                                                </li>
                                            </ol>
                                        </Typography>
                                    </div>

                                    <div id="security-of-data">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                8.
                                            </span>{' '}
                                            Security of Data
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            The security of your data is
                                            important to us but remember that no
                                            method of transmission over the
                                            Internet or method of electronic
                                            storage is 100% secure. While we
                                            strive to use commercially
                                            acceptable means to protect your
                                            Personal Data, we cannot guarantee
                                            its absolute security.
                                        </Typography>
                                    </div>

                                    <div id="service-providers">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                9.
                                            </span>{' '}
                                            Service Providers
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            We may employ third party companies
                                            and individuals to facilitate our
                                            Service (“Service Providers”),
                                            provide Service on our behalf,
                                            perform Service-related services or
                                            assist us in analysing how our
                                            Service is used.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            These third parties have access to
                                            your Personal Data only to perform
                                            these tasks on our behalf and are
                                            obligated not to disclose or use it
                                            for any other purpose.
                                        </Typography>
                                    </div>

                                    <div id="analytics">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                10.
                                            </span>{' '}
                                            Analytics
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            We may use third-party Service
                                            Providers to monitor and analyze the
                                            use of our Service.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <span>
                                                {' '}
                                                <b>Google Analytics</b>
                                            </span>{' '}
                                            <br />
                                            Google Analytics is a web analytics
                                            service offered by Google that
                                            tracks and reports website traffic.
                                            Google uses the data collected to
                                            track and monitor the use of our
                                            Service. This data is shared with
                                            other Google services. Google may
                                            use the collected data to
                                            contextualise and personalise the
                                            ads of its own advertising network..
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            For more information on the privacy
                                            practices of Google, please visit
                                            the{' '}
                                            <span>
                                                <a
                                                    target="_blank"
                                                    href="https://policies.google.com/privacy?hl=en"
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: '#f57e27',
                                                    }}
                                                >
                                                    Google Privacy Terms
                                                </a>{' '}
                                                web page
                                            </span>
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            We also encourage you to review the{' '}
                                            <span>
                                                <a
                                                    target="_blank"
                                                    href="https://support.google.com/analytics/answer/6004245"
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: '#f57e27',
                                                    }}
                                                >
                                                    Google's policy
                                                </a>{' '}
                                                for safeguarding your data.
                                            </span>
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <span>
                                                {' '}
                                                <b>Firebase</b>
                                            </span>{' '}
                                            <br />
                                            Firebase is an analytics service
                                            provided by Google Inc.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            You may opt-out of certain Firebase
                                            features through your mobile device
                                            settings, such as your device
                                            advertising settings or by following
                                            the instructions provided by Google
                                            in their Privacy Policy
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            For more information on what type of
                                            information Firebase collects,
                                            please visit the{' '}
                                            <span>
                                                <a
                                                    target="_blank"
                                                    href="https://policies.google.com/privacy?hl=en"
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: '#f57e27',
                                                    }}
                                                >
                                                    Google's Privacy Terms web
                                                    page
                                                </a>
                                                .{' '}
                                            </span>
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <span>
                                                {' '}
                                                <b>Cloudflare Analytics</b>
                                            </span>{' '}
                                            <br />
                                            Cloudflare analytics is a web
                                            analytics service operated by
                                            Cloudflare Inc. Read the{' '}
                                            <span>
                                                <a
                                                    target="_blank"
                                                    href="https://www.cloudflare.com/privacypolicy"
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: '#f57e27',
                                                    }}
                                                >
                                                    Privacy Policy here
                                                </a>
                                                .{' '}
                                            </span>
                                        </Typography>
                                    </div>

                                    <div id="ci-cd-tools">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                11.
                                            </span>{' '}
                                            CI/CD Tools
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            We may use third-party Service
                                            Providers to automate the
                                            development process of our Service.
                                        </Typography>
                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <b>GitHub</b> <br /> GitHub is
                                            provided by GitHub, Inc. GitHub is a
                                            development platform to host and
                                            review code, manage projects, and
                                            build software.
                                        </Typography>
                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            For more information on what data
                                            GitHub collects for what purpose and
                                            how the protection of the data is
                                            ensured, please visit
                                            <span>
                                                <a
                                                    target="_blank"
                                                    href="https://help.github.com/en/articles/github-privacy-statement"
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: '#f57e27',
                                                    }}
                                                >
                                                    GitHub Privacy Policy page
                                                </a>
                                                .{' '}
                                            </span>
                                        </Typography>
                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <b>GitLab CI/CD</b> <br /> GitLab
                                            CI/CD is provided by GitLab, Inc.
                                            GitLab CI (Continuous Integration)
                                            service is a part of GitLab that
                                            build and test the software whenever
                                            developer pushes code to
                                            application.
                                        </Typography>
                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            GitLab CD (Continuous Deployment) is
                                            a software service that places the
                                            changes of every code in the
                                            production which results in every
                                            day deployment of production.
                                        </Typography>
                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            For more information on what data
                                            GitLab CI/CD collects for what
                                            purpose and how the protection of
                                            the data is ensured, please visit
                                            <span>
                                                <a
                                                    target="_blank"
                                                    href="https://about.gitlab.com/privacy/"
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: '#f57e27',
                                                    }}
                                                >
                                                    GitLab CI/CD Privacy Policy
                                                    page
                                                </a>
                                                .{' '}
                                            </span>
                                        </Typography>
                                    </div>

                                    <div id="advertising">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                12.
                                            </span>{' '}
                                            Advertising
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            We may use third-party Service
                                            Providers to show advertisements to
                                            you to help support and maintain our
                                            Service.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <b>
                                                Google AdSense DoubleClick
                                                Cookie
                                            </b>{' '}
                                            <br />
                                            Google, as a third party vendor,
                                            uses cookies to serve ads on our
                                            Service. Google's use of the
                                            DoubleClick cookie enables it and
                                            its partners to serve ads to our
                                            users based on their visit to our
                                            Service or other websites on the
                                            Internet.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            You may opt out of the use of the
                                            DoubleClick Cookie for
                                            interest-based advertising by
                                            visiting the Google Ads Settings web
                                            page:
                                            http://www.google.com/ads/preferences/
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <b>AdMob by Google</b> <br />
                                            AdMob by Google is provided by
                                            Google Inc. You can opt-out from the
                                            AdMob by Google service by following
                                            the instructions described by
                                            Google:
                                            https://support.google.com/ads/answer/2662922?hl=en
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            You may opt out of the use of the
                                            DoubleClick Cookie for
                                            interest-based advertising by
                                            visiting the Google Ads Settings web
                                            page:
                                            http://www.google.com/ads/preferences/
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            For more information on how Google
                                            uses the collected information,
                                            please visit the “How Google uses
                                            data when you use our partners'
                                            sites or app” page:
                                            http://www.google.com/policies/privacy/partners/
                                            or visit the Privacy Policy of
                                            Google:
                                            http://www.google.com/policies/privacy/
                                        </Typography>
                                    </div>

                                    <div
                                        style={{ background: 'white' }}
                                        id="behavioral-remarketing"
                                    >
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                13.
                                            </span>{' '}
                                            Intellectual Property
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Service and its original content
                                            (excluding Content provided by
                                            users), features and functionality
                                            are and will remain the exclusive
                                            property of Contentionary and its
                                            licensors. Service is protected by
                                            copyright, trademark, and other laws
                                            of the United States and foreign
                                            countries. Our trademarks and trade
                                            dress may not be used in connection
                                            with any product or service without
                                            the prior written consent of
                                            Contentionary. You can know more by
                                            clicking{' '}
                                            <span>
                                                <a
                                                    href="intellectual-property"
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: '#f57e27',
                                                    }}
                                                >
                                                    intellectual property.
                                                </a>{' '}
                                            </span>
                                        </Typography>
                                    </div>

                                    <div
                                        style={{ background: 'white' }}
                                        id="payments"
                                    >
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                14.
                                            </span>{' '}
                                            Copyright Policy
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            We respect the intellectual property
                                            rights of others. It is our policy
                                            to respond to any claim that Content
                                            posted on Service infringes on the
                                            copyright or other intellectual
                                            property rights (“Infringement”) of
                                            any person or entity.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            If you are a copyright owner, or
                                            authorized on behalf of one, and you
                                            believe that the copyrighted work
                                            has been copied in a way that
                                            constitutes copyright infringement,
                                            please submit your claim via email
                                            to copyright@contentionary.com, with
                                            the subject line: “Copyright
                                            Infringement” and include in your
                                            claim a detailed description of the
                                            alleged Infringement as detailed
                                            below, under “DMCA Notice and
                                            Procedure for Copyright Infringement
                                            Claims”.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            You may be held accountable for
                                            damages (including costs and
                                            attorneys' fees) for
                                            misrepresentation or bad-faith
                                            claims on the infringement of any
                                            Content found on and/or through
                                            Service on your copyright.
                                        </Typography>
                                    </div>

                                    <div id="links-to-other-sites">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                15.
                                            </span>{' '}
                                            DMCA Notice and Procedure for
                                            Copyright Infringement Claims
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            You may submit a notification
                                            pursuant to the Digital Millennium
                                            Copyright Act (DMCA) by providing
                                            our Copyright Agent with the
                                            following information in writing:
                                        </Typography>

                                        <ol
                                            type="a"
                                            style={{ marginLeft: '5%' }}
                                        >
                                            <li
                                                style={{
                                                    marginTop: 20,
                                                    color: '#333',
                                                    fontFamily:
                                                        'sans-serif, Arial',
                                                }}
                                            >
                                                {' '}
                                                an electronic or physical
                                                signature of the person
                                                authorized to act on behalf of
                                                the owner of the copyright's
                                                interest;
                                            </li>
                                            <li
                                                style={{
                                                    marginTop: 20,
                                                    color: '#333',
                                                    fontFamily:
                                                        'sans-serif, Arial',
                                                }}
                                            >
                                                {' '}
                                                a description of the copyrighted
                                                work that you claim has been
                                                infringed, including the URL
                                                (i.e., web page address) of the
                                                location where the copyrighted
                                                work exists or a copy of the
                                                copyrighted work;
                                            </li>
                                            <li
                                                style={{
                                                    marginTop: 20,
                                                    color: '#333',
                                                    fontFamily:
                                                        'sans-serif, Arial',
                                                }}
                                            >
                                                {' '}
                                                identification of the URL or
                                                other specific location on
                                                Service where the material that
                                                you claim is infringing is
                                                located;
                                            </li>
                                            <li
                                                style={{
                                                    marginTop: 20,
                                                    color: '#333',
                                                    fontFamily:
                                                        'sans-serif, Arial',
                                                }}
                                            >
                                                {' '}
                                                your address, telephone number,
                                                and email address;
                                            </li>
                                            <li
                                                style={{
                                                    marginTop: 20,
                                                    color: '#333',
                                                    fontFamily:
                                                        'sans-serif, Arial',
                                                }}
                                            >
                                                {' '}
                                                a statement by you that you have
                                                a good faith belief that the
                                                disputed use is not authorized
                                                by the copyright owner, its
                                                agent, or the law;
                                            </li>
                                            <li
                                                style={{
                                                    marginTop: 20,
                                                    color: '#333',
                                                    fontFamily:
                                                        'sans-serif, Arial',
                                                }}
                                            >
                                                {' '}
                                                a statement by you, made under
                                                penalty of perjury, that the
                                                above information in your notice
                                                is accurate and that you are the
                                                copyright owner or authorized to
                                                act on the copyright owner's
                                                behalf.
                                            </li>
                                        </ol>
                                    </div>

                                    <div id="changes-to-this-privacy-policy">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                16.
                                            </span>{' '}
                                            Error Reporting and Feedback
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            You may provide us either directly
                                            at contact@contentionary.com or via
                                            third party sites and tools with
                                            information and feedback concerning
                                            errors, suggestions for
                                            improvements, ideas, problems,
                                            complaints, and other matters
                                            related to our Service (“Feedback”).
                                            You acknowledge and agree that: (i)
                                            you shall not retain, acquire or
                                            assert any intellectual property
                                            right or other right, title or
                                            interest in or to the Feedback; (ii)
                                            Company may have development ideas
                                            similar to the Feedback; (iii)
                                            Feedback does not contain
                                            confidential information or
                                            proprietary information from you or
                                            any third party; and (iv) Company is
                                            not under any obligation of
                                            confidentiality with respect to the
                                            Feedback. In the event the transfer
                                            of the ownership to the Feedback is
                                            not possible due to applicable
                                            mandatory laws, you grant Company
                                            and its affiliates an exclusive,
                                            transferable, irrevocable,
                                            free-of-charge, sub-licensable,
                                            unlimited and perpetual right to use
                                            (including copy, modify, create
                                            derivative works, publish,
                                            distribute and commercialize)
                                            Feedback in any manner and for any
                                            purpose.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            The third party sites and tools
                                            mentioned above include the
                                            following:
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            <b>Firebase Crashlytics</b> <br />
                                            Firebase Crashlytics is bug
                                            reporting service provided by Google
                                            Inc.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            You may opt-out of certain Firebase
                                            features through your mobile device
                                            settings, such as your device
                                            advertising settings or by following
                                            the instructions provided by Google
                                            in their Privacy Policy:{' '}
                                            <span>
                                                <a
                                                    href="https://policies.google.com/privacy?hl=en"
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: '#f57e27',
                                                    }}
                                                >
                                                    https://policies.google.com/privacy?hl=en
                                                </a>{' '}
                                            </span>
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            For more information on what type of
                                            information Firebase collects,
                                            please visit the Google Privacy
                                            Terms web page:{' '}
                                            <span>
                                                <a
                                                    href="https://policies.google.com/privacy?hl=en"
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: '#f57e27',
                                                    }}
                                                >
                                                    https://policies.google.com/privacy?hl=en
                                                </a>{' '}
                                            </span>
                                        </Typography>
                                    </div>

                                    <div id="links-to-other-web-sites">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                17.
                                            </span>{' '}
                                            Links To Other Web Sites
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Our Service may contain links to
                                            third party web sites or services
                                            that are not owned or controlled by
                                            Contentionary.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Contentionary has no control over,
                                            and assumes no responsibility for
                                            the content, privacy policies, or
                                            practices of any third party web
                                            sites or services. We do not warrant
                                            the offerings of any of these
                                            entities/individuals or their
                                            websites.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            YOU ACKNOWLEDGE AND AGREE THAT
                                            CONTENTIONARY SHALL NOT BE
                                            RESPONSIBLE OR LIABLE, DIRECTLY OR
                                            INDIRECTLY, FOR ANY DAMAGE OR LOSS
                                            CAUSED OR ALLEGED TO BE CAUSED BY OR
                                            IN CONNECTION WITH USE OF OR
                                            RELIANCE ON ANY SUCH CONTENT, GOODS
                                            OR SERVICES AVAILABLE ON OR THROUGH
                                            ANY SUCH THIRD PARTY WEB SITES OR
                                            SERVICES.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            WE STRONGLY ADVISE YOU TO READ THE
                                            TERMS OF SERVICE AND PRIVACY
                                            POLICIES OF ANY THIRD PARTY WEB
                                            SITES OR SERVICES THAT YOU VISIT.
                                        </Typography>
                                    </div>

                                    <div id="disclaimer-of-warranty">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                18.
                                            </span>{' '}
                                            Disclaimer Of Warranty
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            THESE SERVICES ARE PROVIDED BY
                                            COMPANY ON AN “AS IS” AND “AS
                                            AVAILABLE” BASIS. COMPANY MAKES NO
                                            REPRESENTATIONS OR WARRANTIES OF ANY
                                            KIND, EXPRESS OR IMPLIED, AS TO THE
                                            OPERATION OF THEIR SERVICES, OR THE
                                            INFORMATION, CONTENT OR MATERIALS
                                            INCLUDED THEREIN. YOU EXPRESSLY
                                            AGREE THAT YOUR USE OF THESE
                                            SERVICES, THEIR CONTENT, AND ANY
                                            SERVICES OR ITEMS OBTAINED FROM US
                                            IS AT YOUR SOLE RISK.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            NEITHER COMPANY NOR ANY PERSON
                                            ASSOCIATED WITH COMPANY MAKES ANY
                                            WARRANTY OR REPRESENTATION WITH
                                            RESPECT TO THE COMPLETENESS,
                                            SECURITY, RELIABILITY, QUALITY,
                                            ACCURACY, OR AVAILABILITY OF THE
                                            SERVICES. WITHOUT LIMITING THE
                                            FOREGOING, NEITHER COMPANY NOR
                                            ANYONE ASSOCIATED WITH COMPANY
                                            REPRESENTS OR WARRANTS THAT THE
                                            SERVICES, THEIR CONTENT, OR ANY
                                            SERVICES OR ITEMS OBTAINED THROUGH
                                            THE SERVICES WILL BE ACCURATE,
                                            RELIABLE, ERROR-FREE, OR
                                            UNINTERRUPTED, THAT DEFECTS WILL BE
                                            CORRECTED, THAT THE SERVICES OR THE
                                            SERVER THAT MAKES IT AVAILABLE ARE
                                            FREE OF VIRUSES OR OTHER HARMFUL
                                            COMPONENTS OR THAT THE SERVICES OR
                                            ANY SERVICES OR ITEMS OBTAINED
                                            THROUGH THE SERVICES WILL OTHERWISE
                                            MEET YOUR NEEDS OR EXPECTATIONS.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            COMPANY HEREBY DISCLAIMS ALL
                                            WARRANTIES OF ANY KIND, WHETHER
                                            EXPRESS OR IMPLIED, STATUTORY, OR
                                            OTHERWISE, INCLUDING BUT NOT LIMITED
                                            TO ANY WARRANTIES OF
                                            MERCHANTABILITY, NON-INFRINGEMENT,
                                            AND FITNESS FOR PARTICULAR PURPOSE.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            THE FOREGOING DOES NOT AFFECT ANY
                                            WARRANTIES WHICH CANNOT BE EXCLUDED
                                            OR LIMITED UNDER APPLICABLE LAW.
                                        </Typography>
                                    </div>

                                    <div id="limitation-of-liability">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                19.
                                            </span>{' '}
                                            Limitation Of Liability
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            EXCEPT AS PROHIBITED BY LAW, YOU
                                            WILL HOLD US AND OUR OFFICERS,
                                            DIRECTORS, EMPLOYEES, AND AGENTS
                                            HARMLESS FOR ANY INDIRECT, PUNITIVE,
                                            SPECIAL, INCIDENTAL, OR
                                            CONSEQUENTIAL DAMAGE, HOWEVER IT
                                            ARISES (INCLUDING ATTORNEYS' FEES
                                            AND ALL RELATED COSTS AND EXPENSES
                                            OF LITIGATION AND ARBITRATION, OR AT
                                            TRIAL OR ON APPEAL, IF ANY, WHETHER
                                            OR NOT LITIGATION OR ARBITRATION IS
                                            INSTITUTED), WHETHER IN AN ACTION OF
                                            CONTRACT, NEGLIGENCE, OR OTHER
                                            TORTIOUS ACTION, OR ARISING OUT OF
                                            OR IN CONNECTION WITH THIS
                                            AGREEMENT, INCLUDING WITHOUT
                                            LIMITATION ANY CLAIM FOR PERSONAL
                                            INJURY OR PROPERTY DAMAGE, ARISING
                                            FROM THIS AGREEMENT AND ANY
                                            VIOLATION BY YOU OF ANY FEDERAL,
                                            STATE, OR LOCAL LAWS, STATUTES,
                                            RULES, OR REGULATIONS, EVEN IF
                                            COMPANY HAS BEEN PREVIOUSLY ADVISED
                                            OF THE POSSIBILITY OF SUCH DAMAGE.
                                            EXCEPT AS PROHIBITED BY LAW, IF
                                            THERE IS LIABILITY FOUND ON THE PART
                                            OF COMPANY, IT WILL BE LIMITED TO
                                            THE AMOUNT PAID FOR THE PRODUCTS
                                            AND/OR SERVICES, AND UNDER NO
                                            CIRCUMSTANCES WILL THERE BE
                                            CONSEQUENTIAL OR PUNITIVE DAMAGES.
                                            SOME STATES DO NOT ALLOW THE
                                            EXCLUSION OR LIMITATION OF PUNITIVE,
                                            INCIDENTAL OR CONSEQUENTIAL DAMAGES,
                                            SO THE PRIOR LIMITATION OR EXCLUSION
                                            MAY NOT APPLY TO YOU.
                                        </Typography>
                                    </div>

                                    <div id="termination">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                20.
                                            </span>{' '}
                                            Termination
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            We may terminate or suspend your
                                            account and bar access to Service
                                            immediately, without prior notice or
                                            liability, under our sole
                                            discretion, for any reason
                                            whatsoever and without limitation,
                                            including but not limited to a
                                            breach of Terms.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            If you wish to terminate your
                                            account, you may simply discontinue
                                            using Service.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            All provisions of Terms which by
                                            their nature should survive
                                            termination shall survive
                                            termination, including, without
                                            limitation, ownership provisions,
                                            warranty disclaimers, indemnity and
                                            limitations of liability.
                                        </Typography>
                                    </div>

                                    <div id="governing-law">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                21.
                                            </span>{' '}
                                            Governing Law
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            You agree that these Terms shall be
                                            governed by and interpreted in
                                            accordance with the laws of the
                                            State of Delaware, without giving
                                            effect to principles of conflicts of
                                            law. Any legal action or proceeding
                                            arising under, concerning or
                                            relating to these Terms, or by
                                            reason of the fact of your use of
                                            the Platform or the Account, shall
                                            be brought exclusively in the
                                            federal or state courts physically
                                            located in New York, no other court
                                            or tribunal shall have jurisdiction,
                                            and you hereby irrevocably consent
                                            to the personal jurisdiction and
                                            venue therein.
                                        </Typography>
                                    </div>

                                    <div id="changes-to-service">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                22.
                                            </span>{' '}
                                            Changes To Service
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            We reserve the right to withdraw or
                                            amend our Service, and any service
                                            or material we provide via Service,
                                            in our sole discretion without
                                            notice. We will not be liable if for
                                            any reason all or any part of
                                            Service is unavailable at any time
                                            or for any period. From time to
                                            time, we may restrict access to some
                                            parts of Service, or the entire
                                            Service, to users, including
                                            registered users.
                                        </Typography>
                                    </div>

                                    <div id="amendments-to-terms">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                23.
                                            </span>{' '}
                                            Amendments To Terms
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            We may amend Terms at any time by
                                            posting the amended terms on this
                                            site. It is your responsibility to
                                            review these Terms periodically.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Your continued use of the Platform
                                            following the posting of revised
                                            Terms means that you accept and
                                            agree to the changes. You are
                                            expected to check this page
                                            frequently so you are aware of any
                                            changes, as they are binding on you.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            By continuing to access or use our
                                            Service after any revisions become
                                            effective, you agree to be bound by
                                            the revised terms. If you do not
                                            agree to the new terms, you are no
                                            longer authorized to use Service.
                                        </Typography>
                                    </div>

                                    <div id="waiver-and-severability">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                24.
                                            </span>{' '}
                                            Waiver And Severability
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            No waiver by Company of any term or
                                            condition set forth in Terms shall
                                            be deemed a further or continuing
                                            waiver of such term or condition or
                                            a waiver of any other term or
                                            condition, and any failure of
                                            Company to assert a right or
                                            provision under Terms shall not
                                            constitute a waiver of such right or
                                            provision.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            If any provision of Terms is held by
                                            a court or other tribunal of
                                            competent jurisdiction to be
                                            invalid, illegal or unenforceable
                                            for any reason, such provision shall
                                            be eliminated or limited to the
                                            minimum extent such that the
                                            remaining provisions of Terms will
                                            continue in full force and effect.
                                        </Typography>
                                    </div>

                                    <div id="acknowledgement">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                25.
                                            </span>{' '}
                                            Acknowledgement
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            BY USING SERVICE OR OTHER SERVICES
                                            PROVIDED BY US, YOU ACKNOWLEDGE THAT
                                            YOU HAVE READ THESE TERMS OF SERVICE
                                            AND AGREE TO BE BOUND BY THEM.
                                        </Typography>
                                    </div>

                                    <div id="contact">
                                        <Typography
                                            style={{
                                                color: '#F57E27',
                                                fontSize: 20,
                                                fontFamily: 'sans-serif, Arial',
                                                marginTop: 30,
                                            }}
                                        >
                                            <span style={{ color: '#333' }}>
                                                26.
                                            </span>{' '}
                                            Contact
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Please send your feedback, comments,
                                            requests for technical support: By
                                            email:{' '}
                                            <a
                                                href="mailto:contact@contentionary.com"
                                                style={{
                                                    textDecoration: 'none',
                                                    color: '#f57e27',
                                                }}
                                            >
                                                contact@contentionary.com
                                            </a>
                                            . By visiting this page on our
                                            website:{' '}
                                            <span>
                                                <a
                                                    href="https://contentionary.com/about"
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: '#f57e27',
                                                    }}
                                                >
                                                    https://contentionary.com/about
                                                </a>{' '}
                                            </span>
                                            By phone number:{' '}
                                            <a
                                                href="tel:2348037537762"
                                                style={{
                                                    textDecoration: 'none',
                                                    color: '#f57e27',
                                                }}
                                            >
                                                +2348037537762
                                            </a>{' '}
                                            .
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>

                    <div
                        // className={classes.thirdDiv}
                        style={{ backgroundColor: '#1A1B20', marginTop: 0 }}
                    >
                        <div
                            style={{
                                padding: '100px 10%',
                                textAlign: 'center',
                            }}
                        >
                            <div
                                // className={classes.contentText}
                                style={{ color: '#CDCDCD' }}
                            >
                                <Typography style={{ fontSize: 18 }}>
                                    Contentionary is an advanced online system
                                    that has been built to help you create and
                                    manage your digital contents. With
                                    Contentionary, your contents (online course
                                    videos, podcasts, exams, books and
                                    publications) will be available online
                                    without necessarily spending extra money to
                                    build your online applications, making it
                                    easy for you to share, sell and manage your
                                    intellectual resources.
                                </Typography>
                                <a
                                    href="https://contentionary.com/"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Button
                                        variant="contained"
                                        style={{
                                            backgroundColor: '#F57E27',
                                            textTransform: 'inherit',
                                            marginTop: 30,
                                            color: '#fff',
                                            padding: '10px 20px',
                                            textAlign: 'center',
                                            fontSize: 15,
                                        }}
                                    >
                                        Click here to get Started
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Index;
