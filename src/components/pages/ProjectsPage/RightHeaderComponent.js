import React, { Component } from 'react';
import { Button } from 'react-native';
import translations from '../../../localization/translations';
import colors from '../../common/colors';

export default class RightHeaderComponent extends Component {

  constructor() {
    super();

    this.state = {
      select: true,
      title: translations.get('select').toLabelCase()
    }

    this._handlePress = this._handlePress.bind(this);
  }

  _handlePress(){
    if(this.state.select){
      this.setState({ title: translations.get('unselect').toLabelCase(), select: false });
    }else{
      this.setState({ title: translations.get('select').toLabelCase(), select: true });
    }
    this.props.onPress();
  }

  render() {
    return (
      <Button
        onPress={this._handlePress}
        title={this.state.title}
        color={colors.black}
      />
    );
  }
}