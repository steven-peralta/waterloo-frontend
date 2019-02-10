export const FETCH_ARTICLES_LIST_REQUEST = 'FETCH_ARTICLES_LIST_REQUEST';
export const FETCH_ARTICLES_LIST_SUCCESS = 'FETCH_ARTICLES_LIST_SUCCESS';
export const FETCH_ARTICLES_LIST_FAILURE = 'FETCH_ARTICLES_LIST_FAILURE';

export function fetchArticlesList_request(json) {
    return {
        type: FETCH_ARTICLES_LIST_REQUEST,
        receivedAt: Date.now()
    }
}

export function fetchArticlesList_success(json) {
    return {
        type: FETCH_ARTICLES_LIST_SUCCESS,
        articles: json.result.body,
        receivedAt: Date.now()
    }
}

export function fetchArticlesList_failure(json) {
    return {
        type: FETCH_ARTICLES_LIST_FAILURE,
        articles: null,
        error: json.error,
        receivedAt: Date.now()
    }
}

export function fetchArticlesList(page = 0, carousel = false, topStory = false) {
    return {
        types: [fetchArticlesList_request, fetchArticlesList_success, fetchArticlesList_failure],
        swagger: api => api.articles.articles_list({page: page || '', carousel: carousel || '', topStory: topStory || ''})
    }
}