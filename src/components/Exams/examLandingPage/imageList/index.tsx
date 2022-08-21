import useGblobalStyle from '../../../../styles';
import Image from '../../../shared/image';
import Button from '../../../button';
import useStyle from './style';

interface Props {
    reverse?: boolean,
    data: object | any,
}

export default function ImageList({reverse, data}: Props) {
    const globalStyle = useGblobalStyle();
    const style = useStyle();
    
    return (
        <div className={`${globalStyle.displayFlex} ${reverse && globalStyle.rowReserve} ${globalStyle.justifySpaceAround} ${globalStyle.alignItems} ${globalStyle.flexWrp} ${globalStyle.mt2rem}`}>
            <Image
                src={data?.image}
                alt='{content.title}'
                width="350px"
                height="350px"
                // className={style.image}
            />
            <div style={{textAlign: 'left'}}>
                <h1>{data?.title}</h1>
                {data?.list.map((content, index) => {
                    return (
                        <ul key={index}>
                            <li>{content}</li>
                        </ul>
                    )
                })}
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
        </div>
    )
}