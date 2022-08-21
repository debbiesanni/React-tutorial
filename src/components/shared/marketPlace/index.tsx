import  LinkComponent from '../link';
import LinksWithIcon from '../linkWithIcons';
import Dashboard from '@material-ui/icons/Dashboard';

export default function MarketPlace({ className }) {
    return <LinkComponent text={LinksWithIcon('Marketplace', <Dashboard />)} link={'/market-place'} className={className}/>
    
}
