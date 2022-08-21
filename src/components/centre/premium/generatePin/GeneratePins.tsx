import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import NoContent from '@components/shared/noContent';
import useGlobalStyle from '../../../../styles';
import Dropdown from '../../../shared/dropdown';
import Link from '../../../shared/link';
import Table, { ColumnProps } from '../../../table';
import AddPin from './addPin';
import { useState, useEffect } from 'react';
import moment from 'moment';
import Links from './generatePinStepBackLink';

export default function GeneratePin({ centreId, id, data, centreSlug }) {
    const globalStyle = useGlobalStyle();
    const [listPins, setListPins] = useState<Array<object | any>>();

    useEffect(() => {
        setListPins(data?.couponDetails)
    },[data?.couponDetails]);
    
    const columns: ColumnProps[] = [
        { header: 'Serial No', accessor: 'index' },
        { header: 'Pin', accessor: 'pin' },
        { header: 'Generation Date', accessor: 'createdAt' },
        { header: 'Validity', accessor: 'validity' },
    ];
    
    const tablePins = listPins?.map((pin, index) => ({
        ...pin,
        createdAt: moment(pin?.createdAt).format('MM/DD/YYYY'),
        validity: pin?.validity,     
        index: ++index
    }))
    
    return (
        <>
            <Links title="Generate Pins" centreSlug={centreSlug} />
            <div style={{ padding: '40px 20px 0 20px' }}>
                <div className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.alignItems}`}>
                    <AddPin setListPins={setListPins} />
                    <Dropdown
                        trigger={
                            <span
                                style={{
                                    fontSize: 16,
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                Filter
                                <KeyboardArrowDownIcon />
                            </span>
                        }
                        content={
                            <div style={{ width: 100 }}>
                                <Link
                                    text="Used"
                                    link={`/centre/${centreId}/generate-premium-centre-pin?filter=used`}
                                    className={globalStyle.greyColor}
                                />
                                <Link
                                    text="Unused"
                                    link={`/centre/${centreId}/generate-premium-centre-pin?filter=unused`}
                                    className={globalStyle.greyColor}
                                />
                            </div>
                        }
                        defaultSetting={true}
                    />
                </div>
                
                {listPins?.length > 0 ? (
                    <div
                        style={{
                            marginTop: 20,
                            border: '1px solid #C4C4C4',
                            borderRadius: 5,
                        }}
                    >
                        <Table data={tablePins} columns={columns} />
                    </div>
                ) : (
                    <NoContent name="Pin" />
                )}
            </div>
        </>
    );
}
