import { Language } from './../../common/types/Language';
export interface ArticlesRequestProps {
    q: string;
    searchIn?: 'title' | 'description' | 'content';
    sources?: string;
    domains?: string;
    excludeDomains?: string;
    from?: Date;
    to?: Date;
    language?: Language;
    sortBy?: 'relevancy' | 'popularity' | 'publishedAt';
    pageSize?: number;
    page?: number;
}
