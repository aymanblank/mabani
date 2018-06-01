import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import translations from '../../../localization/translations';
import colors from '../../common/colors';
import assets from '../../../utils/assets';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 15,
    fontSize: 10,
  },
  checkbox: {
    flex: 1,
    padding: 10,
    alignSelf: 'center',
  },
  outerBox: {
    borderRadius: 0,
    borderWidth: 2,
    borderColor: colors.alphaGray,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    height: 1,
    backgroundColor: colors.alphaGray
  }
});

export default class AttachmentLine extends Component {

  constructor() {
    super();
  }

  render() {
    const innerBoxStyle = {
      backgroundColor: this.props.checked ? colors.blue : colors.alphaGray,
      width: 11,
      height: 11,
      alignSelf: 'center',
    };
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>{this.props.text || ''}</Text>
          <View style={styles.checkbox}>
            <View style={styles.outerBox}>
              <View style={innerBoxStyle}></View>
            </View>
          </View>
        </View>
        <View style={styles.row}></View>
      </View>
    );
  }
}