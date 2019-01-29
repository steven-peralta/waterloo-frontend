import { connect } from 'react-redux';
import { toggleNavbar } from "../actions";
import Navbar from './Navbar';

const mapStateToProps = state => {
    return {
        navbarOpen: state.navbarOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggle: () => {
            dispatch(toggleNavbar())
        }
    }
};

const CollapsibleNavbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);

export default CollapsibleNavbar;