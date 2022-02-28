import { FC } from 'react';
import { ArticleProps } from './ArticleProps';
import './Article.scss';

const Article: FC<ArticleProps> = ({ title, description, url, urlToImage, publishedAt }) => {
    return (
        <div className="col-md-6 row article g-0 border rounded">
            <div className="col d-flex flex-column article--item justify-content-center p-4">
                <span>{title}</span>
                <span>{publishedAt}</span>
                <span>{description}</span>
                <a href={url} target="blank">
                    Continue reading
                </a>
            </div>
            <div className="col">
                <img src={urlToImage} alt={title} />
            </div>
        </div>
    );
};

export default Article;
