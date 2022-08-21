import useStyle from './style';
import useGlobalStyle from '../../styles';
import Dialog from '@components/dialog';
import useDialog from '@hooks/useDialog';
import useForm from '@hooks/useForm';
import Button from '../button';
import NativeInput from '../shared/input/native';
import { useEffect, useState } from 'react';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import {useRouter} from 'next/router';
import Image from '../shared/image';
import PeopleOutline from '@material-ui/icons/PeopleOutline';
import { allowTextLength } from '../shared/textLength';
import Attribute from '../shared/attribute';
import LinkComponent from '../shared/link';
import { postContent, session, Auth } from 'utils';

export interface Props {
    content: any;
    border?: boolean;
}

const CentreCard = ({ content }: Props): JSX.Element => {
    const style = useStyle();
    const router = useRouter();
    const user: any = session.get('user');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [isAcessLoading, setIsAccessLoading] = useState(false)
    const activateWallet = useForm(submitActivateWithWallet);
    const activateWithAccessCode = useForm(submitActivateWithAccessCode);
    const {isOpen, openDialog, closeDialog} = useDialog();
    const globalStyle = useGlobalStyle();

    async function submitActivateWithWallet() {
        setMessage('')
        try {
            setIsLoading(true);
            activateWallet.setData('centreId',content.id)
            activateWallet.setData('userId',user.id)
            const { message } = await postContent({
                url: `/subscription/pay-with-wallet`,
                data: activateWallet.values,
            });
            setMessage(message)
            setIsLoading(false);
            closeDialog();
        } catch ({message}) {
            setIsLoading(false);
            setMessage(message); 
        }
    }

    async function submitActivateWithAccessCode() {
        setMessage('')
        try {
            setIsAccessLoading(true);content
            activateWithAccessCode.setData('centreId',content.id)
            if(!activateWithAccessCode.values.code) {
                return setMessage('Please enter your access code');
            }
            const { message } = await postContent({
                url: `/subscription/pay-with-code`,
                data: activateWithAccessCode.values,
            });
            setMessage(message)
            setIsAccessLoading(false);
            closeDialog();
            window.location.reload();
        } catch ({message}) {
            setMessage(message);
            setIsAccessLoading(false);
        }
    }

    const card = (
            
        <div className={`centreBgImg `}>  
            <div style={{ height: 140, position: 'relative' }}>
                <Image
                    src={
                        content?.logo
                            ? `${content?.logo}`
                            : '/media/images/default/defaultImage.jpg'
                    }
                    className={`${globalStyle.bRadius50} ${style.image}`}
                    alt={content?.name}
                    width="120px"
                    height="120px"
                />
            </div>
            <div className={style.centreDescription}>
                <h3 className={`cardTitle`}>{allowTextLength(content?.name, 25)}</h3>
                <div
                    className={`${style.description} ${globalStyle.greyColor} cardDescription`}
                    dangerouslySetInnerHTML={{
                        __html: allowTextLength(content?.description?.replace(/['"]+/g, ''), 75),
                    }}
                />
            </div>
            <div
                className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex} ${globalStyle.greyColor} ${style.subscriberContainer}`}
            >
                <Attribute
                    icon={<PeopleOutline className={globalStyle.iconColor} />}
                    text="Subscribers"
                    count={content?.subscriberCount}
                    className={style.centreAttributeSize}
                />
                <span
                    className={`${globalStyle.cursor} ${globalStyle.iconColor} ${globalStyle.boldFont} ${style.view} `}
                >
                    View
                </span>
            </div>
            {message && <Toast message={message} />}
        </div>
    );
    
    return ( 
    content.status !== "EXPIRED" ?
     <LinkComponent text={card} link={`/${content?.slug}`} />
     :
     <>
        {Auth(user).isManager(content?.id as string) ?
            <div>
                <Dialog
                    handleClose={closeDialog}
                    title='Activate expired private centre'
                    open={isOpen}
                >
                    <>
                        <p style={{color: '#9f9f9f', fontSize: '16px'}}>You have an expired private centre, please activate this centre via your wallet or through an access code</p>
                        <div className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${style.createCentreButtonParentContainer} ${globalStyle.alignItemsStart}`}
                        >
                            <div className={`${style.createCentreButtonContainer}`}>
                                <Button
                                    onClick={() => activateWallet.submit()}
                                    color="primary"
                                    variant="outlined"
                                    style={{textTransform: 'none', width: '200px'}}
                                >
                                    Activate via wallet {isLoading && <Loading />}
                                </Button>
                                <p className={`${style.createCentreButtonNote}`}>Click this button to charge your wallet.<br/><br/><i><strong>Note:</strong> N15,000 will be deducted from your wallet balance</i></p>
                            </div>

                            <div 
                                className={`${style.accessCodeInputContainer}`}
                                style={{marginTop: '0rem', width: 280}}
                            >
                                <NativeInput
                                    placeholder="Enter access code"
                                    name="code"
                                    type="text"
                                    value={activateWithAccessCode.values.couponCode}
                                    onChange={(e) => activateWithAccessCode.getData(e)}
                                    className={style.enterCodeInputField}
                                />
                                <Button
                                    onClick={() => activateWithAccessCode.submit()}
                                    color="primary"
                                    variant="contained"
                                    style={{textTransform: 'none', position: 'absolute'}}
                                    className={style.applyAccessCode}
                                >
                                    Apply {isAcessLoading && <Loading />}
                                </Button>
                            </div>
                        </div>
                    </>
                </Dialog>
                <div style={{marginBottom: '1rem', cursor: 'pointer'}} onClick={() => openDialog()}>
                    {card}
                </div>
            </div>
        : <>router.push('/expired-centre')</>}
    </>
    );
};

CentreCard.defaultProps = {
    image: null,
};

export default CentreCard;
     
