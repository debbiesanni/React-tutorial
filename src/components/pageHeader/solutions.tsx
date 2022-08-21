import useStyle from './style';
import useGlobalStyle from '../../styles';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import DropDown from '../shared/dropdown';

export default function Profile({ user }) {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
 
    const trigger = (
        <div className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${style.trigger}`}>Our Solutions <KeyboardArrowDown/></div>
    );
    const content = (
        <div className={globalStyle.displayFlex}>
            <div className={`${style.solutionLeft}`}>
               <div>Our Solution</div>
            </div>
            Our Solutions
        </div>
    );
    return (
        <DropDown
            trigger={trigger}
            content={content}
            className={style.solution}
        />
    );
}
