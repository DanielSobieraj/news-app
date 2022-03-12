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

export interface Source {
    id: string | null;
    name: string;
}
