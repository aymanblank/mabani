import C from '../store/constants'

export const setConnectionStatus = (isConnected) =>
({
    type: C.SET_CONNECTION_STATUS,
    payload: isConnected
})