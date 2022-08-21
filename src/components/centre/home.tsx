import useGlobalStyle from '../../styles';
import useStyle from './style';
import Reviews from '../review';
import Button from '../button';
import Subscribe from '../shared/subscribe';
import UnSubscribe from '../shared/subscribe/unSubscribe';
import Link from '../shared/link';
import {useRouter} from 'next/router';
import { Auth } from '../../utils';
import Update from './update';
import Delete from '../shared/delete';
import {useState, useEffect} from 'react';
import LinksWithIcon from '../shared/linkWithIcons';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import FileCopyIcon from '@material-ui/icons/InsertDriveFile';
import ImageLink from '../sideNav/imageLink';
import {HideSmDown, HideMdUp} from '../hide';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import ImageUpload from '../shared/imageUpdate/singleCentreImage';
import ContactPhone from '@material-ui/icons/ContactPhone';
import Language from '@material-ui/icons/Language';
import Email from '@material-ui/icons/Email';
import ShareButton from '../shared/share';
import ReadMore from 'read-more-react';
import Toast from '../shared/toast';

export default function CentreHome({
    centre,
    user,
}) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const router = useRouter();
    const [message, setMessage] = useState('');
    const [url, setUrl] = useState<string>();
    const { closeDialog, openDialog, isOpen } = useDialog();

    useEffect(() => {
        setUrl(window.location.href)
    },[]);
    
    let subscribeButton = (
        <Subscribe
            text="Subscribe to this centre"
            url={`/centre/${centre.id}/join-request${router.query?.referralCode ? `?referralCode=${router.query.referralCode}` : ''}`}
            id={centre.id}
            isPrivate={centre.isPrivate}
            user={user}
            textTransform
            className={style.subscribedButton}
        /> 
    ); 

    if (Auth(user).isManager(centre.id))
        subscribeButton = (
            <Link
                text={
                    <Button
                        onClick={() => {}}
                        className={style.subscribedButton}
                        style={{textTransform: 'none'}}
                    >
                        Subscribers
                    </Button>
                }
                link={`/centre/${centre.id}/subscribers?centreSlug=${centre.slug}`}
            />
        ); 

    else if (Auth(user).isCentreSubscriber(centre.id))
        subscribeButton = (
            <UnSubscribe
                text={
                    Auth(user).isCentreSubscriber(centre.id) ? 'subscribed' : 'Pending'
                }
                url={`/centre/${centre.id}/unsubscribe`}
                id={centre.id}
                user={user}
                className={style.subscribedButton} 
            />
        );
    else if (Auth(user).isPendingSubscriber(centre.id))
        subscribeButton = (
            <Button
                style={{textTransform: 'none'}}
                className={style.subscribedButton} 
                onClick={() =>
                    setMessage("Sorry Your Request hasn't been accepted")
                }
            >
                Pending
            </Button>
        );

    const imageFooterList = [
        {
            title: 'Wallet',
            link: `/wallet?centreId=${centre.id}`,
            icon: '',
            src: "/media/images/default/brownWallet.svg",
        },
        {
            title: 'Managers',
            link: `/centre/${centre.id}/managers`,
            icon: '',
            src: "/media/images/default/brownManager.svg",
        },
    ]

    const contactAddress = [
        {
            name: 'Call Us:',
            text: centre.phoneNumber ? centre.phoneNumber : 'Not available',
            icon: ContactPhone,
            className: style.contactBg,
        },
        {
            name: 'Email',
            text: centre.emailAddress ? centre.emailAddress : 'Not available',
            icon: Email,
            className: style.emailBg,
        },
        {
            name: 'Visit Our Site:',
            text: centre.websiteUrl ? centre.websiteUrl : 'Not available',
            icon: Language,
            className: style.languageBg,
        },
        {
            name: 'Visit Us Address',
            text: centre.address ? centre.address : 'Not available',
            icon: ContactPhone,
            className: style.addressBg,
        },
    ];

   const contact = [
            {
                link: "",
                linkText: "Contact Us",
                src: "/media/images/default/phonecallOutgoing.svg",
                imageWidth: "78px",
                imageHeight: "19px",
                MaterialIcon: "",
                onClick: () => openDialog()
            },
    ]

    const copy = () => {
        navigator.clipboard.writeText(centre.id);
        setMessage('Copied');
    };
    
    const removeQuote = centre?.description?.replace(/(<([^>]+)>)/gi, '').replace(/['"]+/g, '')  

    return (
        <div className={``} style={{minHeight: '350px', position: 'relative'}}>

                <Dialog
                open={isOpen}
                handleClose={closeDialog}
                title="Contact Details"
                size="sm"
            >
                <div>
                    {contactAddress.map((content, index) => (
                        <div
                            className={`${globalStyle.flex1} ${globalStyle.displayFlex} ${globalStyle.flexColumn} ${globalStyle.alignItems}`}
                            key={index}
                            style={{ padding: '1rem' }}
                        >
                            <div
                                className={`${content.className} ${style.size} ${globalStyle.bRadius50} ${globalStyle.displayFlex} ${globalStyle.justifyCenter} ${globalStyle.alignItems}`}
                            >
                                <content.icon
                                    className={`${globalStyle.colorWhite}`}
                                />
                            </div>
                            <div
                                className={`${style.font13} ${globalStyle.top1rem}`}
                            >
                                {content.name}
                            </div>
                            <div
                                className={`${style.font13}`}
                            >
                                {content.text}
                            </div>
                        </div>
                    ))}
                </div>
            </Dialog>

            <div className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.alignItemsStart} ${globalStyle.pt2rem} ${globalStyle.flexWrp} ${style.singleCentreSecondContainer}`}>
                <div style={{paddingTop: '3rem'}}>
                    <h1 className={style.welcomeHome}>Welcome</h1>
                    <h3 className={style.aboutUsHome}>About us</h3>
                    <div className={style.homeDescription}>
                        <ReadMore readMoreText={<span className={style.readMore}>Read More</span>} text={removeQuote} />
                    </div>
                    <HideSmDown>
                    <div className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}>
                        <div
                            style={{textTransform: 'none'}}
                            className={style.centrePrice} 
                        >
                            Price: N{centre.price}
                        </div>
                        {subscribeButton}{' '}
                    </div>
                    
                    <div className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}>
                        <div>
                            <div className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${style.contactListContainer}`}>
                                
                            {contact.map((content, index) => {
                                return (
                                    <div key={index} onClick={content.linkText === 'Contact Us' && content.onClick}>
                                        <ImageLink
                                            link={content.link}
                                            linkText={content.linkText}
                                            MaterialIcon={content.MaterialIcon}
                                            src={content.src}
                                            linkStyleClass={style.contactLink}
                                        />
                                    </div>
                                    
                                )
                            })}
                            <ShareButton
                                name={centre.name}
                                url={`${url}?referralCode=${user?.id}`}
                                description={centre.description}
                                className={style.contactLink}
                                iconClassName={style.contactShareLink}
                            >
                                <ImageLink
                                    link=''
                                    linkText='Share'
                                    src="/media/images/default/share.svg"
                                    linkStyleClass={style.contactLink}
                                />
                            </ShareButton>
                            </div>
                        </div>
                    </div>
                    </HideSmDown>
                </div>
                <div>
                    <div className={style.imageContainer}>
                        <div className={style.singleCentreImage}>
                            <ImageUpload
                                id={centre?.id}
                                user={user}
                                defaultImage={centre.logo}
                                url={`/centre/${centre?.id}/logo`}
                            />
                        </div>
                    </div>
                    <div className={style.rightContentContainer}>
                        {Auth(user).isManager(centre.id as string) && (
                            <div className={style.subscribersContainer}>
                                Subscribers: {centre.subscriberCount}
                            </div>
                        )}
                        {Auth(user).isManager(centre.id as string) &&
                            <Delete
                                name="Centre"
                                url={`centre/${centre.id}`}
                                textWithIcon={true}
                                redirect={`/my-centres`}
                                className={style.singleCentreDeleteButton}
                            />
                        }
                        <p className={style.singleCentreId}>
                            {centre.isPrivate ? "Private ID: " : "Public ID: "} <span style={{fontWeight: 'normal'}}>{centre.id}</span>
                            <button
                                style={{
                                    backgroundColor: 'transparent',
                                    color: 'black',
                                    border: 'none',
                                    cursor: 'pointer',
                                    marginLeft: '.7rem',
                                    padding: '.1rem .5rem',
                                }}
                                onClick={() => copy()}
                                title="Copy"
                            >
                                <FileCopyIcon fontSize="small" />
                            </button>
                        </p>
                    </div>
                    {Auth(user).isManager(centre.id as string) && (
                    <>
                    <div style={{background: 'rgba(242, 242, 242, 0.32)'}}>
                        <div className={style.singleCentreDivider}></div>
                    </div> 
                        
                        <div className={style.rightContentFooter}>
                            <div className={`${globalStyle.greyColor} ${style.singleCentreFooterfontSize}`} onClick={() => {router.push(`${centre.slug}/${centre.id}/questionBank`)}}>
                                {LinksWithIcon('Questions Banks', "", "/media/images/default/brownQuestionBank.svg")}
                            </div>
                            {imageFooterList.map((content, index) => {
                                return (
                                    <div key={index} className={`${globalStyle.greyColor} ${style.singleCentreFooterfontSize}`} onClick={() => router.push(content.link && content.link)}>
                                        {LinksWithIcon(content.title, content.icon, content.src)}
                                    </div>
                                )
                            })}
                            <Update centre={centre} className={style.singleCentreFooterfontSize} editText />

                            {centre.isPrivate &&
                                <Link
                                    text={LinksWithIcon(`Contact Groups`, <PeopleAltSharpIcon />)}
                                    link={`/centre/${centre.id}/centre-group`}
                                    className={style.singleCentreFooterfontSize}
                                />
                            }
                        </div>
                        </>
                    )}
                </div>
                <HideMdUp> 
                    <div className={`${globalStyle.displayFlex} ${globalStyle.flexColumn} ${globalStyle.justifyCenter} ${style.bottomSubribeContainer}`}>
                        <div className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}>
                            <div
                                style={{textTransform: 'none'}}
                                className={style.centrePrice} 
                            >
                                Price: N{centre.price}
                            </div>
                            {subscribeButton}{' '}
                        </div>
                        <div className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}>
                        <div>
                            <div className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${style.contactListContainer}`}>
                                
                            {contact.map((content, index) => {
                                return (
                                    <div key={index} onClick={content.linkText === 'Contact Us' && content.onClick}>
                                        <ImageLink
                                            link={content.link}
                                            linkText={content.linkText}
                                            MaterialIcon={content.MaterialIcon}
                                            src={content.src}
                                            linkStyleClass={style.contactLink}
                                        />
                                    </div>
                                    
                                )
                            })}
                                <ShareButton
                                    name={centre.name}
                                    url={`${url}?referralCode=${user?.id}`}
                                    description={centre.description}
                                    className={style.contactLink}
                                    iconClassName={style.contactShareLink}
                                >
                                    <ImageLink
                                        link=''
                                        linkText='Share'
                                        src="/media/images/default/share.svg"
                                        linkStyleClass={style.contactLink}
                                    />
                                </ShareButton>
                            </div>
                            </div>
                        </div>
                    </div> 
                 </HideMdUp>
            </div>
            
            <div className={style.singleCentreReviewContainer}>
                <div className={style.singleCentreRectangle}></div>
                    <div className={style.singleCentreReviewContent}>
                        <div style={{flexGrow: 1}}>
                            <Reviews id={centre.id} />
                        </div>
                    </div>
            </div>
                
            {message && <Toast message={message} />}
        </div>
            
    );
}
