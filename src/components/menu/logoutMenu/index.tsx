import useStyle from './style';
import { useState } from 'react';
import Button from '../../button';
import {useRouter} from 'next/router';
import LinkComponent from '../../shared/link';
import AddCentre from '../../createCentreMobile';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function LogoutMenu() {
    const style = useStyle();
    const router = useRouter();
    const [show, setShow] = useState(false);

    const menu = [
        {
            title: 'Our Solutions',
            link: '',
            icon: true,
            content: [
                {
                    title: 'Talent Assessment',
                    link: 'https://contentionary.com/features/educators-exam-manager',
                },
                {
                    title: 'Elearning',
                    link: 'https://contentionary.com//features/online-learning-video-and-audio',
                },
                {
                    title: 'Sales',
                    link: 'https://contentionary.com/features/online-course-merchants',
                },
                {
                    title: 'Our API Integration',
                    link: 'https://contentionary.com/integration',
                },
                {
                    title: 'Contentionary Marketplace',
                    link: 'https://contentionary.com/market-place',
                },
            ]
        },
        {
            title: 'Resources',
            link: 'https://www.contentionary.group/resources',
            icon: false,
        },
        {
            title: 'Pricing',
            link: '/pricing',
            icon: false,
        }
        
    ]

    return (
        <div className={style.container}>
                <Button
                    variant="outlined"
                    color="primary"
                    style={{textTransform: 'none'}}
                    size="small"
                    className={style.button}
                    onClick={() => router.push('/login')}
                >
                    Login
                </Button>

                <Button
                variant="contained"
                color="primary"
                style={{textTransform: 'none'}}
                size="small"
                className={style.button}
                onClick={() => router.push('/create-account')}
            >
                Create Account
            </Button>
            <AddCentre createCentre centreClass={style.centreClass} />
            <div>
                {menu.map((content, index) => {
                    return (
                        <div>
                            <div key={index} style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => content.title === "Pricing" ? router.push(content.link) : content.title === "Our Solutions" ? setShow(!show) : content.title === "Resources" && router.push(content.link) } >
                                <p className={style.linkTitle} >{content.title}</p>
                                {content.icon  && <KeyboardArrowDownIcon />}
                            </div>
                            {content.title === "Our Solutions" && 
                                content.content.map((menu, index) => {
                                    return (
                                        show && 
                                            <LinkComponent
                                                key={index}
                                                text={menu.title}
                                                link={menu.link}
                                                className={style.link}
                                            />
                                        
                                    )
                                })
                            }
                        </div> 
                    )
                })}
            </div>
            <div>
                <AddCentre marketplace marketplaceClass={style.centreClass} />
            </div>
            

        </div>
    )
}