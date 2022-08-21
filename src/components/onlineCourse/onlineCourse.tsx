import Card from '../card/onlineCourses';
import useGlobalStyle from '../../styles';
import useStyle from './style';
import { getServerData } from 'utils';
import {useState, useEffect} from 'react';
import { CoursesProps } from '@components/onlineCourse/interface';
import Pagination from '@components/shared/pagination';
import SearchIcon from '@material-ui/icons/Search';
import Input from '../shared/input';
import Button from '../button';
import { useRouter } from 'next/router';

interface Props {
    courses: CoursesProps;
    pageUrl: string;
}

export default function CoursesDisplay({ courses, pageUrl }: Props) {
    const globalStyle = useGlobalStyle();
    const { pageCount, limit, totalCount } = courses; 
    const [searchList, setSearchList] = useState<any>();
    const [isLoading, setIsloading] = useState(false)
    const [state, setState] = useState()
    const [message, setMessage] = useState('')
    const router = useRouter();
    const style = useStyle();
    const { pageId = 1 } = router.query; 
    
    useEffect(() => {
        setSearchList(courses)

        if(state === ""){
            setSearchList(courses)
        }
    },[courses, state])

    const folderId = router?.query?.folderId

    const searchResult = async () => {
        setMessage('');
        try {
            setIsloading(true)
            const {data} = await getServerData(`/course/search?phrase=${state}&folderId=${folderId}`);
            setSearchList(data);
            setIsloading(false)
        } catch ({ message }) {
            setMessage(message);
        }
    };

    const handleSearch = (e) => {
        setState(e.target.value)
    }

    return (
        <>
            <div
                className={``}
            > 
                <div style={{width: '300px', position: 'relative'}}>
                    <Input
                        id="search"
                        type="text"
                        placeholder="Search"
                        value={state}
                        onChange={(e) => handleSearch(e)} 
                    />
                    <Button
                        className={style.folderSearch}
                        size="small"
                        disableRipple
                        disableFocusRipple
                        onClick={() => searchResult()}
                    >
                        <SearchIcon color="inherit" />
                    </Button>
                </div>
                {searchList?.courses?.length > 0 ? (
                    searchList.courses.map((course, index) => (
                        <div
                            key={index}
                            className={`flex33 ${globalStyle.top1rem} ${globalStyle.noPadding} `}
                        >
                            <Card course={course} index={index} /> 
                        </div>
                    ))
                ) : (
                    <h1>No courses found</h1>
                )}
            </div>

            <Pagination
                pageId={pageId}
                pageCount={pageCount}
                pageUrl={pageUrl}
                limit={limit}
                totalCount={totalCount}
            />
        </>
    );
}
