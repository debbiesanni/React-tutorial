import Card from '../card/publication';
import useGlobalStyle from '../../styles';
import { getServerData } from 'utils';
import { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Input from '../shared/input';
import Loading from '../shared/isLoading';
import Button from '../button';
import { useRouter } from 'next/router';
import useStyle from './style';

interface Props {
    publications: any;
}

export default function myPublication({ publications }: Props) {
    const globalStyle = useGlobalStyle();
    const [searchList, setSearchList] = useState<any>();
    const [isLoading, setIsloading] = useState(false)
    const [state, setState] = useState()
    const [message, setMessage] = useState('');
    const router = useRouter();
    const style = useStyle();

    useEffect(() => {
        setSearchList(publications)

        if(state === ""){
            setSearchList(publications)
        }
    },[publications, state])

    const folderId = router?.query?.folderId

    const searchResult = async () => {
        setMessage('');
        try {
            setIsloading(true)
            const {data} = await getServerData(`/publication/search?phrase=${state}&folderId=${folderId}`);
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
        <div >
            <div style={{ width: '300px', position: 'relative' }}>
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
            <div
                className={`${globalStyle.displayFlex} ${style.flexColumnReverse} `}
            >
                <div className={`${style.centrePublication}`}>
                    {isLoading ? <Loading /> 
                    :
                    searchList?.publications.length > 0 ? (
                        searchList.publications.map((publication, index) => (
                            <div key={index}>
                                <Card
                                    publication={publication}
                                    index={index}
                                    centreId={publication?.centreId}
                                />
                            </div>
                        ))
                    ) : (
                        <h1>No Publications found</h1>
                    )
                    }
                </div>
            </div>
        </div>
    );
}
