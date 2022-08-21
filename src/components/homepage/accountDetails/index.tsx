import useStyle from './style';
import useGlobalStyle from '../../../styles';
import {useRouter} from 'next/router';

export default function AccountDeatils({user,}) {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const router = useRouter();

    
    const data = [
        {
            title: 'Personal Info',
            content: {
                name: `${user?.firstname} ${user?.surname}`,
                email: `${user?.email}`,
                number: `${user?.phoneNumber}`,
            },
            edit: 'edit',
        },
        {
            title: 'Username',
            content: {name: `${user?.username}`},
            edit: 'edit',
        },
        {
            title: 'User ID',
            content: {name: `${user?.id}`},
            edit: '',
        },
        {
            title: 'Verification Status',
            content: {name: `${user?.status}`},
            edit: '',
        },
    ]
    
    const DataCall = (data) => {
        return data.map((content, index) => (
            <div className={style.rightItem} key={index}>
                <p className={style.title}>{content.title}</p>
                <div className={`${style.contentContainer} ${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.justifySpaceBtw} ${globalStyle.alignFlexEnd}`}>
                    <div>
                        <p className={content.content.name === "ACTIVE" ? `${style.colorGreen}` : `${style.content}`}>{content.content.name}</p>
                        <p className={style.content}>{content.content.email}</p>
                        <p className={style.content}>{content.content.number}</p>
                    </div>
                    
                    <div>
                        <p className={style.edit} onClick={() => router.push('/settings')}>{content.edit}</p>
                    </div>
                </div>
            </div>
        ))
    }

    
    

    return (
        <div className={style.container}>
            <div className={style.leftSide}>
                <h2 className={style.leftTitle}>Your Account</h2>
            </div>
            <div className={style.rightSide}>
                {DataCall(data)}
            </div>
        </div>
    )
}