import MenuItem from '@material-ui/core/MenuItem';
import { postContent, session } from 'utils';
import useForm from '../../hooks/useForm';
import useGlobalStyle from '../../styles';
import Loading from '../shared/isLoading';
import Select from '../shared/select'; 
import Input from '../shared/input';
import Card from '../card/premium';
import { useState } from 'react';
import useStyle from './style';
import Button from '../button';

export default function PremiumCentre() {
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const globalStyle = useGlobalStyle();
    const [listOfCategory, setListOfCategory] = useState<any>([{id: 1, name: 'Content1'}, {id: 2, name: 'content2'}]);
    const style = useStyle();

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const { data } = await postContent({
                url: `/centre`,
                data: createForm.values,
            });
            setMessage('Centre Successfully Added');
            setIsLoading(false);
            // if(reload) {
            //     location.reload()
            // }
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message); 
        }
    }

    const selectContent = listOfCategory?.map((category, index) => {
        return (
            <MenuItem
                key={index}
                value={category.name}
                onClick={() => {}}
                id={category.id}
            >
                {category.name}
            </MenuItem>
        );
    });
 
    const premiumCentres = [
        {
            name: 'Premium for Workforce',
            description: 'Download CV templates, books, resume’, articles, past exam solutions etc.',
            link: '/premium-centre',
            premiumDescription: style.premiumDescription,
            premiumBg: style.workforceContainer,
            subscribeLink: '',
            nameColor: style.workforceNameColor,
        },
        {
            name: 'Premium for Kids',
            description: 'Join a competition, get printables and get amazing videos to keep you sharp',
            subscribeLink: '',
            link: '/premium-for-kids',
            nameColor: style.kidsNameColor,
            premiumBg: style.kidsContainer,
            premiumDescription: style.premiumDescription,
        },
        {
            name: 'Premium for Teens',
            description: 'Are you preparing for JAMB?  DOWNLOAD PAST QUESTIONS AND SOLUTIONS TO PRACTICE OFFLINE',
            subscribeLink: '',
            link: '/premium-center-for-students',
            nameColor: style.teensNameColor,
            premiumBg: style.teensContainer,
            premiumDescription: style.premiumDescription,
        },
        {
            name: 'Premium for Tertiary',
            description: 'Access verified scholarship past questions and solutions, download Undergraduate projects, books, exam solutions.',
            subscribeLink: '',
            link: '/premium-for-tertiary',
            nameColor: style.tertiaryNameColor,
            premiumBg: style.workforceContainer,
            premiumDescription: style.premiumDescription,
        },
    ]

    return (
        <div className={`${globalStyle.contentWidth} ${style.premiumContainer}`}>
            <p className={style.premiumCentreTitle}>Access all you need in Contentionary’s Premium Centres to stay competitive</p>
            <p className={style.premiumCentreSubTitle}>Please select the centre you will like to subscribe to have monthly or yearly access anytime.</p>
            <div className={`${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.justifySpaceBtw}  ${globalStyle.bottom1rem}`}>
                {premiumCentres.map((premium, index) => {
                    return (
                        <div className={globalStyle.bottom1rem} key={index}>
                            <Card content={premium} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}