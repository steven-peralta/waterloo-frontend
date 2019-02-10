import * as apiActions from "../actions/apiActions";

const initialState = {
    articles: {
        api: {
            pending: false,
            fetched: false,
            error: {}
        },
        topStory: [],
        carousel: [],
        items: []
    }
};

export default function apiReducer(state = initialState, action) {
    switch (action.type) {
        case apiActions.FETCH_ARTICLES_LIST_REQUEST:
            return {
                ...state,
                api: {
                    ...state.api,
                    fetched: false,
                    pending: true,
                }
            };
        case apiActions.FETCH_ARTICLES_LIST_SUCCESS:
            const api = {
                api: {
                    ...state.api,
                    fetched: true,
                    pending: false,
                }
            };

            if (action.topStory)
                return {
                    ...state,
                    ...api,
                    topStory: action.articles,
                    items: [...state.articles] + action.articles
                };
            else if (action.carousel)
                return {
                    ...state,
                    ...api,
                    carousel: action.articles,
                    items: [...state.articles] + action.articles
                };
            else if (action.carousel && action.topStory)
                return {
                    ...state,
                    ...api,
                    carousel: action.articles,
                    items: [...state.articles] + action.articles
                };
            else
                return {
                    ...state,
                    ...api,
                    items: [...state.articles] + action.articles
                };
        case apiActions.FETCH_ARTICLES_LIST_FAILURE:
            return {
                ...state,
                api: {
                    error: action.error,
                    fetched: false,
                    pending: false,
                },
            };
        default:
            return state;
    }
}