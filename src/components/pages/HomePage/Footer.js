import React, { Component } from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { Text } from 'native-base';
import colors from '../../common/colors';
import assets from '../../../utils/assets';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.darkGray,
    paddingHorizontal: 30,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  home:{
    width: 25,
    height: 35,
  },
  settings:{
    width: 30,
    height: 35,
  }
});

export default class Footer extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Image style={styles.home} source={assets.HOME} />
        <Image style={styles.settings} source={assets.SETTINGS} />
      </View>
    );
  }
}