import useGlobalStyle from '../../styles';
import Input from '../shared/input';
import Button from '../button';
import { useState } from 'react';
import {
    getServerData,
    postContent,
    preview,
    updateServerData,
    uploadFile,
} from 'utils';
import useForm from '../../hooks/useForm';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import Image from '../shared/image';
import Link from '@components/shared/link';
import { TextareaAutosize } from '@material-ui/core';
import { useEffect } from 'react';

export default function CentreContact({ centreId, id }) {
    const [isLoading, setIsLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const createForm = useForm(submit);
    const globalStyle = useGlobalStyle();
    const [data, setData] = useState<any>();
    const [imageUrl, setImageUrl] = useState(null);
    const openFile = () => {
        document.getElementById('signature').click();
    };

    useEffect(() => {
        async function getCertificate() {
            try {
                const { data } = await getServerData(
                    `/centre/${centreId}/content/${id}/certificate/view`
                );
                setData(data);
                setLoading(false);
                setImageUrl(data.signature);
            } catch ({ message }) {
                setMessage(message);
                setLoading(false);
            }
        }
        getCertificate();
    }, []);
    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const image = await uploadFile(createForm.values.signature);
            createForm.setData('signature', image);
            const data = await postContent({
                url: `/centre/${centreId}/content/${id}/certificate`,
                data: createForm.values,
            });
            setMessage(data.message);
            setIsLoading(false);
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }
    async function updateCertificate() {
        setMessage('');
        try {
            setIsLoading(true);
            const image = await uploadFile(createForm.values.signature);
            createForm.setData('signature', image);
            const data = await updateServerData({
                url: `/centre/${centreId}/content/${id}/certificate`,
                data: createForm.values,
            });
            setMessage(data.message);
            setIsLoading(false);
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }
    async function previewCertificate() {
        setMessage('');
        try {
            setIsLoading(true);
            await preview(
                `${process.env.NEXT_PUBLIC_API_URL}/centre/${centreId}/content/${id}/certificate/preview`
            );
            setIsLoading(false);
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }
    if (loading) return <Loading />;
    return (
        <div>
            <div style={{ padding: '20px 20px 0 20px' }}>
                <div
                    style={{ fontSize: 16, color: '#000000', marginBottom: 20 }}
                >
                    You can configure the certificate details to your
                    specification. Click the editable texts to change the text
                    contents. typing nothing at the moment
                </div>

                <div
                    style={{ marginTop: 10, marginBottom: 20 }}
                    className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd}`}
                >
                    <Button
                        onClick={() => previewCertificate()}
                        color="primary"
                        variant="outlined"
                        className={`${globalStyle.bottom1rem} ${globalStyle.top1rem}`}
                    >
                        Preview Certificate {isLoading && <Loading />}
                    </Button>
                </div>
                <div
                    style={{
                        background: '#ffffff',
                        border: '15px solid rgba(245, 126, 39, 0.58)',
                        boxShadow: 'border-box',
                        padding: 10,
                    }}
                >
                    <div
                        style={{
                            background: '#ffffff',
                            border: '3px solid #F57E27',
                            boxShadow: 'border-box',
                            padding: 10,
                        }}
                    >
                        <div style={{ textAlign: 'center' }}>
                            <Image
                                src={'/media/images/default/logoDesign.png'}
                                alt="contentionary logo"
                                width="200px"
                                height="180px"
                            />
                            <form>
                                <b>November 18, 2021</b>
                                <Input
                                    type="text"
                                    name="heading"
                                    placeholder="Certificate of completion"
                                    style={{ width: 190 }}
                                    onChange={(e) => createForm.getData(e)}
                                    defaultValue={data ? data?.heading : ''}
                                />
                                <div className="certificate">
                                    This certificate is presented to
                                </div>
                                <div className="certificateName">
                                    Surname Firstname
                                </div>
                                <Input
                                    type="text"
                                    name="purpose"
                                    placeholder="For successfully completing "
                                    style={{ width: 210 }}
                                    onChange={(e) => createForm.getData(e)}
                                    defaultValue={data ? data?.purpose : ''}
                                />
                                <Input
                                    type="text"
                                    name="programTitle"
                                    placeholder="Introduction to React JS "
                                    onChange={(e) => createForm.getData(e)}
                                    style={{ width: 200, border: 'none', }}
                                    defaultValue={
                                        data ? data?.programTitle : ''
                                    }
                                />
                                <TextareaAutosize
                                    style={{
                                        width: 400,
                                        padding: 20,
                                        marginTop: 10,
                                        border: 'none',
                                    }}
                                    name="mandate"
                                    placeholder="an online course authorized by Rivers
                                    State University, Port Harcourt, Rivers
                                    State. "
                                    onChange={(e) => createForm.getData(e)}
                                    defaultValue={data ? data?.mandate : ''}
                                />
                                <div
                                    style={{ marginTop: 20, marginBottom: 10 }}
                                >
                                    {imageUrl ? (
                                        <Image
                                            src={imageUrl}
                                            alt="images"
                                            width="70px"
                                            height="70px"
                                            className={globalStyle.cursor}
                                            onClick={() => openFile()}
                                        />
                                    ) : (
                                        <span
                                            onClick={() => openFile()}
                                            style={{
                                                cursor: 'pointer',
                                                padding: '5px 20px',
                                                background: '#dbdbdb',
                                                borderRadius: 5,
                                            }}
                                        >
                                            Upload Signature
                                        </span>
                                    )}
                                    <Input
                                        id="signature"
                                        className={globalStyle.displayNone}
                                        type="file"
                                        onChange={(e) => {
                                            createForm.getFile(e);

                                            setImageUrl(
                                                window.URL.createObjectURL(
                                                    e.target.files[0]
                                                )
                                            );
                                            window.URL.revokeObjectURL(
                                                imageUrl
                                            );
                                        }}
                                    />
                                </div>
                                <Input
                                    type="text"
                                    name="principalOfficer"
                                    placeholder="Principal Officer Name"
                                    style={{ width: 180 }}
                                    onChange={(e) => createForm.getData(e)}
                                    defaultValue={
                                        data ? data.principalOfficer : ''
                                    }
                                />
                                {/* <div style={{ marginTop: 20 }}></div>
                                 */}
                            </form>
                        </div>
                        <Link
                            style={{ color: '#000000' }}
                            link="https://contentionary.com/v/12459-hy444-90033-37337"
                        >
                            https://contentionary.com/v/12459-hy444-90033-37337
                        </Link>
                    </div>
                </div>

                <div
                    style={{ marginTop: 20 }}
                    className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd}`}
                >
                    <Button
                        onClick={() =>
                            data ? updateCertificate() : createForm.submit()
                        }
                        color="primary"
                        variant="contained"
                        className={`${globalStyle.bottom1rem} ${globalStyle.top1rem}`}
                    >
                        {data ? 'Update' : 'create'} Certificate
                        {isLoading && <Loading />}
                    </Button>
                </div>
            </div>

            {message && <Toast message={message} />}
        </div>
    );
}
