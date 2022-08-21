import React from 'react';

import { Grid, Typography, Hidden, Button } from '@material-ui/core';
// import {} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
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
                title="Contentionary - Copyright Policy"
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
                                        width: '80%',
                                    }}
                                >
                                    Contentionary - Copyright Policy
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
                                        Contentionary - Copyright Policy
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
                                        Contentionary - Copyright Policy
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
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography
                                        style={{
                                            fontSize: 14,
                                            color: '#333333',
                                        }}
                                    >
                                        {' '}
                                        <i>
                                            This Cookie Policy was last updated
                                            on April 21, 2021
                                        </i>
                                    </Typography>
                                    <Hidden only="xs">
                                        <Typography
                                            style={{
                                                fontSize: 35,
                                                color: '#F57E27',
                                                marginTop: 50,
                                            }}
                                        >
                                            Intellectual Property Policy
                                        </Typography>
                                    </Hidden>
                                    <Hidden smUp>
                                        <Typography
                                            style={{
                                                fontSize: 25,
                                                color: '#F57E27',
                                                marginTop: 50,
                                            }}
                                        >
                                            Intellectual Property Policy
                                        </Typography>
                                    </Hidden>

                                    <Typography
                                        style={{
                                            marginTop: 20,
                                            color: '#333333',
                                            fontSize: 15,
                                        }}
                                    >
                                        Contentionary is a digital marketplace
                                        for contents which provides educators,
                                        content owners, corporate organizations
                                        and institutions with features that
                                        helps them digitize and monetize their
                                        contents. We respect the intellectual
                                        property rights of others and ask that
                                        you do the same. We have a process for
                                        submitting complaints regarding content
                                        posted by our members. Our policy and
                                        procedures are described below.
                                    </Typography>
                                    <Hidden only="xs">
                                        <Typography
                                            style={{
                                                fontSize: 35,
                                                color: '#F57E27',
                                                marginTop: 50,
                                            }}
                                        >
                                            Posting content on Contentionary
                                        </Typography>
                                    </Hidden>
                                    <Hidden smUp>
                                        <Typography
                                            style={{
                                                fontSize: 25,
                                                color: '#F57E27',
                                                marginTop: 50,
                                            }}
                                        >
                                            Posting content on Contentionary
                                        </Typography>
                                    </Hidden>

                                    <Typography
                                        style={{
                                            marginTop: 20,
                                            color: '#333333',
                                            fontSize: 15,
                                        }}
                                    >
                                        As a member, when you post contents
                                        (full-text, video, audio and exams) or
                                        supplementary materials on
                                        Contentionary, you do not transfer or
                                        assign copyright to us. Rather, you make
                                        the content available to the public
                                        through Contentionary. You retain the
                                        right to remove such content from
                                        Contentionary at any time, or to archive
                                        your content so it is available only to
                                        you and your co-author(s). You may also
                                        remove content from appearing on your
                                        profile page.
                                    </Typography>
                                    <Typography
                                        style={{
                                            marginTop: 20,
                                            color: '#333333',
                                            fontSize: 15,
                                        }}
                                    >
                                        Our platform enables the private
                                        archiving and public posting of various
                                        types of content. If you choose to
                                        privately archive or publicly post
                                        content, we encourage you to first
                                        confirm your rights before doing so.
                                        This applies to posting content to your
                                        own center as well as other places on
                                        the platform, such as in the interaction
                                        forum, or the CBT league. As we do not
                                        have any information about rights you
                                        may hold, or any license terms or other
                                        restrictions which might apply to such
                                        content, we necessarily rely on you to
                                        understand your rights and act
                                        accordingly. For this reason, we request
                                        that you fully investigate and confirm
                                        that you have sufficient rights to post
                                        particular content to Contentionary
                                        before you do so. As a general matter,
                                        if you are an author publish in a
                                        journal, you may be allowed to upload
                                        certain versions of your article, but
                                        not others, and privately share certain
                                        content with others. However, many
                                        journals restrict publication of final
                                        versions and impose limitations on
                                        private sharing. This also applies to
                                        all other contents that is accepted on
                                        Content.
                                    </Typography>
                                    <Typography
                                        style={{
                                            marginTop: 20,
                                            color: '#333333',
                                            fontSize: 15,
                                        }}
                                    >
                                        Your starting point for understanding
                                        your rights is the agreement(s) you have
                                        with your publisher or other rights
                                        owner. If you’re still unsure about what
                                        you’re allowed to share on
                                        Contentionary, we recommend that you get
                                        in touch directly with your publisher.
                                    </Typography>
                                    <Hidden only="xs">
                                        <Typography
                                            style={{
                                                fontSize: 35,
                                                color: '#F57E27',
                                                marginTop: 50,
                                            }}
                                        >
                                            Complaints regarding content posted
                                            on Contentionary
                                        </Typography>
                                    </Hidden>
                                    <Hidden smUp>
                                        <Typography
                                            style={{
                                                fontSize: 25,
                                                color: '#F57E27',
                                                marginTop: 50,
                                            }}
                                        >
                                            Complaints regarding content posted
                                            on Contentionary
                                        </Typography>
                                    </Hidden>

                                    <Typography
                                        style={{
                                            marginTop: 20,
                                            color: '#333333',
                                            fontSize: 15,
                                        }}
                                    >
                                        It is our policy to respond to notices
                                        of claimed copyright infringement
                                        submitted by rights owners in accordance
                                        with the notice and takedown procedures
                                        as guarded by the laws of Nigeria and
                                        found in section of the Digital
                                        Millennium Copyright. Our Designated
                                        Agent for receiving notices of claimed
                                        copyright and other intellectual
                                        property infringement is:
                                    </Typography>
                                    <Typography
                                        style={{
                                            marginTop: 20,
                                            color: '#333333',
                                            fontSize: 15,
                                        }}
                                    >
                                        Copyright Agent <br />
                                        Contentionary
                                        <br />
                                        38, Opebi road, Ikeja,
                                        <br />
                                        Lagos, Nigeria
                                        <br />
                                        Email: contact@contentionary.com
                                        <br />
                                        Telephone: +2348037537762
                                    </Typography>
                                    <Typography
                                        style={{
                                            marginTop: 20,
                                            color: '#333333',
                                            fontSize: 15,
                                        }}
                                    >
                                        Please be aware that, regardless of
                                        whether we disable access to or remove
                                        the content complained about, we may
                                        forward your written notification,
                                        including your contact information, to
                                        the member who posted the content,
                                        and/or take other reasonable steps to
                                        notify the member that we have received
                                        notice of an alleged violation of
                                        copyright or intellectual property
                                        rights.
                                    </Typography>
                                    <Typography
                                        style={{
                                            marginTop: 20,
                                            color: '#333333',
                                            fontSize: 15,
                                        }}
                                    >
                                        Please also remember that, if you choose
                                        to request removal of content by
                                        submitting an infringement notification,
                                        you are initiating a legal process. Any
                                        notice or counter-notice you submit must
                                        be truthful and must be submitted under
                                        penalty of perjury. A false notice or
                                        counter-notice may give rise to personal
                                        liability. You may therefore wish to
                                        seek the advice of legal counsel before
                                        submitting a notice or counter-notice.
                                    </Typography>
                                    <Hidden only="xs">
                                        <Typography
                                            style={{
                                                fontSize: 35,
                                                color: '#F57E27',
                                                marginTop: 50,
                                            }}
                                        >
                                            Copyright and other intellectual
                                            property infringement notification
                                            requirements
                                        </Typography>
                                    </Hidden>
                                    <Hidden smUp>
                                        <Typography
                                            style={{
                                                fontSize: 25,
                                                color: '#F57E27',
                                                marginTop: 50,
                                            }}
                                        >
                                            Copyright and other intellectual
                                            property infringement notification
                                            requirements
                                        </Typography>
                                    </Hidden>

                                    <Typography
                                        style={{
                                            marginTop: 20,
                                            color: '#333333',
                                            fontSize: 15,
                                        }}
                                    >
                                        Please note that if you are not a
                                        copyright owner or authorized to act on
                                        behalf of a copyright owner, we must ask
                                        that you contact the copyright owner and
                                        ask them to submit a notice of claimed
                                        infringement. If you are a copyright
                                        owner, Nigeria, US, and other laws
                                        require that your notice of claimed
                                        infringement follow a specific form. The
                                        easiest way to do this is to complete a
                                        NOCI form and send it to
                                        copyright@contentionary.com, so long as
                                        it contains all the required
                                        information, including:
                                    </Typography>
                                    <ol type="a" style={{ marginLeft: '5%' }}>
                                        <li
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            The name, address, telephone number,
                                            and e-mail address of the
                                            complaining party.
                                        </li>
                                        <li
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            A description of the copyrighted
                                            work(s) or other intellectual
                                            property claimed to have been
                                            infringed and the country of claimed
                                            rights.
                                        </li>
                                        <li
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            A description of where the allegedly
                                            infringing material is located on
                                            Contentionary, with information
                                            sufficient to permit us to locate
                                            the content. In order for us to be
                                            able to accurately identify and
                                            remove content notified to be
                                            infringing, it is necessary to
                                            provide the specific URL for the
                                            actual file and not the URL of the
                                            publication page where the file is
                                            displayed, as the content displayed
                                            on a publication page can change.
                                            You can identify the URL of a
                                            particular content by using the
                                            search bar or going to the center
                                            then searching for the content,
                                            selecting "content sources," right
                                            clicking on the respective download
                                            button of the file and copying the
                                            link address.
                                        </li>
                                        <li
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            A statement that the complaining
                                            party “has a good faith belief that
                                            the use of the material in the
                                            manner complained of is not
                                            authorized by the copyright owner,
                                            its agent, or the law.”
                                        </li>
                                        <li
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            A statement that “the information in
                                            this notification is accurate, and
                                            under penalty of perjury, the
                                            complaining party is authorized to
                                            act on behalf of the owner of an
                                            exclusive right that is allegedly
                                            infringed.”
                                        </li>
                                        <li
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            An electronic or physical signature
                                            of the person authorized to act on
                                            behalf of the owner of the copyright
                                            or other right that is allegedly
                                            infringed.
                                        </li>
                                    </ol>
                                    <Typography
                                        style={{
                                            marginTop: 20,
                                            color: '#333333',
                                            fontSize: 15,
                                        }}
                                    >
                                        Note: If you are asserting infringement
                                        of an intellectual property right other
                                        than copyright, please specify the
                                        intellectual property right at issue
                                        (for example, "trademark").
                                    </Typography>
                                    <Typography
                                        style={{
                                            marginTop: 20,
                                            color: '#333333',
                                            fontSize: 15,
                                        }}
                                    >
                                        Upon receiving notice of a claimed
                                        infringement that complies with the
                                        above requirements, we will
                                        expeditiously remove or disable access
                                        to the allegedly infringing material and
                                        will notify the member who posted it. At
                                        that time, we will also provide the
                                        member with an email address which may
                                        be used to contact the complaining party
                                        with any questions, or if they think a
                                        mistake has been made.
                                    </Typography>
                                    <Hidden only="xs">
                                        <Typography
                                            style={{
                                                fontSize: 35,
                                                color: '#F57E27',
                                                marginTop: 50,
                                            }}
                                        >
                                            Repeat infringer policy
                                        </Typography>
                                    </Hidden>
                                    <Hidden smUp>
                                        <Typography
                                            style={{
                                                fontSize: 25,
                                                color: '#F57E27',
                                                marginTop: 50,
                                            }}
                                        >
                                            Repeat infringer policy
                                        </Typography>
                                    </Hidden>

                                    <Typography
                                        style={{
                                            marginTop: 20,
                                            color: '#333333',
                                            fontSize: 15,
                                        }}
                                    >
                                        In accordance with applicable law, we
                                        have a repeat infringer policy that
                                        provides for the disabling of a member's
                                        uploading rights or termination of their
                                        membership in appropriate circumstances.
                                    </Typography>
                                    <Hidden only="xs">
                                        <Typography
                                            style={{
                                                fontSize: 35,
                                                color: '#F57E27',
                                                marginTop: 50,
                                            }}
                                        >
                                            Counter notice requirements
                                        </Typography>
                                    </Hidden>
                                    <Hidden smUp>
                                        <Typography
                                            style={{
                                                fontSize: 25,
                                                color: '#F57E27',
                                                marginTop: 50,
                                            }}
                                        >
                                            Counter notice requirements
                                        </Typography>
                                    </Hidden>

                                    <Typography
                                        style={{
                                            marginTop: 20,
                                            color: '#333333',
                                            fontSize: 15,
                                        }}
                                    >
                                        Contentionary recognizes that sometimes
                                        content may be mistakenly identified by
                                        a rights owner as infringing their
                                        rights. In the event such a mistake
                                        occurs, you should first contact the
                                        complaining party directly using the
                                        email address provided to you.
                                        Contentionary will allow you to
                                        re-upload the content upon receipt of an
                                        acknowledgement of the error from the
                                        complaining party.
                                    </Typography>
                                    <Typography
                                        style={{
                                            marginTop: 20,
                                            color: '#333333',
                                            fontSize: 15,
                                        }}
                                    >
                                        If the complaining party does not agree
                                        that their request for removal was in
                                        error, you may submit a counter notice
                                        us, you can submit a written
                                        communication to Contentionary’s
                                        Designated Agent (contact details
                                        above). To be effective, your counter
                                        notice must include substantially the
                                        following:
                                    </Typography>
                                    <ul style={{ marginLeft: '5%' }}>
                                        <li
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Your name, address and telephone
                                            number.
                                        </li>
                                        <li
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Identification of the material that
                                            has been removed or to which access
                                            has been disabled and the location
                                            (URL) at which the material appeared
                                            before it was removed or access to
                                            it was disabled.
                                        </li>
                                        <li
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            A statement under penalty of perjury
                                            that you have a good faith belief
                                            that the material was removed or
                                            disabled as a result of mistake or
                                            misidentification of the material to
                                            be removed or disabled.
                                        </li>
                                        <li
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            A statement that you consent to the
                                            jurisdiction of Federal District
                                            Court for the judicial district in
                                            which your address is located, or if
                                            your address is outside the United
                                            States, for any judicial district in
                                            which Contentionary may be found,
                                            and that you will accept service of
                                            process from the party who submitted
                                            the notification of claimed
                                            infringement or an agent of that
                                            party.
                                        </li>
                                        <li
                                            style={{
                                                marginTop: 20,
                                                color: '#333',
                                                fontFamily: 'sans-serif, Arial',
                                            }}
                                        >
                                            Your physical or electronic
                                            signature.
                                        </li>
                                    </ul>
                                    <Typography
                                        style={{
                                            marginTop: 20,
                                            color: '#333333',
                                            fontSize: 15,
                                        }}
                                    >
                                        We will not be able to consider your
                                        counter notice unless you fill out the
                                        form in its entirety, and physically
                                        sign it. Please make sure that the
                                        counter notice you send to Contentionary
                                        is legible; if we cannot read your
                                        handwriting, we will not be able to
                                        process it.
                                    </Typography>
                                    <Typography
                                        style={{
                                            marginTop: 20,
                                            color: '#333333',
                                            fontSize: 15,
                                        }}
                                    >
                                        Upon receiving the original of your
                                        fully completed counter notice,
                                        Contentionary will provide the
                                        complaining party with a copy of your
                                        notice. We will also inform them that we
                                        will allow you to replace the removed
                                        material after 10 business days, unless
                                        Contentionary’s Designated Agent
                                        receives notice from the complaining
                                        party that it has filed an action
                                        seeking a court order to restrain you
                                        from engaging in infringing activity
                                        relating to the material on
                                        Contentionary. If the complaining party
                                        notifies us in writing that they no
                                        longer object to the material being made
                                        available, we will allow you to repost
                                        it.
                                    </Typography>
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
