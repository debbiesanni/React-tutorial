import { getServerData, session } from '../utils';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../components/shared/image';
import Button from '../components/button';
import { withRouter } from 'next/router';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import Head from '../components/head';

const useStyle = makeStyles({
    container: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    message: {
        marginTop: '3rem'
    },
    span: {
        color: '#FF8019'
    },
})

function InsufficientWallet(props) {

    const style = useStyle();
    const nextRouter = useRouter();
    const {centreId=null} = nextRouter.query;
    
    return (
        <>
            <Head title="Insufficient Wallet" description="Insufficient Wallet" />
            <div className={style.container}>
                <Image
                    src="/media/images/default/online payment.svg"
                    alt="Exam"
                    className="image"
                />
                <h1>Insufficient Fund</h1>
                <p><strong><span className={style.span}>Wallet Balance:</span> &#8358;{props?.data?.balance ? props?.data?.balance : 0}</strong></p>
                <p className={style.message}><strong>Please credit your wallet to proceed</strong></p>
                <Button
                // /wallet?centreId=${centreId}
                    variant="outlined"
                    color="primary"
                    onClick={() => nextRouter.push(`/wallet${centreId ? `?centreId=${centreId}` : ''}`)}
                    style={{textTransform: 'none', margin: '1rem 0'}}
                >
                    Click to credit wallet
                </Button>
            </div>
        </>
    )
};

export async function getServerSideProps({ req, query }) {
    try {
        const { centreId } = query;       
        const user: any = JSON.parse(session.get(req, 'user'));
        const {data} = await getServerData(
            `${centreId ? `/wallet/centre-balance?centreId=${centreId}` : '/wallet/balance'}`,
            {
                token: user.token,
            }
        );
        
        return {
            props: {
                data,
            },
        };
    } catch ({ message }) {
        return {
            props: {
                errorMessage: message,
            },
        };
    }
}


export default InsufficientWallet