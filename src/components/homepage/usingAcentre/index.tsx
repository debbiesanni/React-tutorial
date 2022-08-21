import useStyle from './style';
import useGlobalStyle from '../../../styles';
import {useRouter} from 'next/router';
import Card from '../../card/loginFooterCard';
import AddCentre from '../../centre/add';


export default function UsingCentre({listCentres, setListCentres}) {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const router = useRouter()
    
    const data = [
        {
            title: 'Using a Centre',
            content1: 'Create your Centre and use it to conduct exams, host online competitions, Host online courses and/or publish your content.',
            content2: 'Monetize your centre or make it private or public. Its all in your care',
            buttonText: <AddCentre textName="Create a centre" listCentres={listCentres}
            setListCentres={setListCentres} />,
            onClick: () => {}
        },
        {
            title: 'Getting Our API',
            content1: 'The most flexible way of using your centre. Do all from your personal web by integrating our web API to you website',
            content2: '',
            buttonText: 'Get Intouch Now',
            onClick: () => router.push("https://contentionary.com/integration")
        },
        {
            title: 'Prep with Marketplace',
            content1: 'Are you preparing for an Exam/Screening exercise? Or you want to study or learn for better competitiveness, or acquire a new skill? Visit the Marketplace and join any centre of your choice to access all that is made available by the owner of the centre.',
            content2: '',
            buttonText: 'Visit Marketplace',
            onClick: () => router.push("/market-place")
        },
    ]

    return (
        <div className={`${style.container} ${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp}`}>
            {data.map((content, index) => {
                return (
                    <div className={`flex33  ${globalStyle.bottom1rem}`}>
                        <Card key={index} data={content} />
                    </div>
                )
            })}
        </div>
    )
}