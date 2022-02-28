const { REACT_APP_API_BASE_URL, REACT_APP_NEWS_APP_API_KEY } = process.env;

export const apiClient = (query: string) =>
    fetch(REACT_APP_API_BASE_URL + query, {
        headers: { 'X-API-KEY': REACT_APP_NEWS_APP_API_KEY },
    });

export const getMainArticleRequest = async (data) => {
    const response = await apiClient(data);

    return response.json();
};
