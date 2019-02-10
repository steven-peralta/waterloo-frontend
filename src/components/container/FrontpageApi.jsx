import { connect } from 'react-redux';
import React, {Component} from 'react';
import {fetchArticlesList} from '../../actions/apiActions';

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCarouselArticles: dispatch(fetchArticlesList(0, true)),
        fetchTopStoryArticles: dispatch(fetchArticlesList(0, false, true))
    }
};

const FrontpageApi = connect(
    mapStateToProps,
    mapDispatchToProps
)(Frontpage);