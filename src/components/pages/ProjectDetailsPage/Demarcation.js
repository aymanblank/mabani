import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Picker, Icon, H3 } from 'native-base';
import translations from '../../../localization/translations';
import colors from '../../common/colors';
import assets from '../../../utils/assets';
import AttachmentLine from './AttachmentLine';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 15,
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  row: {
    height: 1,
    backgroundColor: colors.alphaGray
  }
});

export default class Demarcation extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <H3 style={styles.header}>{translations.get('demarcation').toTitleCase()}</H3>
        <View style={styles.row}></View>
        <View style={styles.wrapper}>
          {this.props.demarcations.map(item => {
            return (
              <AttachmentLine text={item.description} checked={item.available} />
            );
          })}
        </View>
      </View>
    );
  }
}