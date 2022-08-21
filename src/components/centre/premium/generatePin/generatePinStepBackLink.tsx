import useGlobalStyle from '../../../../styles';
import Link from '../../../shared/link';
import { useRouter } from 'next/router';

function Settings({ centreSlug, title }) {
    const globalStyle = useGlobalStyle();
    const router = useRouter();

    return (
        <div style={{borderBottom: '1px solid #BABABA', padding: '15px 25px'}}
            className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.alignItems} ${globalStyle.flexWrp}`}
        >
            <div className={`${globalStyle.primaryColor}`} style={{fontSize: 20, fontWeight: 500}}>{title}</div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
            >
                <Link
                    text="Dashboard"
                    link="/home"
                    className={globalStyle.primaryColor}
                />
                <span className={`${globalStyle.mr1rem} ${globalStyle.ml1rem}`}>
                    /
                </span>
                <Link
                    text="Center"
                    link={`/${centreSlug}`}
                    className={globalStyle.primaryColor}
                />
                <span className={`${globalStyle.mr1rem} ${globalStyle.ml1rem}`}>
                    /
                </span>
                <span
                    onClick={() => router.back()}
                    className={`${globalStyle.cursor} ${globalStyle.primaryColor}`}
                >
                    Back
                </span>
                <span className={`${globalStyle.mr1rem} ${globalStyle.ml1rem}`}>
                    /
                </span>
                <span className={globalStyle.greyColor}>Generate Pin</span>
            </div>
        </div>
    );
}

export default Settings;
