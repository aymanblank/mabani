import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import colors from './colors';

export default class TextLink extends React.Component {
  constructor() {
    super();
  }

  render() {
    const props = {...this.props, style: [styles.container,this.props.style]};
    return (
      <TouchableOpacity {...props}>
        <Text style={[styles.text,this.props.textStyle]}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 15,
  },
  text:{
    width: '100%',
    textAlign: 'center',
    color: colors.gray
  },
});