import { Source } from '../../common/interfaces/Source';

export interface ArticleProps {
    author: string;
    content: string;
    description: string;
    publishedAt: Date;
    source: Source;
    title: string;
    url: string;
    urlToImage: string;
}
