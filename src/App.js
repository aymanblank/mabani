import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Router from './components/pages/Router';
import checkConnectionStatus from './utils/checkConnection';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    checkConnectionStatus(store.dispatch);
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}