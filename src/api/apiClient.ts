import { MainArticleRequestProps } from './request/MainArticleRequestProps';
import { ArticlesResponseProps } from './response/ArticlesResponseProps';
import { MainArticleResponseProps } from './response/MainArticleResponseProps';

const { REACT_APP_API_BASE_URL, REACT_APP_NEWS_APP_API_KEY } = process.env;

const apiClient = (endpoint: string, data: {}) =>
    fetch(`${REACT_APP_API_BASE_URL}/${endpoint}?` + new URLSearchParams(data), {
        headers: { 'X-API-KEY': REACT_APP_NEWS_APP_API_KEY },
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
    data: MainArticleRequestProps,
): Promise<ArticlesResponseProps> => {
    const response = await apiClient(endpoint, data);

    return response.json();
};
