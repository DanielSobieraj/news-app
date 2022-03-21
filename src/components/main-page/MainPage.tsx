import React, { useContext, useEffect, useState } from 'react';
import { getArticlesRequest, getSourcesRequest } from '../../api/apiClient';
import { SearchModalContext } from '../../common/context/contexts';
import { Endpoint } from '../../common/enum/Endpoint';
import Article from '../articles/article/Article';
import { ArticleProps } from '../articles/article/ArticleProps';
import MainArticle from '../articles/main-article/MainArticle';

const MainPage = () => {
    const [articles, setArticles] = useState<ArticleProps[]>([]);
    const [page, setPage] = useState(1);
    const [categories, setCategories] = useState<Record<string, string>>({});
    const searchModalValue = useContext(SearchModalContext);

    console.log(searchModalValue);

    useEffect(() => {
        const getArticles = async () => {
            const response = await getArticlesRequest(Endpoint.Everyting, {
                q: searchModalValue,
                language: 'en',
                pageSize: 5,
                page,
            });
            setArticles((articles) => [...articles, ...response.articles]);
        };
        getArticles();
    }, [page, searchModalValue]);

    useEffect(() => {
        const getSources = async () => {
            const response = await getSourcesRequest(Endpoint.Sources, { country: 'us' });
            const sourceCategoriesMapped = response.sources.map(({ name, category }) => [name, category]);
            setCategories(Object.fromEntries(sourceCategoriesMapped));
        };
        getSources();
    }, []);

    const handleLoadMoreClick = () => setPage((prevPageSize) => prevPageSize + 1);

    return (
        <div className="my-4">
            <MainArticle />
            <div className="row">
                {articles.map(({ title, publishedAt, description, url, urlToImage, source }, key) => (
                    <div className="col-md-6" key={key}>
                        <Article
                            title={title}
                            category={categories[source?.name ?? '']}
                            publishedAt={publishedAt}
                            description={description}
                            url={url}
                            urlToImage={urlToImage}
                        />
                    </div>
                ))}
            </div>
            <div className="col-col-md-12 text-center mb-3">
                <button type="button" className="btn btn-outline-dark" onClick={handleLoadMoreClick}>
                    Load more...
                </button>
            </div>
        </div>
    );
};

export default MainPage;
