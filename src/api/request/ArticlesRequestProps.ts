export interface ArticlesRequestProps {
    q: string;
    searchIn?: 'title' | 'description' | 'content';
    sources?: string;
    domains?: string;
    excludeDomains?: string;
    from?: Date;
    to?: Date;
    language?: 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'se' | 'ud' | 'zh';
    sortBy?: 'relevancy' | 'popularity' | 'publishedAt';
    pageSize?: number;
    page?: number;
}
