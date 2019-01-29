import {TOGGLE_NAVBAR} from "./actions";

const initialState = {
    navbarOpen: false
};

export default function state(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_NAVBAR:
            return { navbarOpen: !state.navbarOpen };
        default:
            return state;
    }
}