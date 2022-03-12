import dayjs from 'dayjs';
import React, { FC, memo } from 'react';
import './Article.scss';
import { ArticleProps } from './ArticleProps';

const Article: FC<ArticleProps> = ({ title, description, url, urlToImage, publishedAt, category }) => {
    return (
        <article className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm article">
            <div className="col-md-6 p-4 d-flex flex-column position-static ">
                <p className="d-inline-block mb-2 text-primary text-capitalize">{category}</p>
                <h3 className="mb-0 article--title article--text__limit ">{title}</h3>
                <p className="article--date">{dayjs(publishedAt).format('MMM DD')}</p>
                <p className="article--text__limit card-text mb-auto">{description}</p>
                <a className="color-primary" href={url} target="blank">
                    Continue reading
                </a>
            </div>
            <div className="col-md-6 d-none d-md-block">
                <img className="article--image" src={urlToImage} alt={title} />
            </div>
        </article>
    );
};

export default memo(Article);
