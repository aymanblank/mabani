import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { Text } from 'native-base';
import translations from '../../../localization/translations';
import colors from '../../common/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
    borderWidth: 0.3,
    borderColor: colors.alphaGray,
    padding: 15,
  },
  icon:{
    alignSelf: 'center',
    width: 40,
    height: 30
  },
  label:{
    alignSelf: 'center'
  }
});

export default class Block extends Component {

  constructor() {
    super();
  }

  render() {
    const iconStyle = {
      alignSelf: 'center',
      width: this.props.iconWidth || 40,
      height: this.props.iconHeight || 40
    };
    return (
      <TouchableOpacity style={[styles.container, this.props.style]} onPress={this.props.onPress}>
        <Image style={iconStyle} source={this.props.icon} />
        <Text style={styles.label}>{translations.get(this.props.label).toTitleCase()}</Text>
      </TouchableOpacity>
    );
  }
}