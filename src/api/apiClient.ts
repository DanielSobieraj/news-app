import { ArticlesRequestProps } from './request/ArticlesRequestProps';
import { MainArticleRequestProps } from './request/MainArticleRequestProps';
import { SourcesRequestProps } from './request/SourcesRequestProps';
import { ArticlesResponseProps } from './response/ArticlesResponseProps';
import { MainArticleResponseProps } from './response/MainArticleResponseProps';
import { SourcesResponseProps } from './response/SourcesResponseProps';

const { REACT_APP_API_BASE_URL, REACT_APP_NEWS_APP_API_KEY } = process.env;

// eslint-disable-next-line @typescript-eslint/ban-types
const apiClient = (endpoint: string, data?: {}) =>
    fetch(`${REACT_APP_API_BASE_URL}/${endpoint}?` + new URLSearchParams(data), {
        headers: {
            'X-API-KEY': REACT_APP_NEWS_APP_API_KEY ?? '',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET, POST, OPTION',
        },
    });

export const getMainArticleRequest = async (
    endpoint: string,
    data: MainArticleRequestProps,
): Promise<MainArticleResponseProps> => {
    const response = await apiClient(endpoint, data);

    return response.json();
};

export const getArticlesRequest = async (
    endpoint: string,
    data: ArticlesRequestProps,
): Promise<ArticlesResponseProps> => {
    const response = await apiClient(endpoint, data);

    return response.json();
};

export const getSourcesRequest = async (
    endpoint: string,
    data?: SourcesRequestProps,
): Promise<SourcesResponseProps> => {
    const response = await apiClient(endpoint, data);

    return response.json();
};
