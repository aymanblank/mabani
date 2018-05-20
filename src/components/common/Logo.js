import React, { Component } from 'react';
import { StyleSheet, View, Image, } from 'react-native';
import assets from '../../utils/assets';
import colors from './colors';

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.white,
  },
  imageStyle: {
    width: 70,
    height: 25,
    marginTop: 10
  }
});

export default class Logo extends Component {

  constructor() {
    super();
  }

  render() {
    const alignment = this.props.alignment || 'center';
    const imageStyle = [ styles.imageStyle, { alignSelf: alignment } ];
    return (
      <View style={[styles.container, this.props.style]}>
        <Image source={assets.MABANI} style={imageStyle} />
      </View>
    );
  }
}