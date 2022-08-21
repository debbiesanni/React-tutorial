import { useTable } from 'react-table';
import useStyle from './style';

export interface ColumnProps {
    header: string;
    accessor: string;
}

interface Props {
    data: Array<any>;
    columns: Array<ColumnProps>;
    tableClassName?: string;
    theadClassName?: string;
    thClassName?: string;
    trClassName?: string;
    tbodyClassName?: string;
    tdClassName?: string;
    style?: any;
}

function Table({
    data,
    columns,
    tableClassName,
    theadClassName,
    thClassName,
    tbodyClassName,
    trClassName,
    tdClassName,
    style,
}: Props): JSX.Element {
    const styles = useStyle();

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <div style={{ overflowX: 'auto' }}>
            <table
                {...getTableProps()}
                className={`${styles.tablebody} ${tableClassName}`}
                style={style}
            >
                <thead className={theadClassName}>
                    {headerGroups.map((headerGroup, index) => (
                        <tr
                            key={index}
                            {...headerGroup.getHeaderGroupProps()}
                            className={trClassName}
                        >
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps()}
                                    className={`${styles.thTable} ${thClassName}`}
                                >
                                    {column.render('header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody
                    {...getTableBodyProps()}
                    className={`${styles.tbody} ${tbodyClassName}`}
                >
                    {rows.map((row, index) => {
                        prepareRow(row);
                        return (
                            <tr
                                key={index}
                                {...row.getRowProps()}
                                className={trClassName}
                            >
                                {row.cells.map((cell, index) => {
                                    return (
                                        <td
                                            key={index}
                                            {...cell.getCellProps()}
                                            className={`${styles.tdTable} ${tdClassName}`}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        
        </div>
    );
}

export default Table;
