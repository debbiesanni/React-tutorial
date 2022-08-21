import useStyle from './style';
import useGblobalStyle from '../../styles';
import {useRouter} from 'next/router';
import Dashboard from '@material-ui/icons/Dashboard';
import AddCentre from '../centre/add';
import LinkComponent from '../shared/link';

interface Props {
    marketplace?: boolean;
    createCentre?: boolean;
    marketplaceClass?: string;
    joinpremium?: boolean;
    centreClass?: string;
    listCentres?: any;
    setListCentres?: any;
    myCentresReload?: boolean;
}

export default function CreateCentreMobile({
    marketplace,
    createCentre,
    marketplaceClass,
    joinpremium,
    centreClass,
    listCentres,
    setListCentres,
    myCentresReload,
}: Props) {
    const style = useStyle();
    const router = useRouter();
    const globalStyle = useGblobalStyle()
    return (
        <div>
            {createCentre && 
                <div className={centreClass ? centreClass : style.container}>
                    <p className={style.content}>Want to conduct a test, host a course or publish contents?</p>
                    <AddCentre textName="Create a centre" textNameClass={style.createCentre} listCentres={listCentres} setListCentres={setListCentres} reload={myCentresReload} />
                </div>
            }

            {joinpremium && 
                <div className={style.container}>
                    <p className={style.content}>Get exclusive access to a library of vast prep contents and prep exams</p>
                    <LinkComponent
                        text="Join Premium Centre"
                        link="/premium-centres"
                        className={style.linkJoinpremium}
                    />
                </div>
             }
            
            {marketplace && 
                <div className={marketplaceClass}>
                    <p className={style.content}>Access alot from centres to stay prepared, join a centre today</p>
                    <div className={`${style.marketContainer} ${globalStyle.greyColor}`} onClick={()=>router.push("/market-place")}>
                        <Dashboard />
                        <LinkComponent
                            text="MarketPlace"
                            link="/market-place"
                            className={style.linkMarketplace}
                        />
                    </div>
                </div>
            }
        </div>
    )
}