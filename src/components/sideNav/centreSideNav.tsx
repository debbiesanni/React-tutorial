import useStyle from './style';
import useGlobalStyle from '../../styles';
import LinkComponent from '../shared/link';
import CenterFocusWeak from '@material-ui/icons/CenterFocusWeak';
import IconButton from '@material-ui/core/IconButton';
import ImageUpload from '../shared/imageUpdate/singleCentreImage';
import Divider from '../horizontalRule';
import { Auth } from '../../utils';
import {useState, useEffect} from 'react';
import Edit from '../centre/update';
import Delete from '../shared/delete';
import { AccountBalanceWallet } from '@material-ui/icons';

export default function Sidenav({ user, logo, centre, entityCounters }) {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const [currentWidth, setCurrentWidth] = useState<number>() 

    useEffect(() => {
        setCurrentWidth(window.innerWidth)
    },[])
    
    
    const sideMenu = [
        {
            name: 'Subscribers',
            content: entityCounters.subscribers,
        },
        {
            name: 'Exams',
            content: entityCounters.exams,
        },
        {
            name: 'Online Courses',
            content: entityCounters.courses,
        },
        {
            name: 'Publications',
            content: entityCounters.publications,
        },
        {
            name: 'Leagues',
            content: entityCounters.leagues,
        },
        {
            name: 'Questions',
            content: entityCounters.questions,
        },
    ];
    
    function MenuFunc(menus, className) {
        return menus.map((menu, index) => (
            <p key={index} className={`${globalStyle.paddingLR1rem} ${globalStyle.displayFlex}  ${globalStyle.alignItems} ${globalStyle.justifySpaceBtw}  ${globalStyle.bottom1rem}`}>
                <span className={className} >{menu.name}</span>
                <span className={style.contentCount} >{menu.content}</span>
            </p>
        ));
    }
    

    
    return (
        <div className={style.container}>
            <div className={`${style.border} ${style.firstSideNavCentre}`} style={{backgroundColor: 'white'}}>
                <div className={style.imageParent}> 
                    <ImageUpload
                        id={centre?.id}
                        user={user}
                        defaultImage={logo}
                        url={`/centre/${centre?.id}/logo`}
                    />
                </div> 
                
                <div
                    className={`${style.links} ${globalStyle.boldFont} ${style.font15}  ${currentWidth >= 400 && currentWidth <=600 && style.marginTop}`}
                >
                    {MenuFunc(sideMenu, `${globalStyle.greyColor}`)}
                </div>
                <div style={{padding: '.8rem'}}>
                    <Divider />
                </div>
                {Auth(user).isManager(centre.id) && (
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.justifyCenter} ${globalStyle.alignItems} ${globalStyle.noPadding} ${globalStyle.noMargin}`}
                        style={{ height: '30px'}}
                    >
                        <Edit
                            centre={centre}
                        />
                        
                        <Delete
                            name="Centre"
                            url={`centre/${centre.id}`}
                            icon={true}
                            redirect={`/my-centres`}
                        />
                        <LinkComponent
                        title="Manage centre"
                            text={
                                <IconButton>
                                    <CenterFocusWeak
                                        className={
                                            globalStyle.greyColor
                                        }
                                    />
                                </IconButton>
                            }
                            link={`/centre/${centre.id}/managers`}
                        />
                        <LinkComponent
                        title="Centre wallet"
                            text={
                                <IconButton>
                                    <AccountBalanceWallet
                                        className={
                                            globalStyle.greyColor
                                        }
                                    />
                                </IconButton>
                            }
                            link={`/wallet?centreId=${centre.id}`}
                        />
                        
                    </div>
                )}
                
            </div>
        </div>
    );
}
