
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
// import LightModeIcon from '@material-ui/icons/LightMode';
import CheckIcon from '@material-ui/icons/Check';
import useGblobalStyle from '../../../../styles';
import Image from '../../../shared/image';
import Button from '../../../button';
import useStyle from './style';

export default function HowItWorks() {
    const globalStyle = useGblobalStyle();
    const style = useStyle();

    const data = [
        {
            icon: <CheckIcon fontSize="large" />,
            title: 'Signup for free',
            description: 'Create a free account by signing up to contentionary.com. Proceed to your email to verify your account from the link sent'
        },
        {
            icon: '',
            title: 'Create your free centre',
            description: 'After login, proceed to create centre. Your centre is your digital space that houses all you do in contentionary.'
        },
        {
            icon: <AccountBalanceIcon fontSize="large" />,
            title: 'Create and manage your exams',
            description: 'Click exams in your centre to add exams in seconds. Then proceed to "manage exams" to set all the required as you desire.'
        },
    ]

    return (
        <div className={style.container}>
            <h1 className={style.title}>How it Works</h1>
            <div className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.mt2rem}`}>
                {data.map((content, index) => {
                    return (
                        <div style={{position: 'relative'}}>
                            <div className={style.circle}>
                                {content.icon}
                            </div>
                            <div className={style.content}>
                                <h2>{content.title}</h2>
                                <p>{content.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Button
                variant="contained"
                color="default"
                onClick={() => {}}
                style={{textTransform: 'none'}}
                className={style.button}
            >
                Create an Account
            </Button>
        </div>
    )
}