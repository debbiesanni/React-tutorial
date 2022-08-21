import Image from '../shared/image';
import Link from '../shared/link';
import useStyle from './style';
import Dialog from '../dialog';
import Button from '../button';

interface Props {
    content: any;
}

export default function Premium({content}: Props) {
    const style = useStyle();

    return (
        <div className={style.premiumContainer} style={{position: 'relative'}}>
            <Link
                link={content.link}
            >
                <Image
                    src='/media/images/default/premiumWorkforce.svg'
                    alt='workforce'
                    width="300px"
                    height="150px"
                />
                <div className={`${style.premiumContent} ${content.premiumBg}`}>
                    <div>
                        <h3 className={content.nameColor}>{content.name}</h3>
                        <p className={content.premiumDescription}>{content.description}</p>
                    </div>
                </div>
            </Link>
            {/* <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => openDialog()}
                style={{textTransform: 'none'}}
                className={style.premiumContentSubscriber}
            >
                Subscribe for &#x20A6;2,000
            </Button> */}
        </div>
    )
}