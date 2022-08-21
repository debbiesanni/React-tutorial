import Card from '@components/card/centre';
import useGlobalStyle from '../../styles';

export default function ProfileCentres({ myCentres }) {
    const globalStyle = useGlobalStyle();

    return (
        <>
            <h3>My Centres</h3>
            <div
                className={`${globalStyle.mt10px} ${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.justifySpaceBtw}`}
            >
                {myCentres.length > 0
                    ? myCentres.map((content, index) => (
                          <div key={index} className="flex25">
                              <Card content={content} />
                          </div>
                      ))
                    : "You haven't subscribe to any centre"}
            </div>
        </>
    );
}
