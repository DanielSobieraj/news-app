import Article from '../articles/article/Article';
import MainArticle from '../articles/main-article/MainArticle';

const MainPage = () => {
    return (
        <div className="container my-4">
            <MainArticle />
            <div className="row">
                <Article title="aaa" publishedAt="aa" />
                <Article title="bb" publishedAt="aaa" />
                <Article title="sdad" publishedAt="aa" />
                <Article title="ds" publishedAt="aaa" />
            </div>
        </div>
    );
};

export default MainPage;
