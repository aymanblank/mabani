import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import translations from '../../../localization/translations';
import colors from '../../common/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  labelBlock: {
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: colors.darkGray,
    backgroundColor: colors.darkGray,
    width: 18,
    height: 18,
    alignItems: 'center',
    paddingVertical: 3,
    marginRight: 10,
  },
  infoBlock: {
    flex: 4,
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: colors.alphaGray,
    backgroundColor: colors.white,
    padding: 10,
  },
  label: {
    fontSize: 9,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center'
  },
  info: {
    fontSize: 12,
    fontStyle: 'italic'
  },
});

export default class Note extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.labelBlock}>
          <Text style={styles.label}>{this.props.label || ''}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.info}>{this.props.info || ''}</Text>
        </View>
      </View>
    );
  }
}