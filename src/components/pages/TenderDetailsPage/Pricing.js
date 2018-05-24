import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import translations from '../../../localization/translations';

const fontSize = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginTop: 10
  },
  total: {
    fontSize: fontSize,
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
  },
  pricing: {
    fontSize: fontSize,
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
  },
});

export default class Pricing extends Component {

  constructor() {
    super();
  }

  _formatNumber(num){
    if(num){
      if(typeof num === 'number'){
        return num.toFixed(2);
      }else{
        const n = parseFloat(num).toFixed(2);
        return n !== 'NaN' ? n : '-.--';
      }
    }
    return '-.--';
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.total}>{translations.get('total').toLabelCase() + ' : ' +  this._formatNumber(this.props.total || '0.00')}</Text>
        <Text style={styles.pricing}>{translations.get('pricing').toLabelCase() + ' : ' + this._formatNumber(this.props.pricing || '0.00')}</Text>
      </View>
    );
  }
}