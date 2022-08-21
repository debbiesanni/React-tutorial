import { makeStyles } from '@material-ui/core/styles';
import Wrapper from '../components/wrapper';
import Image from '../components/shared/image';
import Button from '../components/button';
import {useRouter} from 'next/router';
import Head from '../components/head';

const useStyle = makeStyles({
    container: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3rem',
        padding: '0 2rem',
        height: '75vh'
    },
    title: {
        color: '#F57E27',
        marginBottom: '3rem'
    },
    description: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '22px',
        color: '#000000',
        marginTop: '3rem',
        marginBottom: '2rem'
    },
})

function ExpiredCentre(props) {

    const style = useStyle();
    const nextRouter = useRouter();
    const {centreId=null} = nextRouter.query;
    
    return (
        <Wrapper
            user={props?.user && JSON.parse(props.user.user)}
            myCentres={props?.myCentres?.data?.centres}
            showFooter={false}
            showHeader={true}
            showLogOutHeader={false}
            title="Centre Expired"
            description="The centre you are trying to open has expired, contact the centre owner for details"
        >
            <div className={style.container}>
                <h1 className={style.title}>Inactive Centre</h1>
                <Image
                    src="/media/images/default/expired-centre.svg"
                    alt="Exam"
                    className="image"
                />
                <p className={style.description}>The Private Centre you want to access is not active at the moment, please try again later.</p>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => nextRouter.back()}
                    style={{textTransform: 'none', margin: '1rem 0'}}
                >
                    Exit Centre
                </Button>
            </div>
        </Wrapper>
    )
};

export default ExpiredCentre