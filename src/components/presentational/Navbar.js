import React, { Component } from 'react';
export class Navbar extends Component {
    render() {
        return (
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    {this.props.children}
                </nav>
            </div>
        )
    }
}