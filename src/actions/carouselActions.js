export const CAROUSEL_NEXT_SLIDE = 'CAROUSEL_NEXT_SLIDE';
export const CAROUSEL_PREVIOUS_SLIDE = 'CAROUSEL_PREVIOUS_SLIDE';
export const CAROUSEL_GO_TO_INDEX = 'CAROUSEL_GO_TO_INDEX';
export const CAROUSEL_ANIMATION_START = 'CAROUSEL_ANIMATION_START';
export const CAROUSEL_ANIMATION_STOP = 'CAROUSEL_ANIMATION_STOP';
export const REGISTER_CAROUSEL_WITH_STORE = 'REGISTER_CAROUSEL_WITH_STORE';

export function registerCarouselWithStore(id) {
    return {
        type: REGISTER_CAROUSEL_WITH_STORE,
        id: id
    }
}

export function carouselNextSlide(id) {
    return {
        type: CAROUSEL_NEXT_SLIDE,
        id: id
    }
}

export function carouselPreviousSlide(id) {
    return {
        type: CAROUSEL_PREVIOUS_SLIDE,
        id: id
    }
}

export function carouselGoToIndex(id, index) {
    return {
        type: CAROUSEL_GO_TO_INDEX,
        index: index,
        id: id
    }
}

export function carouselAnimationStart(id) {
    return {
        type: CAROUSEL_ANIMATION_START,
        id: id
    }
}

export function carouselAnimationStop(id) {
    return {
        type: CAROUSEL_ANIMATION_STOP,
        id: id
    }
}