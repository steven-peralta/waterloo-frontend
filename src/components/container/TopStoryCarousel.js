import { connect } from 'react-redux';
import {
    carouselNextSlide,
    carouselPreviousSlide,
    carouselGoToIndex,
    carouselAnimationStart,
    carouselAnimationStop,
} from '../../actions/uiActions';
import {
    fetchArticlesList
} from "../../actions/apiActions";
import Carousel from '../presentational/Carousel';

const mapStateToProps = state => {
    return {
        activeIndex: state.carouselActiveIndex,
        animating: state.carouselAnimating,
        fetchingArticlesList: state.fetchingArticlesList,
        fetchedArticlesList: state.fetchedArticlesList,
        articles: state.articles,
        error: state.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onExiting: () => {
            dispatch(carouselAnimationStart())
        },
        onExited: () => {
            dispatch(carouselAnimationStop())
        },
        goToIndex: (index) => {
            dispatch(carouselGoToIndex(index))
        },
        next: () => {
            dispatch(carouselNextSlide())
        },
        previous: () => {
            dispatch(carouselPreviousSlide())
        },
        fetchArticles: () => {
            dispatch(fetchArticlesList(0, true))
        }
    }
};

const TopStoryCarousel = connect(
    mapStateToProps,
    mapDispatchToProps
)(Carousel);

export default TopStoryCarousel;