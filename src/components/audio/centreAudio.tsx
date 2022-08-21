import PublicAudios from '../audio/publicSlider';
import AddBtn from '../addBtn';
import useGlobalStyle from '../../styles';
import Link from '../shared/link';

export default function LeaguePage({ sliderToShow }) {
    const globalStyle = useGlobalStyle();
    return (
        <div className={globalStyle.paddingLR1rem}>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
            >
                <AddBtn text="Add a New Audio" />
                <Link
                    link="/centre-audio-page"
                    className={globalStyle.primaryColor}
                >
                    View More
                </Link>
            </div>

            <PublicAudios sliderToShow={sliderToShow} />
        </div>
    );
}
