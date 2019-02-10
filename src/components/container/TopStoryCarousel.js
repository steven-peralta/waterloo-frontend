import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    carouselNextSlide,
    carouselPreviousSlide,
    carouselGoToIndex,
    carouselAnimationStart,
    carouselAnimationStop,
    registerCarouselWithStore
} from '../../actions/carouselActions';
import Carousel from '../presentational/ArticleCarousel';

const componentDidMount = () => {
    this.props.fetchCarouselArticles()
};

const mapStateToProps = state => {
    return {
        carousel: state.carousels[this.props.name],
        articles: this.props.articles
    }
};

const mapDispatchToProps = dispatch => {
    return {
        mount: (id) => {
            dispatch(registerCarouselWithStore(id))
        },
        onExiting: (id) => {
            dispatch(carouselAnimationStart(id))
        },
        onExited: (id) => {
            dispatch(carouselAnimationStop(id))
        },
        goToIndex: (id, index) => {
            dispatch(carouselGoToIndex(id, index))
        },
        next: (id) => {
            dispatch(carouselNextSlide(id))
        },
        previous: (id) => {
            dispatch(carouselPreviousSlide(id))
        }
    }
};

const TopStoryCarousel = connect(
    mapStateToProps,
    mapDispatchToProps
)(Carousel);

TopStoryCarousel.propTypes = {
    name: PropTypes.string.isRequired,
    articles: PropTypes.array.isRequired
};

export default TopStoryCarousel;