import React, { Component } from 'react';
import {client} from "../App";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            loaded: false
        }
    }

    componentDidMount() {
        let actions = ['reviews', 'list'];
        let params = {
            page: this.state.page
        };
        /*client.action('http://localhost:8000/docs/', actions, params).then((result) => {
            this.setState({
                loaded:true,
                results: result.results
            })
        });*/
    }

    render() {
        if (!this.state.loaded)
            return <h1>loading</h1>;
        else
            return (
                <h1>{this.state.results[0].url}</h1>
            )
    }
}