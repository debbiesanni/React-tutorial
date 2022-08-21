// import PersonAddAltIcon from '@material-ui/icons/PersonAddAlt';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CropFreeIcon from '@material-ui/icons/CropFree';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import useGblobalStyle from '../../../../styles';
import WifiIcon from '@material-ui/icons/Wifi';
import Button from '../../../button';
import useStyle from './style';

export default function JoinThousandBusinesses() {
    const globalStyle = useGblobalStyle();
    const style = useStyle();

    const data = [
        {
            icon: <SettingsIcon fontSize="large" />,
            title: 'Super Secured and Safe',
            description: 'All your engagement are encrypted. Using international technologied for security and content protection. SSL certified, cloudflare CDN etc.'
        },
        {
            icon: <WifiIcon fontSize="large" />,
            title: 'API Integration',
            description: 'Conduct exams from your personal website. Integrate our exam engine API to your website. Your candidates/students will also login from your site.'
        },
        {
            icon: <PeopleAltIcon fontSize="large" />,
            title: 'Assign managers',
            description: 'Assign managers to your centre to manage your exams. They can be your teachers or personal assistant. They can aid uploading of questions, monitor etc.'
        },
        {
            icon: <CropFreeIcon fontSize="large" />,
            title: 'Data Privacy and Security',
            description: 'You can delete your subscribers, exams and questions when you want to. It is your property and cannot be accessed by anyone.'
        },
        {
            icon: <AttachMoneyIcon fontSize="large" />,
            title: 'Affordable',
            description: 'You can conduct exam with our anti-cheating teachnology for as low as #100 ($0.2) per candidate, use our pro centre to conduct unlimited exams for #15,000 ($29) per month or try for FREE.'
        },
        {
            icon: <PersonIcon fontSize="large" />,
            title: '24hrs Support',
            description: 'Don\'t think of the stress, we are here to work with you throughout the setup. We assign dedicated support staff for all our clients. Let\'s get started.'
        },
    ]

    return (
        <div className={style.container}>
            <h1>Join Thousands of Businesses and Institutions Today</h1>
            <div className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp}`}>
                {data.map((content, index) => {
                    return (
                        <div className={`${style.card} flex331rem`} key={index}>
                            {content.icon}
                            <h3 className={style.cardTitle}>{content.title}</h3>
                            <p>{content.description}</p>
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
                Get Started
            </Button>
        </div>
    )
}