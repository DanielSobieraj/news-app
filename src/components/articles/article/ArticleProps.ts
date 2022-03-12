import { Source } from '../../../api/response/ArticleProps';

export interface ArticleProps {
    title: string;
    description: string;
    publishedAt: Date;
    urlToImage: string;
    url: string;
    category?: string;
    source?: Source;
}
