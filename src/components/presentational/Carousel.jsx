import React, {Component} from 'react';
import {
    CarouselItem,
    CarouselIndicators,
    Carousel as ReactstrapCarousel
} from "reactstrap";

export default class Carousel extends Component {
    componentDidMount() {
        this.props.fetchArticles();
    }

    render() {
        if (this.props.fetchingArticlesList) {
            return (<h1>loading</h1>)
        } else if (this.props.fetchedArticlesList) {
            const slides = this.props.articles.results.map(article => {
                return (
                    <CarouselItem
                        onExiting={this.props.onExiting}
                        onExited={this.props.onExited}
                        key={article.id}
                    >
                        <div className="col-md-6 px-0">
                            <h1 className="display-4 font-italic">{article.title}</h1>
                            <p className="lead my-3">{article.standfirst}</p>
                            <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
                        </div>
                    </CarouselItem>
                )
            });

            return (
                <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                    <ReactstrapCarousel
                        activeIndex={this.props.activeIndex}
                        next={this.props.next}
                        previous={this.props.previous}
                    >
                        {slides}
                        <CarouselIndicators items={this.props.articles.results} activeIndex={this.props.activeIndex} onClickHandler={this.props.goToIndex}/>
                    </ReactstrapCarousel>
                </div>
            )
        }

        return (<h1>wtf</h1>)
    }
}