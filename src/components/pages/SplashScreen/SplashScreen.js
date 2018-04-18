import React, { Component } from 'react';
import { StyleSheet, View, Image, AsyncStorage } from 'react-native';
import { Spinner } from 'native-base';
import StorageKeys from '../../../utils/StorageKeys';
import routes from '../Router/routes';
import assets from '../../../utils/assets';

const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    zIndex: 999
  },
  image:{
    alignSelf: 'center'
  }
});

export default class SplashScreen extends Component {
  constructor() {
    super();
  }

  componentWillMount(){
    // AsyncStorage.getItem(StorageKeys.USER_ID)
    // .then(userId => {
    //   const user = new User({ user_id: userId });

    //   user.fetch().then(addedUser => {
    //     this.props.setLoggedInUser(addedUser);
    //     this.props.navigation.navigate(routes.MAP);
    //   })
    //   .catch(error => this.props.navigation.navigate(routes.LOGIN));
    // })
    // .catch(error => this.props.navigation.navigate(routes.LOGIN));

    setTimeout(() => { this.props.navigation.navigate(routes.LOGIN); } , 3000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={assets.LOGO} />
        <Spinner color='orange' />
      </View>
    );
  }
}