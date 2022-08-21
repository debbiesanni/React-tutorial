import Image from '../../../shared/image';
import useStyles from './style';

export default function CentreSingleView() {
    const styles = useStyles();

    return (
        <div
            className={`${styles.displayFlexAlignCentre} ${styles.pluginHolder}`}
        >
            <Image
                src="/media/images/default/dashbord.svg"
                alt="dashboard"
                height="22px"
                width="22.23px"
            />
            <span className={`${styles.pluge} ${styles.marginLeft15}`}>
                Modules
            </span>
        </div>
    );
}
