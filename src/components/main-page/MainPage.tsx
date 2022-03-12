import React, { useEffect, useState } from 'react';
import { getArticlesRequest } from '../../api/apiClient';
import { ArticlesResponseProps } from '../../api/response/ArticlesResponseProps';
import Article from '../articles/article/Article';
import MainArticle from '../articles/main-article/MainArticle';

const MainPage = () => {
    const [articles, setArticles] = useState<ArticlesResponseProps>();
    const [pageSize, setPageSize] = useState(5);

    useEffect(() => {
        async function getArticles() {
            const response = await getArticlesRequest(`everything`, { q: 'bitcoin', pageSize });
            setArticles(response);
        }
        getArticles();
    }, [pageSize]);

    const handleLoadMoreBtn = () => setPageSize((prevPageSize) => prevPageSize + 5);

    return (
        <div className="my-4">
            <MainArticle />
            <div className="row">
                {articles?.articles.map(({ title, publishedAt, description, url, urlToImage }, key) => (
                    <div className="col-md-6" key={key}>
                        <Article
                            title={title}
                            publishedAt={publishedAt}
                            description={description}
                            url={url}
                            urlToImage={urlToImage}
                        />
                    </div>
                ))}
            </div>
            <div className="col-col-md-12 text-center mb-3">
                <button type="button" className="btn btn-outline-dark" onClick={handleLoadMoreBtn}>
                    Load more...
                </button>
            </div>
        </div>
    );
};

export default MainPage;
