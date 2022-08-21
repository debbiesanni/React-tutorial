import { HideSmDown } from '../../hide';
import Image from '../../shared/image';
import Review from '../../review';
import useGlobalStyle from '../../../styles';
import useStyle from '../style';
import Link from '../../shared/link';
import { CoursePageProps } from '../interface';
import Tabs from '../../shared/tab';
import Home from './home';
import { useRouter } from 'next/router';
import Content from './content'; 
import Edit from '../update';
import { useState, useEffect } from 'react';
import Button from '../../button';
import KeyValuePair from '../../shared/keyValuePair';
import Delete from '../../shared/delete';
import { removeCourse } from '@redux/slice/course'; 
import useCentreStyle from '../../centre/style';
import EmbededExams from '@components/shared/embededExam';
import EmbededLeagues from '@components/shared/embededLeague';
import Subscribe from './subscribe';
import UnSubscribe from '../../shared/subscribe/deleteSubscribe';
import { Auth } from '@utils/index';
import Toast from '../../shared/toast';
import SettingsIcon from '@material-ui/icons/Settings';
import ShareIcon from '@material-ui/icons/Share';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AssessmentIcon from '@material-ui/icons/Assessment';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import HomeIcon from '@material-ui/icons/Home';
import ShareButton from '../../shared/share'; 

export default function SingleOnlineCoure({
    centre,
    contents,
    course,
    user,
}: CoursePageProps) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const router = useRouter();
    const [message, setMessage] = useState('');
    const [url, setUrl] = useState<string>();
    const { centreId } = router.query;
    const centreStyle = useCentreStyle();
 
    useEffect(() => {
        setUrl(window.location.href)
    },[])
    
    const tabBar = [<div className={style.tabTitle}><HomeIcon/>Home</div>, 
    <div className={style.tabTitle}><YouTubeIcon/>Course Contents</div>, 
    <div className={style.tabTitle}><AssessmentIcon/>Exams</div>, 
    <div className={style.tabTitle}><EmojiEventsIcon/>Leagues</div>];
    const tabContent = [
        <Home
            courseDetails={course}
            learnings={course?.learnings || []}
            user={user}
        />,
        <Content user={user} centre={centre} contents={contents} course={course} />,
        <EmbededExams contentId={course?.id} centreId={centre.id} centre={centre} />,
        <EmbededLeagues contentId={course?.id} centre={centre} />,
    ];
  
    let subscribeButton = (
        <Subscribe
            text="Subscribe"
            url={`/centre/${centreId}/course/${course.id}/subscribe${router.query?.referralCode ? `?referralCode=${router.query.referralCode}` : ''}`}
            id={course.id}
            centreId={centreId as string}
            user={user}
        />
    );
    
    if (Auth(user).isManager(centreId as string)) 
        subscribeButton = (
            <Link
                text={
                    <Button
                        onClick={() => {}}
                        color="primary"
                        variant="contained"
                    >
                        Subscribers
                    </Button>
                }
                link={`/centre/${centreId}/course/${course.id}/subscribers`}
            />
        );

    else if (Auth(user).isCourseSubscriber(course.id as string)) 
        subscribeButton = (
            <UnSubscribe
                text={
                    Auth(user).isCourseSubscriber(course.id)
                        ? 'Unsubscribe'
                        : 'Pending'
                }
                url={`/centre/${centreId}/course/${course.id}/unsubscribe`}
                id={centreId as string}
                user={user}
            />
        );
    else if (Auth(user).isPendingSubscriber(centreId as string))
        subscribeButton = (
            <Button
                onClick={() =>
                    setMessage("Sorry Your Request hasn't been accepted")
                }
                color="primary"
                variant="contained"
            >
                Pending
            </Button>
        );

    const copy = () => {
        setMessage('');
        navigator.clipboard.writeText(course?.id);
        setMessage("Copied")
    }
    
    return (
        <> 
            <div
                className={`${globalStyle.displayFlex} ${style.singleBgCard} ${globalStyle.padding1rem}`}
            >
                <div className={`${globalStyle.flex1} ${style.pr40}`}>
                    <div
                        className={``}
                        style={{ alignItems: 'center' }}
                    >
                        <h1 className={`${style.courseTitle}`}>{course.name}</h1>
                        <div style={{marginBottom: '.5rem'}} className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${style.centreNameContainer}`}>
                            <div
                                className={`${style.courseCentre} `}
                            > 
                                Course centre:
                            </div>
                            <div className={`${style.centreName}`}>{centre.name}</div>
                        </div>

                        <div className={style.courseId}><span style={{color: 'white', fontWeight: 'bold'}}>CourseID:</span> {course?.id}</div>

                        <KeyValuePair
                            text={'Subscribers'}
                            count={course.subscriberCount}
                            className={style.subscribersCounter}
                            textClassName={style.subscribersText}
                        />
                    </div> 

                    <div className={` ${style.menuContainer}`}>

                    <div className={`${style.coursePrice}`}> 
                        Price:  &#8358;{course.price}
                    </div> 

                    <ShareButton 
                        name={course?.name} 
                        url={`${url}?referralCode=${user?.id}`} 
                        description={course?.description} 
                        className={style.courseShareButton}
                        iconClassName={style.courseShareIcon}
                    >
                        <div className={`${style.shareContent}`} style={{width: '100px'}}>
                            <ShareIcon/>
                            <p>Share Link</p> 
                        </div>
                    </ShareButton>

                    <div className={style.courseEditDelete}>
                        {Auth(user).isManager(centre.id) && (
                            <>
                            <div
                                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
                            >
                                <div
                                    className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
                                >
                                    <Edit course={course} centreId={centreId} />
                                    <Delete
                                        name="Course"
                                        url={`/centre/${centreId}/course/${course.id}`}
                                        icon={true}
                                        redirect={`/${centre.slug}`} 
                                        reduxCentreName={removeCourse}
                                        dataToDelete={course}
                                    />
                                    <div className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.flexColumn}`} style={{color: '#555555', cursor: 'pointer'}} onClick={() => router.push(`/${centre.slug}/${centre.id}/${course.slug}/${course.id}/certificate?contentType=COURSE&currentPage=Manage_Certificate`)}>
                                        <SettingsIcon color='inherit' />
                                        <span style={{color: '#555555', fontSize: '13px'}}>Manage Certificate</span>
                                    </div>
                                </div>
                            </div>
                            </>
                        )}
                        {/* //  : 
                        // <div> {subscribeButton} </div>  */}
                    </div>
                </div>
                <div className={style.mobileCourseSubscriberContainer}> {subscribeButton} </div>
                </div>
                <HideSmDown>
                    <div style={{width: '15rem', height: '300px', position: 'relative', margin: 0, padding: 0 }}>
                        <Image
                            src={course?.imageUrl ? course?.imageUrl : '/media/images/default/bookImg.svg'}
                            alt=""
                            width="100%"
                            height="100%"
                            className={style.courseImage}
                        />
                    </div>
                </HideSmDown> 
            </div>
            <div className={`${globalStyle.displayFlex} `}>
                <div style={{flexGrow: 1}}>
                    <Tabs
                        tabs={tabBar}
                        tabPanel={tabContent}
                        appBar={`${centreStyle.appBar} ${style.tabAppbar}`}
                        appContainerClass={centreStyle.appBarContainer4Course}
                        defaultActive={true}
                    />
                </div>
                <div className={style.rightSideBar}>{subscribeButton}</div>
            </div>
            
            <div id="review">
                <Review id={course.id} />
            </div>
            {message && <Toast message={message} />}
        </>
    );
}
