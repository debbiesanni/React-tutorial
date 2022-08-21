import Card from '../card/centre';
import useGlobalStyle from '../../styles';
import Link from '../shared/link';
import Add from './add';
import Pagination from '../shared/pagination';
import DropDown from '../shared/dropdown';
import { useState } from 'react';
import Toast from '../shared/toast';
import { getServerData } from '../../utils';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'; 

export default function PublicCentres({
    border,
    url,
    data,
    errorMessage,
}) {

    const globalStyle = useGlobalStyle();
    const [listCentres, setListCentres] = useState(data?.data?.centres);
    const [message, setMessage] = useState(errorMessage);

    async function getCentres(url) {
        setMessage('');
        try {
            const { data } = await getServerData(`/${url}`);
            setListCentres(data?.centres);
        } catch ({ message }) {
            setMessage(message);
        }
    } 
    return (
        <div>
            <span style={{width: '100px !important', backgroundColor: 'red', height: '100px'}}>
                <Link
                text="Public Centre"
                link={`/public-centres?type=public&pageId=1&limit=50`}
                className={globalStyle.primaryColor}
                style={{width: '100px'}}
            />
            </span> 
            
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp}`}
            >
                <h2>My Centre</h2>
                <div>
                    <DropDown
                        trigger={
                            <strong style={{ fontSize: 15, border: '1px solid black', padding: '.5rem 1rem', display: 'flex', alignItems: 'center' }}>
                                Centres Associated with
                                <ArrowDropDownIcon />
                            </strong>
                        }
                        content={
                            <>
                                <div
                                    onClick={() => getCentres('my-centres')}
                                    className={`${globalStyle.blackColor} ${globalStyle.dropdown}`}
                                >
                                    Own Centre
                                </div>
                                <div
                                    onClick={() =>
                                        getCentres('my-managing-centres')
                                    }
                                    className={`${globalStyle.blackColor} ${globalStyle.dropdown}`}
                                >
                                    Managing Centre
                                </div>
                                <div
                                    onClick={() =>
                                        getCentres('subscribed-centres')
                                    }
                                    className={`${globalStyle.blackColor} ${globalStyle.dropdown}`}
                                >
                                    Subscribed Centre
                                </div>
                            </>
                        }
                        className={globalStyle.contactContainer}
                        defaultSetting={true}
                    />
                </div>
            </div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.mt2rem}`}
            >
                {listCentres?.map((content, index) => (
                    <div key={index} className={`flex33`}>
                        <Card content={content} border={border} />
                    </div>
                ))}
            </div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.mt2rem}`}
            > 
                <Add
                    listCentres={listCentres}
                    setListCentres={setListCentres}
                />
                {listCentres?.length > 0 ? 
                <Pagination
                    pageUrl={`${url}?limit=50`}
                    pageCount={data?.data?.pageCount}
                    pageId={data?.data?.pageId}
                />
                : null}
            </div>
            {message && <Toast message={message} />}
        </div>
    );
}
