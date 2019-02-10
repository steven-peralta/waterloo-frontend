export const CAROUSEL_NEXT_SLIDE = 'CAROUSEL_NEXT_SLIDE';
export const CAROUSEL_PREVIOUS_SLIDE = 'CAROUSEL_PREVIOUS_SLIDE';
export const CAROUSEL_GO_TO_INDEX = 'CAROUSEL_GO_TO_INDEX';
export const CAROUSEL_ANIMATION_START = 'CAROUSEL_ANIMATION_START';
export const CAROUSEL_ANIMATION_STOP = 'CAROUSEL_ANIMATION_STOP';

export function carouselNextSlide() {
    return {
        type: CAROUSEL_NEXT_SLIDE,
    }
}

export function carouselPreviousSlide() {
    return {
        type: CAROUSEL_PREVIOUS_SLIDE,
    }
}

export function carouselGoToIndex(index) {
    return {
        type: CAROUSEL_GO_TO_INDEX,
        index: index
    }
}

export function carouselAnimationStart() {
    return {
        type: CAROUSEL_ANIMATION_START
    }
}

export function carouselAnimationStop() {
    return {
        type: CAROUSEL_ANIMATION_STOP
    }
}