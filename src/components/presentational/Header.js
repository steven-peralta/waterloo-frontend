import React, { Component } from 'react';
import {Navbar} from "./Navbar";
import {Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="blog-header py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-2 pt-1">
                            <a className="btn btn-sm btn-outline-secondary" href="#">Support Us</a>
                        </div>
                        <div className="col-8 text-center">
                            <a className="navbar-brand" href="#">
                                <Link to="/" className="blog-header-logo text-dark">Waterloo Academy of Music</Link>
                            </a>
                        </div>
                        <div className="col-2 d-flex justify-content-end align-items-center">
                            <a className="text-muted" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="mx-3">
                                    <circle cx="10.5" cy="10.5" r="7.5"></circle>
                                    <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                </header>
                <Navbar>
                    <Link className="p-2 text-muted" to="/news">News</Link>
                    <Link className="p-2 text-muted" to="/reviews">Reviews</Link>
                    <Link className="p-2 text-muted" to="/artists">Artists</Link>
                    <Link className="p-2 text-muted" to="/artists/deanslist">Dean's List</Link>
                    <Link className="p-2 text-muted" to="/music">New Releases</Link>
                    <Link className="p-2 text-muted" to="/genres/rock">Rock</Link>
                    <Link className="p-2 text-muted" to="/genres/indie">Indie</Link>
                    <Link className="p-2 text-muted" to="/genres/electronic">Electronic</Link>
                    <Link className="p-2 text-muted" to="/genres/hip-hop">Hip-Hop</Link>
                </Navbar>
            </div>
        )
    }
}