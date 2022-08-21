import Card from '../card/index';
import useGlobalStyle from '../../styles';
import NoContent from '@components/shared/noContent';
import { useRouter } from 'next/router';
import Tab from '../shared/tab';
import useStyle from './style';
import { getServerData } from '../../utils';
import { useEffect, useState } from 'react';
import Slider from '../shared/carousel';

export default function PublicExams({
    exams,
    categories,
    sliderPadding,
    sliderToShow,
}) {
    const globalStyle = useGlobalStyle(); 
    const style = useStyle();
    const [result, setResult] = useState(exams?.data?.exams);
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();
    useEffect(() => {
        async function getExams(id) {
            try {
                const { data } = await getServerData(
                    id === 'all'
                        ? `/exams?limit=4`
                        : `/exams?publicCategoryId=${id}&limit=4`
                );
                setResult(data.exams);
            } catch ({ message }) {
                setMessage(message);
            }
        }
        getExams(id);
    }, [id]);

    const content =
        result?.length > 0 ? (
            <Slider
                slidesToScroll={1}
                showArrows
                centerPadding={sliderPadding.sliderPadding}
                centerMode={true}
                infinite={result?.length > 2 ? true : false}
                slidesToShow={sliderToShow[0]}
                responsive={[
                    {
                        breakpoint: 1366,
                        settings: {
                            slidesToShow: sliderToShow[1],
                            centerPadding: sliderPadding.mdSliderPadding,
                        },
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: sliderToShow[2],
                            centerPadding: sliderPadding.mdSliderPadding,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: sliderToShow[3],
                            centerPadding: sliderPadding.smSliderPadding,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: sliderToShow[3],
                            centerPadding: sliderPadding.xsSliderPadding,
                        },
                    },
                ]}
                className={`pubExamSlider landingPageSliderWidth`}
                speed={1000}
            >
                {result?.map((content, index) => (
                    <Card key={index} {...content} />
                ))}
            </Slider>
        ) : (
            <NoContent name="exam" />
        );
    const tabs = [
        'All',
        ...categories?.data.map(({ name, id }, index) => name),
    ];
    const tabPanel = [
        content,
        ...categories?.data.map(({ name, id }, index) => content),
    ];
    const ids = ['all', ...categories?.data.map(({ name, id }, index) => id)];

    return (
        <>
            <h2
                className={`${globalStyle.mt2rem} ${globalStyle.textAlignCenter} ${globalStyle.pb1rem} ${style.blacK} ${style.exploreExamTitle}`}
            >
                Explore top exams from examiners all over the world
            </h2>
            <Tab
                tabs={tabs}
                tabPanel={tabPanel}
                defaultActive={true}
                appContainerClass={`${style.width}`}
                tabClass={`${style.lightGreenBg} ${style.tabContainer}`}
                tabPanelStyle={style.tabPanelStyle}
                appBar={`${style.width}`}
                ids={ids}
                setId={setId}
            />
            <div className={` ${globalStyle.textAlignRight}`}>
                <span
                    className={`${globalStyle.cursor} ${globalStyle.primaryColor} ${globalStyle.boldFont} ${style.exploreSeeAll}`}
                    onClick={() => router.push('/public-exams')}
                >
                    See All
                </span>
            </div>
        </>
    );
}
