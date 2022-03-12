import dayjs from 'dayjs';
import React, { FC, memo, useState } from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
import './Article.scss';
import { ArticleProps } from './ArticleProps';
import PlaceholderImg from './placeholder.png';

const Article: FC<ArticleProps> = ({ title, description, url, urlToImage, publishedAt, category }) => {
    const [isError, setIsError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleError = () => setIsError(true);
    const handleLoaded = () => setIsLoaded(true);

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
            <div className="col-md-6 d-none d-md-block position-relative">
                <img
                    className="article--image"
                    src={isError ? PlaceholderImg : urlToImage}
                    alt={title}
                    onError={handleError}
                    onLoad={handleLoaded}
                />
                {!isLoaded && (
                    <div className="position-absolute article--image__loader">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                )}
            </div>
        </article>
    );
};

export default memo(Article);
