import React, { Component } from 'react';
import { Root, Toast } from "native-base";
import { Provider } from 'react-redux'
import store from './store'
import Router from './components/pages/Router';
import checkConnectionStatus from './utils/checkConnection';
import translations from './localization/translations';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component {
  constructor() {
    super();

    this.connectionStatus = true;
  }

  componentWillMount() {
    checkConnectionStatus(store.dispatch);

    store.subscribe(() => {
      const state = store.getState();
      if(state.connectionStatus != this.connectionStatus){
        Toast.show({
          text: state.connectionStatus ? translations.get('connection_back_msg').val() : translations.get('no_connection_msg').val(),
          buttonText: translations.get('ok').toLabelCase(),
          duration: 3000,
          type: state.connectionStatus ? "success" : "danger"
        });
        this.connectionStatus = state.connectionStatus;
      }
    })
  }

  render() {
    return (
      <Root>
        <Provider store={store}>
          <Router />
        </Provider>
      </Root>
    );
  }
}