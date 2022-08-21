import useGlobalStyle from '../../styles';
import Table, { ColumnProps } from '../table';
import Link from '../shared/link';
import Add from './add';
import Button from '../button';
import Delete from '../shared/delete';
import Pagination from '../shared/pagination';
import { useState } from 'react';
import NoContent from '@components/shared/noContent';

export default function CentreHome({ managers, centreId }) {
    const globalStyle = useGlobalStyle();
    const [managersList, setManagersList] = useState(managers?.data?.users);
    const columns: ColumnProps[] = [
        { header: 'S/N', accessor: 'index' },
        { header: 'Surname', accessor: 'surname' },
        { header: 'Firstname', accessor: 'firstname' },
        { header: 'Username', accessor: 'username' },
        { header: 'Email', accessor: 'email' },
        { header: 'Phone Number', accessor: 'phoneNumber' },
        { header: 'Status', accessor: 'role' },
        { header: 'Action', accessor: 'action' },
    ];
    
    const result = managersList?.map((e, index) => ({
        ...e,
        action: (
            <Delete
                name="Manager"
                icon={true}
                url={`centre/${centreId}/centre-manager/${e.userId}`}
                setData={setManagersList}
                dataReset={managersList}
            />
        ),
        index: ++index,
    }));

    const goBack = () => {
        window.history.back();
    };

    return (
        <div className={`${globalStyle.contentWidth}`}> 
            <Button
                onClick={() => goBack()}
                // className={style.exitCentre}
                style={{textTransform: 'none', color: 'red', margin: '2rem 0'}}
            >
                X Exit Manager{' '}
            </Button>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
            >
                <h2 className={globalStyle.bottom1rem}>Centre Managers</h2>
                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
                >
                    <Link
                        text="Dashboard"
                        link="/home"
                        className={globalStyle.greyColor}
                    />
                    <span>/</span>
                    <Link
                        text="Centre"
                        link={`/centre/${centreId}`}
                        className={globalStyle.primaryColor}
                    />
                </div>
            </div>

            {managersList?.length > 0 ? (
                <Table data={result} columns={columns} />
            ) : (
                <NoContent name="manager" />
            )}
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.mt2rem}`}
            >
                <Add centreId={centreId} />
                <div>
                    <Pagination
                        pageCount={managers?.data?.pageCount}
                        pageId={managers?.data?.pageId}
                        pageUrl={`/centre/${centreId}/centre-manager/`}
                    />
                </div>
            </div>
        </div>
    );
}
