import React, { Component } from 'react';
import { StyleSheet, View, Image, AsyncStorage, TouchableWithoutFeedback, Alert } from 'react-native';
import { Body, Title } from 'native-base';
import StorageKeys from '../../../utils/StorageKeys';
import routes from '../Router/routes';
import assets from '../../../utils/assets';
import colors from '../../common/colors';

const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    zIndex: 999,
    backgroundColor: colors.white,
  },
  image:{
    width: '100%',
    height: '100%',
  }
});

const backImage = require('../../../../assets/home.png');

export default class HomePage extends Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: (
        <Body>
          <Title>{'Home'}</Title>
        </Body>
      ),
    }
  };

  constructor() {
    super();
  }

  componentWillMount(){

  }

  showAlert(){
    Alert.alert('Mabani', 'Mabani demo (phase one) task completed, The remaining is for phase 2');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.showAlert}>
          <Image style={styles.image} source={backImage} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}