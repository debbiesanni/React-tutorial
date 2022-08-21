import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import UnSubscribe from '../../../shared/subscribe/unSubscribe';
import DropdownProfile from '../../../profile/dropdownContent';
import { session, Auth, postContent } from '../../../../utils';
import NativeInput from '../../../shared/input/native';
import useDialog from '../../../../hooks/useDialog';
import useForm from '../../../../hooks/useForm';
import useGlobalStyle from '../../../../styles';
import Dropdown from '../../../shared/dropdown';
import Loading from '../../../shared/isLoading';
import Input from '../../../shared/input';
import Toast from '../../../shared/toast';
import Image from '../../../shared/image';
import useCentreStyle from '../../style';
import Link from '../../../shared/link';
import { useRouter } from 'next/router';
import Dialog from '../../../dialog';
import Button from '../../../button';
import Update from '../../update';
import useStyle from '../style';
import { useState} from 'react';

interface Props {
    content: any;
    title?: any;
    titleClass?: string;
    navbarClass?: string;
    centre: any;
    profileClass?: string
}

export default function NavBar({content, title, titleClass, navbarClass, centre, profileClass}: Props) {


    const style = useStyle();
    const router = useRouter();
    const user = session.get('user');
    const createForm = useForm(submit);
    const centreStyle = useCentreStyle();
    const globalStyle = useGlobalStyle();
    const userDetails = session.get('user');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showAccessCode, setShowAccessCode] = useState(false)
    const { closeDialog, openDialog, isOpen } = useDialog();



    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const { data } = await postContent({
                url: `/centre/${centre.id}/join-request`,
                data: createForm.values,
            });
            // console.log(createForm.values)
            setMessage('Centre Successfully Added');
            setIsLoading(false);
            closeDialog();
            location.reload()
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message); 
        }
    }



    const toggleAccessCode = () => {
        setShowAccessCode(!showAccessCode)
    }


    let subscribeButton = (
        <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => openDialog()}
            style={{textTransform: 'none'}}
            className={`${style.manageCentre} ${style.subscribeButton}`}
        >
            Subscribe for &#x20A6;{centre.price}
        </Button> 
    ); 

    if (Auth(user).isManager(centre.id))
        subscribeButton = (
            <Link
                text={
                    <Button
                        onClick={() => {}}
                        className={`${style.manageCentre} ${style.subscribeButton}`}
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
                className={`${style.manageCentre} ${style.subscribeButton}`} 
            />
        );
    else if (Auth(user).isPendingSubscriber(centre.id))
        subscribeButton = (
            <Button
                style={{textTransform: 'none'}}
                className={`${style.manageCentre} ${style.subscribeButton}`} 
                onClick={() =>
                    setMessage("Sorry Your Request hasn't been accepted")
                }
            >
                Pending
            </Button>
        );



    const addContect = (
        <div className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${style.createCentreButtonParentContainer}`}>
                <div className={`${style.createCentreButtonContainer}`}>
                    <Button
                        onClick={() => createForm.submit()}
                        color="primary"
                        variant="outlined"
                        style={{textTransform: 'none'}}
                    >
                        Subscribe through wallet
                    </Button>
                    <p className={`${style.createCentreButtonNote}`}>Click this button to subscribe to this centre.<br/><br/><i><strong>Note:</strong> Requires N2,000 monthly charges</i></p>
                </div>

                <div className={`${style.createCentreButtonContainer}`}>
                    <Button
                        onClick={() => toggleAccessCode()}
                        color="primary"
                        variant="contained"
                        style={{textTransform: 'none'}}
                    >
                        Subscribe using Access Code
                    </Button>

                        <div className={`${style.accessCodeInputContainer} ${showAccessCode ? style. displayBlock : style.displayNone}`}>
                            <NativeInput
                                placeholder="Enter Code"
                                name="code"
                                type="text"
                                value={createForm.values.code}
                                onChange={(e) => createForm.getData(e)}
                                className={style.enterCodeInputField}
                            />
                            <Button
                                onClick={() => {createForm.values.code ? createForm.submit() : setMessage('Please enter an access code to proceed')}}
                                color="primary"
                                variant="contained"
                                style={{textTransform: 'none'}}
                                className={style.applyAccessCode}
                            >
                                Apply {isLoading && <Loading />}
                            </Button>
                        </div>
                </div>
            </div>
    );


    return (
        <>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Add New Centre"
                size="sm"
            />
            <div className={`${globalStyle.displayFlex} ${globalStyle.alignItemsStart} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${navbarClass}`}>
            {title ?
                <div className={`${style.navbarTitle} ${titleClass}`}>
                    {title}
                </div> 
            :
                <>
                    <Button
                        style={{textTransform: 'none'}}
                        className={`${style.manageCentre}`} 
                        onClick={() => router.push('/home')}
                    >
                        Dashboard
                    </Button>
                </>
            }
            <div className={style.userprofileMobile}>
                <DropdownProfile user={userDetails} width='50px' height="50px" contentClass={profileClass} /> 
            </div>
            <div className={style.contentHeader}>
                <div style={{margin: 0, padding: 0}}>
                    {subscribeButton}
                </div>
                {Auth(userDetails).isManager(centre.id as string) &&
                    <Dropdown
                        trigger={
                            <Button
                                style={{textTransform: 'none'}}
                                className={`${style.manageCentre} ${style.manageCentreButton}`} 
                            >
                                Manage Centre
                            </Button>
                        }
                        className={style.dropDown}
                        content={
                            <div style={{ width: 30 }}>
                                <div style={{color: '#4698CF', cursor: 'pointer'}}>
                                    <Update centre={centre} color="inherit" />
                                </div>

                                {content.map((menu, index) => {
                                    return (
                                        <Link
                                            link={menu.link}
                                            key={index}
                                        > 
                                        {menu.src ?
                                            <Image
                                                src={menu.src}
                                                alt="image"
                                                height="30px"
                                                width="30px"
                                                className={style.image}
                                            />
                                        :
                                            <div style={{color: '#4698CF', cursor: 'pointer'}}>
                                                {menu.icon}
                                            </div>
                                        }
                                        </Link>
                                    )
                                })}

                                <Link
                                    text={ <PeopleAltSharpIcon />}
                                    link={`/centre//centre-group`}
                                    style={{color: '#4698cf',}}
                                />
                            </div>
                        }
                        defaultSetting={true}
                    />
                }
                <div className={style.userprofileDesktop}>
                    <DropdownProfile user={userDetails} width='20px' height="20px" contentClass={profileClass} /> 
                </div>
            </div>
        </div>
        </>
    )
}