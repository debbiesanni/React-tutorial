import Link from 'next/link';
import useStyles from '../../styles';
import Image from '../shared/image';
import profileIcon from '../../../public/media/images/default/profile.svg';
import { UserProps } from 'redux/slice/user';

interface Props {
    containerClassName?: string;
    contentClass?: string;
    user?: UserProps | any;
    title?: string;
    titleClass?: string;
    linkName?: string;
    link?: string;
    linkColor?: string
    imageWidth?: string;
    imageHeight?: string;
}
export default function ProfileLink({ 
    containerClassName, 
    user, 
    contentClass, 
    title, 
    titleClass,
    link,
    linkName,
    linkColor,
    imageWidth,
    imageHeight,
}: Props): JSX.Element {

    const globalStyle = useStyles(); 

    return (
        <div
            className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.bottom1rem} ${globalStyle.paddingLR1rem} ${containerClassName}`}
        >
            <Image
                src={`${user?.avatar}` || profileIcon}
                width={imageWidth ? imageWidth : "60px"}
                height={imageHeight ? imageHeight : "60px"}
                alt={user?.firstname}
                className={`${globalStyle.bRadius50} `}
            />
            <div className={` ${globalStyle.greyColor} ${contentClass}`}>
                {title ? <div className={titleClass}>{title}</div> :
                    <>
                            <div>
                                {user?.firstname} {user?.surname}
                            </div>
                            <div
                                className={`${globalStyle.bottom1rem}`}
                                style={{
                                    wordBreak: 'break-all',
                                }}
                            >
                                {user?.email}
                            </div>
                    </>
                }
                <Link href={link ? link : "/my-profile"}>
                    <a
                        className={`${linkColor ? linkColor : globalStyle.primaryColor} ${linkColor ? linkColor : globalStyle.boldFont}`}
                    >
                       {linkName ? linkName :  'View Profile'}
                    </a>
                </Link>
            </div>
        </div>
    );
}
