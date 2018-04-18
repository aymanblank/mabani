import C from '../store/constants'

export const setConnectionStatus = (isConnected) =>
({
    type: C.SET_CONNECTION_STATUS,
    payload: isConnected
})

export const setLoggedInUser = (user) => 
({
    type: C.SET_LOGGED_IN_USER,
    payload: user
})