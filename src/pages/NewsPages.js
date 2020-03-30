import React from 'react';
import Categories from '../Components/Categories';
import NewsList from '../NewsLists';

const NewsPage = ({ match }) => {
    const category = match.params.category || 'all';

    return(
        <>
            <Categories />
            <NewsList category={category} />
        </>
    );
};

export default NewsPage;