import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    Navbar as ReactstrapNavbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class Navbar extends Component {
    render() {
        return (
            <div>
                <ReactstrapNavbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Waterloo Music Academy</NavbarBrand>
                    <NavbarToggler onClick={() => this.props.toggle()} />
                    <Collapse isOpen={this.props.navbarOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </ReactstrapNavbar>
            </div>
        )
    }
}

Navbar.propTypes = {
    navbarOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};

export default Navbar;