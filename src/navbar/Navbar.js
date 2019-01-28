import React, { Component } from 'react';
import {
    Navbar as NavbarReactstrap,
    NavbarBrand
} from 'reactstrap';

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <NavbarReactstrap color="dark" dark expand="md">
                    <NavbarBrand href="/">Waterloo Music Academy</NavbarBrand>
                </NavbarReactstrap>
            </div>
        )
    }
}