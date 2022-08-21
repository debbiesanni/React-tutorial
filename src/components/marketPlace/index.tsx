import Link from '../shared/link';
import useGlobalStyle from '../../styles';
import useStyle from './style';
import Button from '../button';
import TabLink from './linkTab';
import PublicExams from './publicExam';
import PublicCentres from '../centre/publicSlider';
import JoinLeagues from './joinLeage';
import PreparatoryMarketplace from './preparatoryMarketplace';
import PublicOnlinCourses from '../onlineCourse/publicSlider';
import { useRouter } from 'next/router';
import { showSideNav } from '../../redux/slice/settings';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { UserProps } from 'redux/slice/user';
import { session } from 'utils';

interface Props {
    centres: any;
    exams: any;
    courses: any;
    publicationCategories: any;
    user: UserProps;
    categories: any;
}

export default function MarketPlace({
    centres,
    exams,
    courses,
    publicationCategories,
    user,
    categories,
}: Props) {
    user = user || (session.get('user') as unknown as UserProps);
    const globalStyle = useGlobalStyle();
    const router = useRouter();
    const dispatch = useDispatch();
    const style = useStyle();
    const tabSettings = {
        centre: [4, 3, 2, 1],
        exam: [4, 3, 2, 1],
        league: [4, 2, 1, 1],
        onlineCourse: [3, 2, 1, 1],
        publication: [3, 2, 2, 1],
    };
    const sliderPadding = {
        sliderPadding: '20px',
        mdSliderPadding: '20px',
        smSliderPadding: '20px',
        xsSliderPadding: '20px',
    };
    const examSliderPadding = {
        sliderPadding: '20px',
        mdSliderPadding: '20px',
        smSliderPadding: '20px',
        xsSliderPadding: '20px',
    };
    const onlineCourseSliderPadding = {
        sliderPadding: '100px',
        mdSliderPadding: '0px',
        smSliderPadding: '30px',
        xsSliderPadding: '30px',
    };

    useEffect(() => {
        dispatch(showSideNav(false));
    }, [dispatch]); 

    return (
        <div>
            <div
                className={`${globalStyle.textAlignCenter} ${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifyCenter}`}
            >
                <div
                className={`${globalStyle.contentWidth}`}>
                    <div
                        className={`${globalStyle.top1rem} ${globalStyle.padding1rem}`}
                    >
                        <PreparatoryMarketplace  allowFlexCol={false} alignLeft={true} showSearch={true} />
                    </div>
                </div>
                
            </div>

            <div
                className={`${globalStyle.contentWidth}  ${globalStyle.mt15px} ${globalStyle.mt3rem}`}
            >
                <div className={`${style.textHolder}  ${style.textNote}`}>
                    Access Online courses, prep exam questions, leagues,
                    worksheets, templates, projects and other publications from
                    top experts.
                </div>
            </div>
            <TabLink />

            <div
                className={`${globalStyle.contentWidth} ${globalStyle.mt2rem}`}
            >
                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
                >
                    <h3 className={style.topLeaningCentre}>Top Centres</h3>
                    <Link
                        text="See more centres"
                        link="/public-centres"
                        className={`${globalStyle.boldFont} ${globalStyle.primaryColor}`}
                    />
                </div>
                <div className={`${globalStyle.top1rem}`}>
                    <PublicCentres
                        sliderPadding={sliderPadding}
                        border={true}
                        sliderToShow={tabSettings.centre}
                        centres={centres}
                    />
                </div>

            </div>    
                <div className={` ${globalStyle.top1rem} ${style.exploreExamContainer}`}>
                    <PublicExams
                        sliderPadding={examSliderPadding}
                        sliderToShow={tabSettings.exam}
                        categories={categories}
                        exams={exams}
                    />
                </div>
                <div
                    className={`${globalStyle.contentWidth} ${globalStyle.mt2rem}`}
                >
                    <div>
                        <p className={style.tryPremiumText}>Premium Centre gives you a vast library of prep contents and prep exams on all categories by top industry expert. Stay at the top by joining the Premium Centre.</p>
                        <div className={`${globalStyle.displayFlex} ${globalStyle.alignFlexEnd}`} style={{marginBottom: '4rem'}}>
                            <Button
                                color="primary"
                                variant="outlined"
                                onClick={() => router.push('/premium-centres')}
                                style={{textTransform: 'none'}}
                                className={style.tryPremiumButton}
                            >
                                Try Premium Centre
                            </Button> 
                            <Link
                                text="Learn more about Premium"
                                link="/public-centres"
                                className={`${style.learnMoreAboutPremium}`}
                            />
                        </div>
                    </div>
                    <div
                        className={`${globalStyle.top1rem} ${globalStyle.padding1rem}`}
                        style={{ border: 'solid 1px #dbdbdb', borderRadius: 10 }}
                    >
                        <JoinLeagues allowFlexCol={false} alignLeft={true} showSearch={true} />
                        
                    </div>
                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.mt2rem}`}
                >
                    <h3 className={style.topExam}>Top Online Courses</h3>
                    <Link
                        text="See All"
                        link="/public-online-courses-page"
                        className={`${globalStyle.boldFont} ${globalStyle.primaryColor}`}
                    />
                </div>
                <div className={` ${globalStyle.top1rem}`}>
                    <PublicOnlinCourses
                        sliderPadding={onlineCourseSliderPadding}
                        sliderToShow={tabSettings.onlineCourse}
                        courses={courses?.data.courses}
                    />
                </div>
            </div>
            <div className={` ${globalStyle.mt3rem}`}>
                <h1
                    className={`${globalStyle.contentWidth} ${style.topExam} ${globalStyle.pt2rem} ${globalStyle.pb1rem}`}
                >
                    Featured publication by category
                </h1>
                <div
                    className={`${globalStyle.contentWidth} ${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.justifySpaceBtw}`}
                >
                    {publicationCategories?.data?.map(
                        ({ name, id }, index) =>
                            index <= 7 && (
                                <Link
                                    className={`flex25 ${globalStyle.textAlignCenter} ${globalStyle.primaryColor} ${style.cat}`}
                                    key={index}
                                    link={`/public-publications-page?publicationCategoryId=${id}&pageId=1&limit=50`}
                                >
                                    {name}
                                </Link>
                            )
                    )}
                </div>
                <div
                    className={`${globalStyle.contentWidth} ${globalStyle.textAlignRight} ${globalStyle.mt2rem}`}
                >
                    <Link
                        className={` ${globalStyle.blackColor}`}
                        link={`/public-publications-page?pageId=1&limit=50`}
                    >
                        See all
                    </Link>
                </div>
            </div>
        </div>
    );
}
