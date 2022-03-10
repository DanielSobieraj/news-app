import React from 'react';
import { useEffect, useState } from 'react';
import { getMainArticleRequest } from '../../../api/apiClient';
import './MainArticle.scss';

const MainArticle = () => {
    const [mainArticle, setMainArticle] = useState([]);

    useEffect(() => {
        async function getMainArticle() {
            const response = await getMainArticleRequest('top-headlines?country=us&pageSize=1');
            setMainArticle(response.articles);
        }
        getMainArticle();
    }, []);

    return (
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark mainArticle">
            {mainArticle.map(({ title, description, url }, index) => {
                return (
                    <article className="col-md-6 mainArticle--item" key={index}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <a href={url} target="_blank" rel="noreferrer">
                            Continue reading...
                        </a>
                    </article>
                );
            })}
        </div>
    );
};

export default MainArticle;
