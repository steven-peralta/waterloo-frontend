import * as carouselActions from "../actions/carouselActions";

const initialState = {
    carousels: {}
};

export default function carouselReducer(state = initialState, action) {
    switch (action.type) {
        case carouselActions.REGISTER_CAROUSEL_WITH_STORE:
            return {
                ...state,
                carousels: {
                    ...state.carousels,
                    [action.id]: {
                        activeIndex: 0,
                        items: [],
                        isAnimating: false
                    }
                }
            };
        case carouselActions.CAROUSEL_ANIMATION_START:
            return {
                ...state,
                carouselAnimating: true
            };
        case carouselActions.CAROUSEL_ANIMATION_STOP:
            return {
                ...state,
                carouselAnimating: false
            };
        case carouselActions.CAROUSEL_NEXT_SLIDE:
            return {
                ...state,
                carouselActiveIndex: state.carouselActiveIndex === state.articles.count - 1 ? 0 : state.carouselActiveIndex + 1
            };
        case carouselActions.CAROUSEL_PREVIOUS_SLIDE:
            return {
                ...state,
                carouselActiveIndex: state.carouselActiveIndex === 0 ? state.articles.count - 1 : state.carouselActiveIndex - 1
            };
        case carouselActions.CAROUSEL_GO_TO_INDEX:
            return {
                ...state,
                carouselActiveIndex: action.index
            };
        default:
            return state;
    }
}