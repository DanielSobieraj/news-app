const { REACT_APP_API_BASE_URL, REACT_APP_NEWS_APP_API_KEY } = process.env;

export const apiClient = (query: string) =>
    fetch(`${REACT_APP_API_BASE_URL}/${query}`, {
        headers: { 'X-API-KEY': REACT_APP_NEWS_APP_API_KEY },
    });

export const getMainArticleRequest = async (query: string) => {
    const response = await apiClient(query);

    return response.json();
};

export const getArticlesRequest = async (query: string) => {
    const response = await apiClient(query);

    return response.json();
};
