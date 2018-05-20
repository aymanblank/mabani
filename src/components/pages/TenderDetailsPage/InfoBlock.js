import React, { Component } from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { Text } from 'native-base';
import translations from '../../../localization/translations';
import colors from '../../common/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  icon:{
    alignSelf: 'flex-start',
    width: 10,
    height: 10,
    padding: 5,
  },
  label:{
    flex: 3,
    marginHorizontal: 5,
    fontSize: 10,
    fontWeight: 'bold'
  },
  info:{
    flex: 5,
    marginHorizontal: 5,
    alignSelf: 'flex-end',
    fontSize: 10,
  }
});

export default class InfoBlock extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={this.props.icon || null} />
        <Text style={styles.label}>{ this.props.label ? translations.get(this.props.label).toTitleCase() : ''}</Text>
        <Text style={styles.info}>{this.props.info || ''}</Text>
      </View>
    );
  }
}