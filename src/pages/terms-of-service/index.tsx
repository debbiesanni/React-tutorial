import { Grid, Typography, Hidden, Button } from '@material-ui/core';
import Wrapper from '../../components/wrapper';

const Pixel = require('../../images/resourcebg.png');

export default function TermsOfService() {

    return (
        <div>
            <Wrapper
                showFooter={true}
                showLogOutHeader={true}
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
                                    Contentionary - Terms of Service
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
                                        Contentionary - Terms of Service
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
                                        Contentionary - Terms of Service
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
                                            Terms
                                        </p>
                                    </a>
                                    <a
                                        href="#communications"
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
                                            Communications
                                        </p>
                                    </a>
                                    <a
                                        href="#purchases"
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
                                            Purchases
                                        </p>
                                    </a>
                                    <a
                                        href="#contests-sweepstakes-promotions"
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
                                            Contests, Sweepstakes and Promotions
                                        </p>
                                    </a>
                                    <a
                                        href="#subscriptions"
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
                                            Subscriptions
                                        </p>
                                    </a>
                                    <a
                                        href="#free-trial"
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
                                            Free Trial
                                        </p>
                                    </a>
                                    <a
                                        href="#fee-changes"
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
                                            Fee Changes
                                        </p>
                                    </a>
                                    <a
                                        href="#refunds"
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
                                            Refunds
                                        </p>
                                    </a>
                                    <a
                                        href="#content"
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
                                            Content
                                        </p>
                                    </a>
                                    <a
                                        href="#prohibited-uses"
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
                                            Prohibited Uses
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
                                        href="#users-from-other-jurisdictions"
                                        className="drop"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <p
                                            className="users-from-other-jurisdictions"
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
                                            Users from Other Jurisdictions
                                        </p>
                                    </a>
                                    <a
                                        href="#accounts"
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
                                            Accounts
                                        </p>
                                    </a>
                                    <a
                                        href="#intellectual-property"
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
                                            Intellectual Property
                                        </p>
                                    </a>
                                    <a
                                        href="#copyright-policy"
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
                                            Copyright Policy
                                        </p>
                                    </a>
                                    <a
                                        href="#dmca-notice"
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
                                            DMCA Notice and Procedure for
                                            Copyright Infringement Claims
                                        </p>
                                    </a>
                                    <a
                                        href="#error-reporting-and-feedback"
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
                                            Error Reporting and Feedback
                                        </p>
                                    </a>
                                    <a
                                        href="#links-to-other-web-sites"
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
                                            Links To Other Web Sites
                                        </p>
                                    </a>
                                    <a
                                        href="#disclaimer-of-warranty"
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
                                            Disclaimer Of Warranty
                                        </p>
                                    </a>
                                    <a
                                        href="#limitation-of-liability"
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
                                            Limitation Of Liability
                                        </p>
                                    </a>
                                    <a
                                        href="#termination"
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
                                            Termination
                                        </p>
                                    </a>
                                    <a
                                        href="#governing-law"
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
                                            Governing Law
                                        </p>
                                    </a>
                                    <a
                                        href="#changes-to-service"
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
                                            Changes To Service
                                        </p>
                                    </a>
                                    <a
                                        href="#amendments-to-terms"
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
                                            Amendments To Terms
                                        </p>
                                    </a>
                                    <a
                                        href="#waiver-and-severability"
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
                                            Waiver And Severability
                                        </p>
                                    </a>
                                    <a
                                        href="#acknowledgement"
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
                                            Acknowledgement
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
                                                Terms of Service
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
                                                Terms of Service
                                            </Typography>
                                        </Hidden>
                                        <Typography style={{ fontSize: 14 }}>
                                            {' '}
                                            <i>
                                                This Term of Service was last
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
                                            <b>“our”</b>, <b>“us”</b>)! As you
                                            have just clicked our Terms of
                                            Service, please pause, grab a cup of
                                            coffee and carefully read the
                                            following pages. It will take you
                                            approximately 20 minutes.{' '}
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            These Terms of Service (
                                            <b>“Terms”</b>,{' '}
                                            <b>“Terms of Service”</b>) govern
                                            your use of our web pages located at{' '}
                                            <span>
                                                <a
                                                    href="https://contentionary.com"
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: '#f57e27',
                                                    }}
                                                >
                                                    https://contentionary.com
                                                </a>{' '}
                                            </span>
                                            and our mobile application
                                            Contentionary (together or
                                            individually <b>“Service”</b>)
                                            operated by Contentionary.{' '}
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Our Privacy Policy also governs your
                                            use of our Service and explains how
                                            we collect, safeguard and disclose
                                            information that results from your
                                            use of our web pages. Please read it
                                            here{' '}
                                            <span>
                                                <a
                                                    href="https://privacy.contentionary.com/"
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: '#f57e27',
                                                    }}
                                                >
                                                    https://privacy.contentionary.com
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
                                            Your agreement with us includes
                                            these Terms and our Privacy Policy (
                                            <b>“Agreements”</b>). You
                                            acknowledge that you have read and
                                            understood Agreements, and agree to
                                            be bound of them.{' '}
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            If you do not agree with (or cannot
                                            comply with) Agreements, then you
                                            may not use the Service, but please
                                            let us know by emailing at
                                            contact@contentionary.com so we can
                                            try to find a solution. These Terms
                                            apply to all visitors, users and
                                            others who wish to access or use
                                            Service.{' '}
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Thank you for being responsible.{' '}
                                        </Typography>
                                    </div>

                                    <div
                                        style={{ background: 'white' }}
                                        id="communications"
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
                                            Communications
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            By creating an Account on our
                                            Service, you agree to subscribe to
                                            newsletters, marketing or
                                            promotional materials and other
                                            information we may send. However,
                                            you may opt out of receiving any, or
                                            all, of these communications from us
                                            by following the unsubscribe link or
                                            by emailing at.
                                        </Typography>
                                    </div>

                                    <div id="purchases">
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
                                            Purchases
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            If you wish to purchase any product
                                            or service made available through
                                            Service (<b>“Purchase”</b>), you may
                                            be asked to supply certain
                                            information relevant to your
                                            Purchase including, without
                                            limitation, your credit card number,
                                            the expiration date of your credit
                                            card, your billing address, and your
                                            shipping information.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            You represent and warrant that: (i)
                                            you have the legal right to use any
                                            credit card(s) or other payment
                                            method(s) in connection with any
                                            Purchase; and that (ii) the
                                            information you supply to us is
                                            true, correct and complete.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            We may employ the use of third-party
                                            services for the purpose of
                                            facilitating payment and the
                                            completion of Purchases. By
                                            submitting your information, you
                                            grant us the right to provide the
                                            information to these third parties
                                            subject to our Privacy Policy.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            We reserve the right to refuse or
                                            cancel your order at any time for
                                            reasons including but not limited
                                            to: product or service availability,
                                            errors in the description or price
                                            of the product or service, error in
                                            your order or other reasons.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            We reserve the right to refuse or
                                            cancel your order if fraud or an
                                            unauthorized or illegal transaction
                                            is suspected.
                                        </Typography>
                                    </div>

                                    <div
                                        style={{ background: 'white' }}
                                        id="contests-sweepstakes-promotions"
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
                                            Contests, Sweepstakes and Promotions
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Any contests, sweepstakes or other
                                            promotions (collectively,{' '}
                                            <b>“Promotions”</b>) made available
                                            through Service may be governed by
                                            rules that are separate from these
                                            Terms of Service. If you participate
                                            in any Promotions, please review the
                                            applicable rules as well as our
                                            Privacy Policy. If the rules for a
                                            Promotion conflict with these Terms
                                            of Service, Promotion rules will
                                            apply.
                                        </Typography>
                                    </div>

                                    <div id="subscriptions">
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
                                            Subscriptions
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Some parts of Service are billed on
                                            a subscription basis (
                                            <b>“Subscription(s)”</b>). You will
                                            be billed in advance on a recurring
                                            and periodic basis (
                                            <b>“Billing Cycle”</b>). Billing
                                            cycles are set either on a monthly
                                            or annual basis, depending on the
                                            type of subscription plan you select
                                            when purchasing a Subscription.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            At the end of each Billing Cycle,
                                            your Subscription will automatically
                                            renew under the exact same
                                            conditions unless you cancel it or
                                            Contentionary cancels it. You may
                                            cancel your Subscription renewal
                                            either through your online account
                                            management page or by contacting
                                            Contentionary customer support team.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            A valid payment method, including
                                            credit card, is required to process
                                            the payment for your subscription.
                                            You shall provide Contentionary with
                                            accurate and complete billing
                                            information including full name,
                                            address, state, zip code, telephone
                                            number, and a valid payment method
                                            information. By submitting such
                                            payment information, you
                                            automatically authorize
                                            Contentionary to charge all
                                            Subscription fees incurred through
                                            your account to any such payment
                                            instruments.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Should automatic billing fail to
                                            occur for any reason, Contentionary
                                            will issue an electronic invoice
                                            indicating that you must proceed
                                            manually, within a certain deadline
                                            date, with the full payment
                                            corresponding to the billing period
                                            as indicated on the invoice.
                                        </Typography>
                                    </div>

                                    <div id="free-trial">
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
                                            Free Trials
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Contentionary may, at its sole
                                            discretion, offer a Subscription
                                            with a free trial for a limited
                                            period of time (<b>“Free Trial”</b>
                                            ).
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            You may be required to enter your
                                            billing information in order to sign
                                            up for Free Trial
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            If you do enter your billing
                                            information when signing up for Free
                                            Trial, you will not be charged by
                                            Contentionary until Free Trial has
                                            expired. On the last day of Free
                                            Trial period, unless you cancelled
                                            your Subscription, you will be
                                            automatically charged the applicable
                                            Subscription fees for the type of
                                            Subscription you have selected.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            At any time and without notice,
                                            Contentionary reserves the right to
                                            (i) modify Terms of Service of Free
                                            Trial offer, or (ii) cancel such
                                            Free Trial offer.
                                        </Typography>
                                    </div>

                                    <div id="fee-changes">
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
                                            Fee Changes
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Contentionary, in its sole
                                            discretion and at any time, may
                                            modify Subscription fees for the
                                            Subscriptions. Any Subscription fee
                                            change will become effective at the
                                            end of the then-current Billing
                                            Cycle.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Contentionary will provide you with
                                            a reasonable prior notice of any
                                            change in Subscription fees to give
                                            you an opportunity to terminate your
                                            Subscription before such change
                                            becomes effective.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Your continued use of Service after
                                            Subscription fee change comes into
                                            effect constitutes your agreement to
                                            pay the modified Subscription fee
                                            amount.
                                        </Typography>
                                    </div>

                                    <div
                                        style={{ background: 'white' }}
                                        id="refunds"
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
                                            Refunds
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Except when required by law, paid
                                            Subscription fees are
                                            non-refundable.
                                        </Typography>
                                    </div>

                                    <div id="content">
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
                                            Content
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Our Service allows you to post,
                                            link, store, share and otherwise
                                            make available certain information,
                                            text, graphics, videos, or other
                                            material (<b>“Content”</b>). You are
                                            responsible for Content that you
                                            post on or through Service,
                                            including its legality, reliability,
                                            and appropriateness.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            By posting Content on or through
                                            Service, You represent and warrant
                                            that: (i) Content is yours (you own
                                            it) and/or you have the right to use
                                            it and the right to grant us the
                                            rights and license as provided in
                                            these Terms, and (ii) that the
                                            posting of your Content on or
                                            through Service does not violate the
                                            privacy rights, publicity rights,
                                            copyrights, contract rights or any
                                            other rights of any person or
                                            entity. We reserve the right to
                                            terminate the account of anyone
                                            found to be infringing on a
                                            copyright.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            You retain any and all of your
                                            rights to any Content you submit,
                                            post or display on or through
                                            Service and you are responsible for
                                            protecting those rights. We take no
                                            responsibility and assume no
                                            liability for Content you or any
                                            third-party posts on or through
                                            Service. However, by posting Content
                                            using Service you grant us the right
                                            and license to use, modify, publicly
                                            perform, publicly display,
                                            reproduce, and distribute such
                                            Content on and through Service. You
                                            agree that this license includes the
                                            right for us to make your Content
                                            available to other users of Service,
                                            who may also use your Content
                                            subject to these Terms.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Contentionary has the right but not
                                            the obligation to monitor and edit
                                            all Content provided by users.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            In addition, Content found on or
                                            through this Service are the
                                            property of Contentionary or used
                                            with permission. You may not
                                            distribute, modify, transmit, reuse,
                                            download, repost, copy, or use said
                                            Content, whether in whole or in
                                            part, for commercial purposes or for
                                            personal gain, without express
                                            advance written permission from us.
                                        </Typography>
                                    </div>

                                    <div id="prohibited-uses">
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
                                            Prohibited Uses
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            You may use Service only for lawful
                                            purposes and in accordance with
                                            Terms. You agree not to use Service:
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
                                                In any way that violates any
                                                applicable national or
                                                international law or regulation.
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
                                                For the purpose of exploiting,
                                                harming, or attempting to
                                                exploit or harm minors in any
                                                way by exposing them to
                                                inappropriate content or
                                                otherwise.
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
                                                To transmit, or procure the
                                                sending of, any advertising or
                                                promotional material, including
                                                any “junk mail”, “chain letter,”
                                                “spam,” or any other similar
                                                solicitation.
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
                                                To impersonate or attempt to
                                                impersonate Company, a Company
                                                employee, another user, or any
                                                other person or entity
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
                                                In any way that infringes upon
                                                the rights of others, or in any
                                                way is illegal, threatening,
                                                fraudulent, or harmful, or in
                                                connection with any unlawful,
                                                illegal, fraudulent, or harmful
                                                purpose or activity.
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
                                                To engage in any other conduct
                                                that restricts or inhibits
                                                anyone’s use or enjoyment of
                                                Service, or which, as determined
                                                by us, may harm or offend
                                                Company or users of Service or
                                                expose them to liability.
                                            </li>
                                        </ol>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Additionally, you agree not to:
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
                                                Use Service in any manner that
                                                could disable, overburden,
                                                damage, or impair Service or
                                                interfere with any other party’s
                                                use of Service, including their
                                                ability to engage in real time
                                                activities through Service.
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
                                                Use any robot, spider, or other
                                                automatic device, process, or
                                                means to access Service for any
                                                purpose, including monitoring or
                                                copying any of the material on
                                                Service.
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
                                                Use any manual process to
                                                monitor or copy any of the
                                                material on Service or for any
                                                other unauthorized purpose
                                                without our prior written
                                                consent.
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
                                                Use any device, software, or
                                                routine that interferes with the
                                                proper working of Service.
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
                                                Introduce any viruses, trojan
                                                horses, worms, logic bombs, or
                                                other material which is
                                                malicious or technologically
                                                harmful.
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
                                                Attempt to gain unauthorized
                                                access to, interfere with,
                                                damage, or disrupt any parts of
                                                Service, the server on which
                                                Service is stored, or any
                                                server, computer, or database
                                                connected to Service.
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
                                                Attack Service via a
                                                denial-of-service attack or a
                                                distributed denial-of-service
                                                attack.
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
                                                Take any action that may damage
                                                or falsify Company rating.
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
                                                Otherwise attempt to interfere
                                                with the proper working of
                                                Service.
                                            </li>
                                        </ol>
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
                                                <b>Cloudflare Analytics</b>
                                            </span>{' '}
                                            <br />
                                            Cloudflare analytics is a web
                                            analytics service operated by
                                            Cloudflare Inc. Read the{' '}
                                            <span>
                                                <a
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
                                            .
                                        </Typography>
                                    </div>

                                    <div id="users-from-other-jurisdictions">
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
                                            Users from Other Jurisdictions
                                        </Typography>

                                        <ol
                                            start={1}
                                            style={{ marginLeft: '5%' }}
                                        >
                                            <li>
                                                <ol>
                                                    <li
                                                        style={{
                                                            marginTop: 20,
                                                            color: '#333',
                                                            fontFamily:
                                                                'sans-serif, Arial',
                                                        }}
                                                    >
                                                        {' '}
                                                        The Service is
                                                        controlled and operated
                                                        by us from Nigeria. If
                                                        you are not a resident
                                                        of Nigeria or you are
                                                        located outside Nigeria,
                                                        you are not authorized
                                                        to use the Service. If
                                                        you choose to use the
                                                        Service or provide
                                                        information to us,
                                                        please note that we may
                                                        transfer the
                                                        information, including
                                                        personal information,
                                                        outside of Nigeria and
                                                        process it there.
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
                                                        We do not represent or
                                                        warrant that the
                                                        Service, or any portion
                                                        thereof, are appropriate
                                                        or available for use in
                                                        any particular
                                                        jurisdiction.
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
                                                        Those who choose to
                                                        access the Service do so
                                                        on their own initiative
                                                        and at their own risk,
                                                        and are responsible for
                                                        complying with all local
                                                        laws, rules and
                                                        regulations, and are
                                                        subject to Nigeria
                                                        export controls in
                                                        connection with your use
                                                        of the Service and are
                                                        responsible for any
                                                        violations of such
                                                        controls, including,
                                                        without limitation, any
                                                        Nigeria embargoes or
                                                        other federal rules and
                                                        regulations restricting
                                                        exports.
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
                                                        We may limit the
                                                        availability of the
                                                        Service, in whole or in
                                                        part, to any person,
                                                        geographic area or
                                                        jurisdiction that we
                                                        choose, at any time and
                                                        in our sole discretion.
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
                                                        Personal information
                                                        that you publish on the
                                                        Service or submit for
                                                        publication on our
                                                        Website may be
                                                        available, via the
                                                        Internet, around the
                                                        world. We cannot prevent
                                                        the use or misuse of
                                                        such information by
                                                        others.
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
                                                        You expressly agree to
                                                        the transfers of
                                                        personal information
                                                        described in this
                                                        Section.
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </div>

                                    <div id="accounts">
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
                                            Accounts
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            When you create an account with us,
                                            you guarantee that you are above the
                                            age of 13, and that the information
                                            you provide us is accurate,
                                            complete, and current at all times.
                                            Inaccurate, incomplete, or obsolete
                                            information may result in the
                                            immediate termination of your
                                            account on Service.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            You are responsible for maintaining
                                            the confidentiality of your account
                                            and password, including but not
                                            limited to the restriction of access
                                            to your computer and/or account. You
                                            agree to accept responsibility for
                                            any and all activities or actions
                                            that occur under your account and/or
                                            password, whether your password is
                                            with our Service or a third-party
                                            service. You must notify us
                                            immediately upon becoming aware of
                                            any breach of security or
                                            unauthorized use of your account.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            You may not use as a username the
                                            name of another person or entity or
                                            that is not lawfully available for
                                            use, a name or trademark that is
                                            subject to any rights of another
                                            person or entity other than you,
                                            without appropriate authorization.
                                            You may not use as a username any
                                            name that is offensive, vulgar or
                                            obscene.
                                        </Typography>

                                        <Typography
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            We reserve the right to refuse
                                            service, terminate accounts, remove
                                            or edit content, or cancel orders in
                                            our sole discretion.
                                        </Typography>
                                    </div>

                                    <div
                                        style={{ background: 'white' }}
                                        id="intellectual-property"
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
                                        id="copyright-policy"
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

                                    <div id="dmca-notice">
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

                                    <div id="error-reporting-and-feedback">
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
