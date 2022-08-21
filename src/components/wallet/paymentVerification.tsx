import { useRouter } from 'next/router';
import useGlobalStyle from '../../styles';
import useStyles from "./style";
import Loading from '../shared/isLoading';
import { useState } from 'react';
import { getServerData } from '../../utils';

export default function Wallet({ transactionId }) {
    const router = useRouter();
    const globalStyle = useGlobalStyle();
    const styles = useStyles();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function verification() {
        try {
            await getServerData(
                `/pay/transaction/${transactionId}/verify`
            );
            setMessage('Payment Successfully');
            router.push('/wallet');
            setIsLoading(false);
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message);
        }
    }
    if (transactionId) {
        verification();
    }
    return (
        <div
            style={{ height: 350 }}
            className={`${globalStyle.displayFlex} ${globalStyle.justifyCenter} ${globalStyle.alignItems}`}
        >
            {message ? (
                <h1>{message}</h1>
            ) : (
                <div className={globalStyle.textAlignCenter}>
                    <Loading size={100} />
                    <h1>Verifing Payment</h1>
                </div>
            )}
        </div>
    );
}
