import useStyle from './style';
import SideDrawer from './sideDrawer';
import GeneralWrapper from '../centrePage/generalWrapper';
interface Props {
    centre: any;
    children: JSX.Element;
    user: any;
    type?: string;
}

export default function CentreSingleView({
    centre,
    children,
    user,
    type,
}: Props) {
    const styles = useStyle();

    return (
        <GeneralWrapper centre={centre} user={user}>
            <div
                className={`${styles.displayFlexAlignCentre} ${styles.paddingContentHolder}`}
            >
                <SideDrawer 
                    centreSlug={centre?.slug}
                    centreId={centre?.id}
                    type={type}
                    user={user}
                />
                <div style={{ marginLeft: 172, maxWidth: 1000, width: '100%' }}>
                    {children}
                </div>
            </div>
        </GeneralWrapper>
    );
}
