import { Source } from '../../../common/interfaces/Source';
import { Category } from '../../../common/types/Category';

export interface ArticleProps {
    title: string;
    description: string;
    publishedAt: Date;
    urlToImage: string;
    url: string;
    category?: Category | string;
    source?: Source;
}
