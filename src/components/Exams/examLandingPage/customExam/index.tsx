import useGblobalStyle from '../../../../styles';
import Image from '../../../shared/image';
import Button from '../../../button';
import useStyle from './style';


export default function CustomExam() {
    const globalStyle = useGblobalStyle();
    const style = useStyle();

    const data = [
        {
            title: 'Pre-Exams',
            image: '/media/images/default/testingWithContentionary.png',
            list: ['Create and schedule exams', 'Setup evaluation rules', 'Setup anti-cheating tools']
        },
        {
            title: 'During Exams',
            image: '/media/images/default/testingWithContentionary.png',
            list: ['Conduct exams digitally', 'Proctor using CAMsnap Tech', 'Monitor students activity log']
        },
        {
            title: 'Post-Exams',
            image: '/media/images/default/testingWithContentionary.png',
            list: ['View candidates results', 'View Candidates\' scripts', 'Assign marks to theoritical questions']
        },
    ]

    return (
        <div className={style.container}>
            <h1 className={style.title}>Create Custom Exams & Tests Online</h1>
            <div className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.mt2rem}`}>
                {data.map((content, index) => {
                    return (
                        <div key={index}>
                            <Image
                                src={content.image}
                                alt={content.title}
                                width="150px"
                                height="150px"
                                className={style.image}
                            />
                            <h2>{content.title}</h2>
                            {content.list.map((list, index) => {
                                return(
                                    <ul className={style.unorderedList} key={index}>
                                        <li>{list}</li>
                                    </ul>
                                )
                            })}
                            
                        </div>
                    )
                })}
            </div>
            <div className={style.buttonContainer}>
                <Button
                    variant="contained"
                    color="default"
                    onClick={() => {}}
                    style={{textTransform: 'none'}}
                    className={style.button}
                >
                    See Demo
                </Button>
            </div>
        </div>
    )
}