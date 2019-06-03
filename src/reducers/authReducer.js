// const LOAD_AUTH = 'LOAD_AUTH';
const LOAD_AUTH_SUCCESS = 'LOAD_AUTH_SUCCESS';
// const LOAD_AUTH_FAIL = 'LOAD_AUTH_FAIL';
// const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// const LOGIN_FAIL = 'LOGIN_FAIL';
// const LOGOUT = 'LOGOUT';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const initialState = {
    loading: true,
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        return {
            ...state,
            loading: action.payload.loading,
            isAuthenticated: action.payload.isAuthenticated
        };

        case LOAD_AUTH_SUCCESS:
        return {
            ...state,
            loading: action.payload.loading,
            isAuthenticated: action.payload.isAuthenticated
        }

        case LOGOUT_SUCCESS:
            return {
            ...state,
            loading: action.payload.loading,
            isAuthenticated: action.payload.isAuthenticated
            }

        default:
            return state;
    }
}