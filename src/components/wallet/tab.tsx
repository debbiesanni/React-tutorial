import AllTransaction from './allTransactions';

export default function MarketPlace({ transaction, centreId }) {

    return (
        <div>
            <h3 style={{marginBottom: 10}}>{centreId ? 'Centres Transactions' : 'All transactions'}</h3>
            <AllTransaction transaction={transaction} />
        </div>
    );
}
