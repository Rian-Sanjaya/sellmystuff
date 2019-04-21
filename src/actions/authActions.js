export const checkLogin = () => {
  return dispatch => {
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        loading: false,
        isAuthenticated: true
      }
    })
  }
};

export const loadAuthSuccess = () => {
  return dispatch => {
    dispatch({
      type: 'LOAD_AUTH_SUCCESS',
      payload: {
        loading: false,
        isAuthenticated: true
      }
    })
  }
}

export const logoutSuccess = () => {
  return dispatch => {
    dispatch({
      type: "LOGOUT_SUCCESS",
      payload: {
        loading: false,
        isAuthenticated: false
      }
    })
  }
}