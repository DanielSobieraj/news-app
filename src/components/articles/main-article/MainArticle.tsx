import React, { memo, useEffect, useState } from 'react';
import { getMainArticleRequest } from '../../../api/apiClient';
import { MainArticleResponseProps } from '../../../api/response/MainArticleResponseProps';
import { EndpointType } from '../../../common/enum/EndpointType';
import './MainArticle.scss';

const MainArticle = () => {
    const [mainArticle, setMainArticle] = useState<MainArticleResponseProps>();

    useEffect(() => {
        const getMainArticle = async () => {
            const response = await getMainArticleRequest(EndpointType.MainArticle, { pageSize: 1, country: 'us' });
            setMainArticle(response);
        };
        getMainArticle();
    }, []);

    return (
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark mainArticle">
            {mainArticle?.articles.map(({ title, description, url }, index) => {
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

export default memo(MainArticle);
