import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import translations from '../../../localization/translations';
import colors from '../../common/colors';

const fontSize = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  details: {
    fontSize: fontSize,
    fontWeight: 'bold',
    flex: 4,
  },
  quantity: {
    fontSize: fontSize,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  cost: {
    fontSize: fontSize,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  pricing: {
    fontSize: fontSize,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
});

export default class HeaderItem extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.details}>{translations.get('item').toLabelCase()}</Text>
        <Text style={styles.quantity}>{translations.get('quantity').toLabelCase()}</Text>
        <Text style={styles.cost}>{translations.get('cost').toLabelCase()}</Text>
        <Text style={styles.pricing}>{translations.get('pricing').toLabelCase()}</Text>
      </View>
    );
  }
}