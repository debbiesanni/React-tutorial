import Button from '../button';
import { ArrowBack, ShowChart } from '@material-ui/icons';
import { useRouter } from 'next/router';
import useGlobalStyle from '../../styles';
import useStyles from './style';
import WalletTransfer from './walletTransfer';
import WalletRecharge from './creditWallet';
import BankTransfer from './transferToBank';
import Tab from './tab';

export default function Wallet({ balance, user, transaction, centreId }) {
    const router = useRouter();
    const globalStyle = useGlobalStyle();
    const styles = useStyles();
    return (
        <div>
            <div className={`${globalStyle.textAlignCenter}`}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => router.back()}
                >
                    <ArrowBack /> Go Back
                </Button>
            </div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.mt2rem} ${globalStyle.justifySpaceBtw}`}
            >
                <WalletRecharge user={user} />
                <WalletTransfer centreId={centreId}/>
                <BankTransfer  centreId={centreId}/>
            </div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.bottom1rem} ${globalStyle.flexWrp} ${globalStyle.mt2rem} ${globalStyle.justifySpaceBtw}`}
            >
                <div className={`flex33`} style={{marginBottom: 20}}>
                    <div className={`${globalStyle.displayFlex}`}>
                        <div className={globalStyle.mr2rem}>
                            {/* <div
                                className={`${styles.font12} ${globalStyle.primaryColor}`}
                            >
                                Wallet Name:
                            </div>
                            <div>
                                <b>Ruth Sanni</b>
                            </div> */}
                        </div>
                        <div>
                            <div
                                className={`${styles.font12} ${globalStyle.primaryColor}`}
                            >
                                User Id:
                            </div>
                            <div>
                                <b>{user.id}</b>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.mt15px}`}
                    >
                        <div className={globalStyle.mr2rem}>
                            {/* <div
                                className={`${styles.font12} ${globalStyle.primaryColor}`}
                            >
                                Bank Name:
                            </div>
                            <div>
                                <b> FirstBank</b>
                            </div> */}
                        </div>
                        <div>
                            {/* <div
                                className={`${styles.font12} ${globalStyle.primaryColor}`}
                            >
                                Account Number:
                            </div>
                            <div>
                                <b>3056865888</b>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className={`${styles.card} flex33`}  style={{marginBottom: 20}}>
                    <div className={globalStyle.padding1rem}>
                        <div
                            className={`${globalStyle.greyColor} ${styles.font12}`}
                        >
                            Wallet Balance
                        </div>
                        <h1># {balance?.data?.balance > 0 ? balance?.data?.balance : 0}</h1>
                    </div>
                    <div
                        className={`${styles.name} ${globalStyle.justifyCenter} ${globalStyle.primaryColor} ${globalStyle.displayFlex}`}
                    >
                        Credit Wallet <ShowChart />
                    </div>
                </div>

            </div>
            <Tab transaction={transaction?.data} centreId={centreId}
            />
        </div>
    );
}
