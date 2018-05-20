import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import { Text, H2 } from 'native-base';
import translations from '../../../localization/translations';
import colors from '../../common/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGray,
    paddingVertical: 16,
    paddingHorizontal: 30,
  },
  title: {
    color: colors.white,
    marginBottom: 5,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  text: {
    fontStyle: 'italic'
  }
});

export default class Announcement extends Component {

  constructor() {
    super();
  }

  render() {
    const title = this.props.title || '';
    const text = this.props.text || '';

    return (
      <View style={[styles.container, this.props.style]}>
        <H2 style={styles.title}>{title}</H2>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}