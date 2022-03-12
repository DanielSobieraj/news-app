import { ArticleProps } from '../../components/articles/article/ArticleProps';

export interface ArticlesResponseProps {
    articles: ArticleProps[];
    status: string;
    totalResults: number;
}
