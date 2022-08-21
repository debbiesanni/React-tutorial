import { useState } from 'react';
import useGlobalStyle from '../../styles';
import useStyle from './style';
import Dialog from '../dialog';
import Button from '../button';
import useDialog from '../../hooks/useDialog';
import Editor from '../shared/ckEditor/editorOld';
import AddBtn from '../addBtn';
import { postContent, session } from 'utils';
import useForm from '../../hooks/useForm';
import Toast from '../shared/toast';
import Link from '../shared/link';
import Loading from '../shared/isLoading';
import Input from '../shared/input';
import NativeInput from '../shared/input/native';
import { useRouter } from 'next/router';

interface Props {
    text?: boolean;
    setListCentres?: Function;
    listCentres?: any;
    textName?: string;
    textNameClass?: string;
    parentClass?: string; 
    reload?: boolean;
}
export default function AddCentre({
    setListCentres,
    listCentres,
    text,
    textName,
    textNameClass,
    parentClass,
    reload
}: Props) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const user = session.get('user');
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { closeDialog, openDialog, isOpen } = useDialog();
    const router = useRouter();
    // const [sendEditor, setSendEditor] = useState();
    const [showPrivateCentre, setShowPrivateCentre] = useState(false)
    const [showAccessCode, setShowAccessCode] = useState(false)

    // const handleChangeEditor = (input) => {
    //     const result: any = input;
    //     setSendEditor(result);
    // };

    const togglePrivateContent = () => {
        setShowPrivateCentre(!showPrivateCentre)
    }

    const toggleAccessCode = () => {
        setShowAccessCode(!showAccessCode)
    }
    
    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const { data } = await postContent({
                url: `/centre`,
                data: createForm.values,
            });
            if (text) {
                router.push('/my-centres');
            } else {
                listCentres.unshift(data);
                setListCentres([...listCentres]);
            }
            session.set('user', { ...data.token }); 
            setMessage('Centre Successfully Added');
            setIsLoading(false);
            setShowPrivateCentre(false)
            setShowAccessCode(false)
            closeDialog();
            if(reload) {
                location.reload()
            }
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message); 
        }
    }
    
    const addContect = (
        <div>  
            <Input
                placeholder="Enter Center Name"
                name="name"
                type="text"
                labelWidth={140}
                onChange={(e) => createForm.getData(e)}
                inputProps={{ maxLength: 25 }}
                helperText="Allows 25 maximum character"
            />
            <h3>Description (Allows 200 maximum characters)</h3>
            <Editor
                name="description"
                setter={(e) => createForm.getData(e)}
                data={createForm.values.description}
                maxlength={200}
                rows={5}
            />


            <div className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${style.createCentreButtonParentContainer}`}>
                <div className={`${style.createCentreButtonContainer}`}>
                    <Button
                        onClick={() => createForm.submit()}
                        color="primary"
                        variant="outlined"
                        style={{textTransform: 'none'}}
                    >
                        Create New Public Centre
                    </Button>
                    <p className={`${style.createCentreButtonNote}`}>Click this button to create a free public centre.<br/><br/><i><strong>Note:</strong> No charges involved when creating a Public centre.</i></p>
                </div>

                <div className={`${style.createCentreButtonContainer}`}>
                    <Button
                        onClick={() => togglePrivateContent()}
                        color="primary"
                        variant="contained"
                        style={{textTransform: 'none'}}
                    >
                        Create New Private Centre
                    </Button>
                    <p className={`${style.createCentreButtonNote}`}>Click this button to create a private centre.<br/><br/><i><strong>Note:</strong> Requires N15,000 monthly charges.</i></p>
                    <Link
                        text="See features"
                        link={`/pricing`}
                        className={globalStyle.primaryColor}
                        style={{textDecoration: 'underline'}}
                    />

                    <div className={`${showPrivateCentre ? style.displayBlock : style.displayNone} ${style.privateCentreOptionContainer}`}>
                        <span className={style.createPrivateCentre} onClick={() => { createForm.setData('isPrivate', true); createForm.submit()}}>Create via Wallet</span>

                        <span style={{marginLeft: '2.5rem'}} className={style.createPrivateCentre} onClick={() => toggleAccessCode()}>Create with Access code</span>

                        <div className={`${style.accessCodeInputContainer} ${showAccessCode ? style. displayBlock : style.displayNone}`}>
                            <NativeInput
                                placeholder="Enter Code"
                                name="couponCode"
                                type="text"
                                value={createForm.values.couponCode}
                                onChange={(e) => createForm.getData(e)}
                                className={style.enterCodeInputField}
                            />
                            <Button
                                onClick={() => {createForm.setData('isPrivate', true); {createForm.values.couponCode ? createForm.submit() : setMessage('Please enter an access code to proceed')}}}
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
            </div>
        </div>
    );
    // Add New Center {isLoading && <Loading />}
    return (
        <>
            {textName ? <span onClick={() => user ? openDialog() : router.push('/login')} className={textNameClass}>{textName}</span> 
            
            :
                <div onClick={() => openDialog()} className={`${globalStyle.cursor} ${parentClass}`}>
                    {text ? (
                        'Own a Center'
                    ) : (
                        <div
                            style={{
                                position: 'fixed',
                                bottom: '5rem',
                                right: '1.5rem',
                            }}
                        >
                            <AddBtn text="" className={style.addBtn} />
                        </div>
                    )}
                </div>
            }


            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Add New Centre"
                size="sm"
                // buttons={[
                //     {
                //         value: value,
                //         onClick: () => createForm.submit(),
                //     },
                // ]}
            />
            {message && <Toast message={message} />}
        </>
    );
}
