import Image from '../shared/image';
import Profile from '../../../public/media/images/default/centreImg.svg';
import { contents } from '../content/exam';
import useGlobalStyle from '../../styles';
import Link from '../shared/link';
import useStyle from './style';
import LinearProgress from '@material-ui/core/LinearProgress';
import { allowTextLength } from '../shared/textLength';
import LinkComponent from '../shared/link';
import PublicOnlineCourse from './onlineCourse';

interface Props {
    courses: any;
    pageUrl: any
}

export default function MyOnlineCourse({courses, pageUrl}: Props) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();

    return (
        <div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
            >
                <h2>My Online Courses</h2>
                <Link
                    text="Get More Courses"
                    link="/public-online-courses-page"
                    className={globalStyle.primaryColor}
                />
            </div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp}`}
            >
                {contents.map((e, index) => (
                    <div className="flex33">
                        <LinkComponent
                            text={
                                <div
                                    key={index}
                                    className={`${globalStyle.displayFlex} ${globalStyle.bottom1rem}  ${globalStyle.justifySpaceBtw} ${style.card}`}
                                >
                                    <div className={style.img}>
                                        <Image
                                            src={Profile}
                                            alt="image"
                                            width="110px"
                                            height="180px"
                                        />
                                    </div>
                                    <div
                                        className={`${globalStyle.flex1} ${globalStyle.padding1rem}`}
                                    >
                                        <h3 className={style.name}>
                                            {allowTextLength(e.name, 35)}
                                        </h3>
                                        <div className={globalStyle.mt2rem}>
                                            10%
                                        </div>
                                        <LinearProgress
                                            variant="determinate"
                                            value={10}
                                        />
                                        <div
                                            className={`${globalStyle.primaryColor} ${globalStyle.top1rem}`}
                                        >
                                            <strong>Continue</strong>
                                        </div>
                                    </div>
                                </div>
                            }
                            link="/"
                        />
                    </div>
                ))}
            </div>
            <h1 className={globalStyle.bottom1rem}>Recommended for you</h1>
            <PublicOnlineCourse courses={courses} pageUrl={pageUrl} />
        </div>
    );
}
