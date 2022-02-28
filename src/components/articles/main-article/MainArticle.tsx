import { useEffect, useState } from 'react';
import { getMainArticleRequest } from '../../../api/apiClient';
import './MainArticle.scss';

const MainArticle = () => {
    const [mainArticle, setMainArticle] = useState([]);

    useEffect(() => {
        async function test() {
            const response = await getMainArticleRequest('top-headlines?country=us&pageSize=1');
            setMainArticle(response.articles);
        }
        test();
    }, []);

    return (
        <div className="row p-4 mainArticle">
            {mainArticle.map((item, index) => {
                return (
                    <article className="col-md-6 mainArticle--item" key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a href={item.url} target="_blank">
                            Continue reading...
                        </a>
                    </article>
                );
            })}
        </div>
    );
};

export default MainArticle;
