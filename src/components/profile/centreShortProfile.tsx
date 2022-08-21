import useGlobalStyles from '../../styles';
import useStyles from './style';
import Image from '../shared/image';
import profileIcon from '../../../public/media/images/default/profile.svg';
import { useAppSelector } from '@redux/hooks';
import LinkComponent from '../shared/link';

export default function ProfileLink({ className, user, logo }) {
    const globalStyle = useGlobalStyles();
    const style = useStyles();
    const lastname = useAppSelector(({ user }) => user?.surname); 
    const firstName = useAppSelector(({ user }) => user?.firstname);
    const avatar = useAppSelector(({ user }) => user?.avatar);
    return (
        <div
            className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.bottom1rem} ${className}`}
            style={{height: '250px'}}
        >
            {avatar ? (
                <Image
                    src={`${logo}`}
                    width="100%"
                    height="100%"
                    alt="ruth sanni"
                    className={`${style.borderRadiusTop}`}
                />
            ) : (
                <Image
                    src={profileIcon}
                    width="100%"
                    height="100%"
                    alt="ruth sanni"
                    className={`${style.borderRadiusTop}`}
                />
            )}
            <div
                className={` ${globalStyle.greyColor} ${globalStyle.textAlignCenter}`}
            >
                {!user && (
                    <div>
                        <h3 style={{marginTop: '1rem', marginBottom: '1px', paddingBottom: '0px'}}>Guest</h3>
                        <LinkComponent
                            text="Login"
                            link="/login"
                            className={` ${globalStyle.boldFont} ${globalStyle.greyColor} ${style.font15} ${globalStyle.noPadding}`}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
