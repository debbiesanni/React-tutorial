import Head from '../head';
import useStyle from './style';
import Button from '../button';
import Tab from './tab';
import { UserProps } from 'redux/slice/user';
import { CentreProps } from './interface';
import useGlobalStyle from '../../styles';

interface Props {
    centre: CentreProps;
    user: UserProps;
    entityCounters?: {};
}

export default function NewCentre({ centre, user, entityCounters }: Props) {
    const style = useStyle();
    const globalStyle = useGlobalStyle();

    const {
        description,
    } = centre;

    const goBack = () => {
        window.history.back(); 
    };

    return (
        <>
            <Head
                title={centre?.name}
                description={description?.replace(/['"]+/g, '')}
            />
            <div className={globalStyle.bgWhite}>
                <div className={`${globalStyle.contentWidth}`}>
                    <div className={style.exitCentreParent}>
                        <Button
                            onClick={() => goBack()}
                            className={style.exitCentre}
                            style={{textTransform: 'none'}}
                        >
                            X Exit Centre{' '}
                        </Button>
                    </div>
                    <div className={` ${style.singleCentreBorderContainer}`}>
                        <Tab centre={centre} user={user} entityCounters={entityCounters} />
                    </div>
                </div>
            </div>
        </>
    )
}