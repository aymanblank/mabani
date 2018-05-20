import React, { Component } from 'react';
import { StyleSheet, View, Image, AsyncStorage, TouchableWithoutFeedback, Alert } from 'react-native';
import { Body, Title, Container, Content, Grid, Col } from 'native-base';
import translations from '../../../localization/translations';
import StorageKeys from '../../../utils/StorageKeys';
import routes from '../Router/routes';
import assets from '../../../utils/assets';
import colors from '../../common/colors';
import Logo from '../../common/Logo';
import Announcement from './Announcement';
import Block from './Block';
import blocks from './blocks';
import Footer from './Footer';

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.white,
  },
  content:{
    flex: 1,
    justifyContent: 'space-evenly',
  },
  col:{
    marginVertical: 0,
  },
  logo:{
    flex: 1,
    marginBottom: 5,
  },
  announcement:{
    flex: 2,
  },
  grid:{
    flex: 11,
  },
  footer:{
    flex: 1,
  }
});

export default class HomePage extends Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: (
        <Body>
          <Title>{translations.get('home_page_title').toTitleCase()}</Title>
        </Body>
      ),
    }
  };

  constructor() {
    super();
    this._handleBlockPress = this._handleBlockPress.bind(this);
  }

  _handleBlockPress(block){
    this.props.navigation.navigate(block.page);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.content} >
          <Logo style={styles.logo} />
          <Announcement style={styles.announcement} title={'Test Title'} text={'some fake text'} />
          <Grid style={styles.grid}>
            <Col style={styles.col}>
              {blocks.left.map(block => {
                return (
                  <Block iconWidth={block.width} iconHeight={block.height} label={block.label} icon={block.icon} onPress={() => this._handleBlockPress(block)} />
                );
              })}
            </Col>
            <Col style={styles.col}>
              {blocks.right.map(block => {
                return (
                  <Block iconWidth={block.width} iconHeight={block.height} label={block.label} icon={block.icon} onPress={() => this._handleBlockPress(block)} />
                );
              })}
            </Col>
          </Grid>
          <Footer style={styles.footer} />
        </Content>
      </Container>
    );
  }
}