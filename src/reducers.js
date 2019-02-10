import * as uiActions from './actions/uiActions';
import * as apiActions from './actions/apiActions';

const initialState = {
    carouselActiveIndex: 0,
    carouselAnimating: false,
    fetchingArticlesList: false,
    fetchedArticlesList: false,
    articles: {},
    error: {}
};

export default function state(state = initialState, action) {
    switch(action.type) {
        case uiActions.CAROUSEL_ANIMATION_START:
            return {
                ...state,
                carouselAnimating: true
            };
        case uiActions.CAROUSEL_ANIMATION_STOP:
            return {
                ...state,
                carouselAnimating: false
            };
        case uiActions.CAROUSEL_NEXT_SLIDE:
            return {
                ...state,
                carouselActiveIndex: state.carouselActiveIndex === state.articles.count - 1 ? 0 : state.carouselActiveIndex + 1
            };
        case uiActions.CAROUSEL_PREVIOUS_SLIDE:
            return {
                ...state,
                carouselActiveIndex: state.carouselActiveIndex === 0 ? state.articles.count - 1 : state.carouselActiveIndex - 1
            };
        case uiActions.CAROUSEL_GO_TO_INDEX:
            return {
                ...state,
                carouselActiveIndex: action.index
            };
        case apiActions.FETCH_ARTICLES_LIST_REQUEST:
            return {
                ...state,
                fetchingArticlesList: true
            };
        case apiActions.FETCH_ARTICLES_LIST_SUCCESS:
            return {
                ...state,
                fetchingArticlesList: false,
                fetchedArticlesList: true,
                articles: action.articles
            };
        case apiActions.FETCH_ARTICLES_LIST_FAILURE:
            return {
                ...state,
                fetchingArticlesList: false,
                fetchedArticlesList: false,
                error: action.error
            };
        default:
            return state;

    }
}