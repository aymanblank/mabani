import React from 'react';
import { StyleSheet, Alert, Image, AsyncStorage } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Icon, Body, Title } from 'native-base';
import translations from '../../../localization/translations';
import TextButton from '../../common/TextButton';
import TextLink from '../../common/TextLink';
import { validateEmail, validateText, validatePhoneNumber, validatePassword, validatePasswordLength } from '../../../utils/validators';
import FormValidator from '../../../utils/FormValidator';
import routes from '../Router/routes';
import User from '../../../models/User';
import SpinnerOverlay from '../../common/SpinnerOverlay';
import StorageKeys from '../../../utils/StorageKeys';
import colors from '../../common/colors';
import assets from '../../../utils/assets';

const styles = StyleSheet.create({
  signinButton:{
    marginTop: 20
  },
  form: {
    paddingTop: 16,
    paddingRight: 16
  },
  icon: {
    width: 24,
    height: 24,
  },
  forgotPasswordLink: {
    marginTop: 20
  },
  container: {
    backgroundColor: colors.white
  },
  image: {
    alignSelf: 'center',
    marginTop: '30%'
  }
});

export default class LoginPage extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: (
        <Body>
          <Title>{translations.get('login_page_title').toTitleCase()}</Title>
        </Body>
      ),
    }
  };

  constructor() {
    super();

    this.validator = new FormValidator();
    this.validator.addField('username', validateEmail);
    this.validator.addField('password', validatePasswordLength);

    this.state = {
      username: '',
      usernameValid: true,
      usernameOk: false,
      password: '',
      passwordValid: true,
      passwordOk: false,
      showOverlay: false,
    };

    this._handleDetailsChanged = this._handleDetailsChanged.bind(this);
    this._notifyChange = this._notifyChange.bind(this);
    this._showHideOverlay = this._showHideOverlay.bind(this);
    this._login = this._login.bind(this);
    this._valid = this._valid.bind(this);
  }

  componentDidMount() {
    this.setState({
      username: this.props.username || '',
      password: this.props.password || '',
    });
  }

  _handleDetailsChanged(change) {
    this.validator.notifyChanges(change);
    for(let name in change) {
      this.setState({
        [name]: this.validator.getValidity(name) ? change[name] : change[name].length > 0 ? this.state[name] : '',
        [name + 'Valid'] : change[name].length > 0 ? this.validator.getValidity(name) : false,
        [name + 'Ok'] : change[name].length > 0 ? this.validator.getValidity(name) : false
      });
    }
  }

  _notifyChange(change) {
    this.validator.notifyChanges(change);
    for(let name in change) {
      this.setState({
        [name]: change[name],
        [name + 'Valid'] : change[name].length > 0 ? this.validator.getValidity(name) : false,
        [name + 'Ok'] : change[name].length > 0 ? this.validator.getValidity(name) : false
      });
    }
  }

  _showHideOverlay(){
    this.setState({ showOverlay: !this.state.showOverlay });
  }

  _login() {
    
    const user = new User({id: 123});
    user.fetch()
    .then(newUser => {
      Alert.alert('good', 'done');
      console.log('aaa', newUser);
    })
    .catch(error => {
      Alert.alert('error', error.message);
      console.log('eee', error);
    });

    // if (this._valid()) {
    //   this._showHideOverlay();
    //   firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.email,this.state.password)
    //   .then(userCredential => {

    //     const userId = userCredential.user.uid;

    //     const user = new User({
    //       user_id: userId,
    //     });
  
    //     user.fetch().then(addedUser => {
    //       this.props.setLoggedInUser(addedUser);
    //       AsyncStorage.setItem(StorageKeys.USER_ID, addedUser.getId())
    //       .then(() => {
    //         this._showHideOverlay();
    //         this.props.navigation.navigate(routes.MAP);
    //       })
    //       .catch(error => {
    //         this._showHideOverlay();
    //         Alert.alert(
    //           translations.get('alert_error_header').toTitleCase(),
    //           translations.get('login_failed_msg').val(),
    //           [{text: translations.get('ok').toTitleCase(), onPress: () => {}}]);
    //       })
    //     })
    //     .catch(error => {
    //       this._showHideOverlay();
    //       Alert.alert(
    //         translations.get('alert_error_header').toTitleCase(),
    //         translations.get('login_failed_msg').val(),
    //         [{text: translations.get('ok').toTitleCase(), onPress: () => {}}]);
    //     });
    //   })
    //   .catch(error => {
    //     this._showHideOverlay();
    //     Alert.alert(
    //       translations.get('alert_error_header').toTitleCase(),
    //       translations.get('login_failed_msg').val(),
    //       [{text: translations.get('ok').toTitleCase(), onPress: () => {}}]);
    //   });
    // }else{
    //   Alert.alert(
    //     translations.get('not_valid_alert_header').toTitleCase(),
    //     translations.get('login_page_not_valid_msg').val(),
    //     [{text: translations.get('ok').toTitleCase(), onPress: () => {}}]);
    // }
  }

  _valid(){
    return this.validator.isFormValid && this.props.connectionStatus;
  }

  render() {
    return (
      <Container style={styles.container}>
        <SpinnerOverlay visible={this.state.showOverlay} />
        <Content>
          <Image style={styles.image} source={assets.LOGO} />
          <Form style={styles.form}>
            <Item floatingLabel error={!this.state.usernameValid} success={this.state.usernameOk}>
              <Label>{translations.get('label_username').toLabelCase()}</Label>
              <Input 
                value={this.state.username}
                keyboardType={'email-address'}
                onChangeText={username => this._notifyChange({username})}/>
            </Item>
            <Item floatingLabel error={!this.state.passwordValid} success={this.state.passwordOk}>
              <Label>{translations.get('label_password').toLabelCase()}</Label>
              <Input 
                secureTextEntry
                value={this.state.password}
                onChangeText={password => {
                  this.setState({ confirmPasswordEnabled : password.length > 0, confirmPassword: '' });
                  this._notifyChange({password})
                }}/>
            </Item>
          </Form>
          <TextButton disabled={!this._valid()} style={styles.signinButton} onPress={this._login} primary={this._valid()}>{translations.get('button_login').toLabelCase()}</TextButton>
          <TextLink style={styles.forgotPasswordLink} >{translations.get('link_forgot_password').toLabelCase()}</TextLink>
        </Content>
      </Container>
    );
  }
}
