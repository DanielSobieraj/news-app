import { ArticleProps } from '../../components/articles/article/ArticleProps';

export interface MainArticleResponseProps {
    articles: ArticleProps[];
    status: string;
    totalResults: number;
}
