import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import translations from '../../../localization/translations';
import colors from '../../common/colors';

const fontSize = 8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  details: {
    fontSize: fontSize,
    flex: 4,
  },
  quantity: {
    fontSize: fontSize,
    textAlign: 'center',
    flex: 1,
  },
  cost: {
    fontSize: fontSize,
    textAlign: 'center',
    flex: 1,
  },
  pricing: {
    fontSize: fontSize,
    textAlign: 'center',
    flex: 1,
  },
});

export default class Item extends Component {

  constructor() {
    super();
  }

  render() {
    const wrapperStyle = this.props.dark ? { backgroundColor: colors.alphaGray } : { backgroundColor: colors.white };
    const containerStyle = [styles.container, wrapperStyle];
    return (
      <View style={containerStyle}>
        <Text style={styles.details}>{this.props.details || ''}</Text>
        <Text style={styles.quantity}>{this.props.quantity || ''}</Text>
        <Text style={styles.cost}>{this.props.cost || ''}</Text>
        <Text style={styles.pricing}>{this.props.pricing || ''}</Text>
      </View>
    );
  }
}