import React, { ReactNode } from 'react';
import SearchResult from '../../components/search/display';
import { session } from 'utils';
import Wrapper from '@components/wrapper';
import { useRouter } from 'next/router';

const App = (): ReactNode => {
    const router = useRouter();
    const user = session.get('user');
    return (
        <Wrapper
            title="Search"
            description="search description"
            showHeader={true}
            showSideNav={true}
            user={user} 
        >
            <SearchResult
                phrase={router?.query?.phrase}
            />
        </Wrapper>
    );
};

export default App;
