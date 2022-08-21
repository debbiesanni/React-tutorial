import logo from '../img/logo.svg';
import facebook from '../img/facebook.svg';
import twitter from '../img/twitter.svg';
import pinterest from '../img/pinterest.svg';
import useStyle from './style';
import Link from '../shared/link';
import { Fragment } from 'react';
import useGlobalStyle from '../../styles';
import Image from '../shared/image';
import { HideSmDown } from '@components/hide';

export default function Footer() {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const aboutLinks = [
        { name: 'About Us', link: '/about' },
        // { name: 'Contact Us', link: '/' },
        { name: 'Features', link: '/features' },
        { name: 'Pricing', link: '/pricing' },
        { name: 'Privacy Policy', link: '/privacy-policy' },
        { name: 'Intellectual Property', link: '/intellectual-property' },
        { name: 'Terms of use', link: '/terms-of-service' },
        // { name: 'Resources', link: 'https://resources.contentionary.com' },
        // { name: 'Pages', link: 'https://pages.contentionary.com' },
        // { name: 'Events', link: '/' },
        // { name: 'FAQ', link: '/' },
    ];
    const otherLinks = [
        { name: 'Signup', link: '/create-account' },
        { name: 'Own a center', link: '/login' },
        // { name: 'Make money', link: '/' },
        // { name: 'Api', link: '/' },
        // { name: 'Become a center managerr', link: '/' },
        // { name: 'Submit content for premium', link: '/' },
    ];

    const premiumLinks = [
        { name: 'Students', link: '/' },
        { name: 'Workforce', link: '/' },
        { name: 'Educator/examiner', link: '/' },
        { name: 'Hirer/human resource', link: '/' },
        { name: 'Get your center’s API', link: '/' },
    ];
    const browseCttn = [
        { name: 'Marketplace', link: '/market-place' },
        { name: 'Centers', link: '/public-centres' },
        { name: 'Exams', link: '/public-exams' },
        { name: 'Courses', link: '/public-online-courses-page' },
        //  { name: 'Podcast', link: '/' },
        { name: 'Publication', link: '/public-publications-page' },
        { name: 'Leagues/competitions', link: '/public-leagues' },
    ];

    const links = [
        { header: 'Company', links: aboutLinks },
        { header: 'General', links: otherLinks },
        // { header: 'Premium Advantage', links: premiumLinks },
        { header: 'Browse Contentionary', links: browseCttn },
    ];
    return (
        <>
            <div className={`${style.footerContainer}`}>
                <div className={globalStyle.contentWidth}>
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${style.padding2rem} ${globalStyle.flexWrp}`}
                    >
                        <HideSmDown>
                            <div
                                className={globalStyle.colorWhite}
                                style={{ width: 350, fontSize: 12 }}
                            >
                                <div className={style.image}>
                                    <Image
                                        src={logo}
                                        alt="contentionary logo"
                                        width="200px"
                                        height="100%"
                                    />
                                </div> 
                                <p className={`${globalStyle.bottom1rem} ${style.aboutMessage}`}>
                                    Contentionary is the foremost preparatory and testing software built for instructors and examiners to screen, prepare and equip their subscribers.
                                </p>
                                <p className={` ${style.aboutMessage}`} style={{paddingTop: 20}}>
                                    <strong>Call:</strong> Nigeria: +234 902 239 6389, UK: +44 7754 601138
                                </p>
                                <p className={` ${style.aboutMessage}`} style={{paddingTop: 20}}>
                                    <strong>Head Office: </strong>38 Opebi Road, Ikeja, Lagos State, Nigeria.
                                </p>
                                <p className={` ${style.aboutMessage}`}>
                                    <strong>United Kingdom Office: </strong>Longside Lane, Longside House, Bradford, United Kingdom.
                                </p>
                                <p className={`${globalStyle.bottom1rem} ${style.aboutMessage}`} style={{padding: 0, margin: 0}}>
                                    contact@contentionary.com
                                </p>
                            </div>
                        </HideSmDown>

                        {links.map((e, index) => (
                            <div
                                key={index}
                                className={`${globalStyle.displayFlex} ${globalStyle.flexColumn} ${style.footerLinks}`}
                            >
                                <strong className={`${globalStyle.primaryColor} ${style.footerHeader}`}>
                                    {e.header}
                                </strong>
                                {e.links.map((e, index) => (
                                    <Fragment key={index}>
                                        <Link
                                            text={e.name}
                                            link={e.link}
                                            className={`${style.font11} ${globalStyle.colorWhite} ${style.link}`}
                                        />
                                    </Fragment>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div
                        className={`${style.secondFooter} ${globalStyle.flexWrp} ${globalStyle.mt2rem} ${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
                    >
                        <div>
                            Copyright © Contentionary 2021. All rights reserved
                        </div>

                        <div className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}>
                            <Link link="https://linkedin.com/in/contentionary/">
                                <Image
                                    src={pinterest}
                                    alt="linkedin"
                                    className={`${globalStyle.cursor} ${globalStyle.mr1rem}`}
                                    height="auto"
                                    width="60%"
                                />
                            </Link>
                            <Link link="https://web.facebook.com/Contentionary/">
                                <Image
                                    src={facebook}
                                    alt="facebook"
                                    className={`${globalStyle.cursor} ${globalStyle.mr1rem}`}
                                    height="auto"
                                    width="60%"
                                />
                            </Link>
                            <Link link="https://twitter.com/Contentionary/">
                                <Image
                                    src={twitter}
                                    alt="twitter"
                                    className={`${globalStyle.cursor}`}
                                    height="60%"
                                    width="auto"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
