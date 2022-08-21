import Card from '@components/card/league';
import useGlobalStyle from '../../styles';

export default function ProfileCentres({ leagues }) {
    const globalStyle = useGlobalStyle();

    return (
        <>
            <h3>My Leagues</h3>
            <div
                className={`${globalStyle.mt10px} ${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.justifySpaceBtw}`}
            >
                {leagues.length > 0
                    ? leagues.map((content, index) => (
                          <div key={index} className="flex25">
                              <Card content={content} />
                          </div>
                      ))
                    : "You haven't subscribe to any leagues"}
            </div>
        </>
    );
}
