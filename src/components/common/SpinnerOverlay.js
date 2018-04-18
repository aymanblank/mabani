import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Spinner } from 'native-base';

const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    zIndex: 999
  }
});

export default class SpinnerOverlay extends Component {
  constructor() {
    super();
  }

  render() {
    return this.props.visible ? (
      <View style={styles.container}>
        <Spinner color='orange' />
      </View>
    ): null;
  }
}