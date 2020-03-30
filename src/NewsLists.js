import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';


const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160',
};

const NewsList = ({ category }) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category=${category}`;
                const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=64ff34566c1e49398b0cf686cc89628f`);

                setArticles(response.data.articles);
                console.log(query);
            }catch(e){
                console.log(e);
            }

            setLoading(false);
          //  console.log(query);
        }
        fetchData();
    }, [category]);

    if (loading) {
        return (
            <NewsListBlock>로딩 로딩 로딩 ....</NewsListBlock>
        );
    }

    if (!articles){
        return null;
    }

    return(
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};


export default NewsList;
