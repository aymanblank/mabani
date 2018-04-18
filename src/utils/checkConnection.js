import { NetInfo } from 'react-native';
import { setConnectionStatus } from '../actions'
import axios from 'axios';

export default function getConnectionStatus(dispatch) {
  let called = false;
  const handleConnectionChange = (isConnected) => {
    if (!called) {
      called = true;
      axios.head('https://www.google.com', { timeout: 1000 }).then(response => {
        dispatch(setConnectionStatus(true));
        called = false;
      }).catch(error => {
        dispatch(setConnectionStatus(false));
        called = false;
      });
    }
  };
  NetInfo.isConnected.addEventListener('connectionChange', handleConnectionChange);
  //NetInfo.isConnected.fetch().then( isConnected => dispatch(setConnectionStatus(isConnected)) );
}
