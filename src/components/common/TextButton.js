import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

export default class TextButton extends React.Component {
  constructor() {
    super();
  }

  render() {
    const props = {...this.props, style: [styles.container,this.props.style]};
    return (
      <Button {...props}>
        <Text style={[styles.text,this.props.textStyle]}>{this.props.children}</Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 15,
  },
  text:{
    width: '100%',
    textAlign: 'center'
  },
});