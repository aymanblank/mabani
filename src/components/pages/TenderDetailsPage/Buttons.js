import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Text } from 'native-base';
import translations from '../../../localization/translations';
import colors from '../../common/colors';
import TextButton from '../../common/TextButton';
import NoteModal from './NoteModal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.white
  },
  button: {
    flex: 2,
    backgroundColor: colors.blue
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
});

export default class Buttons extends Component {

  constructor() {
    super();

    this.state = {
      showModal: false
    };

    this._toggleNoteModal = this._toggleNoteModal.bind(this);
    this._handleApprovePress = this._handleApprovePress.bind(this);
    this._handleDeclinePress = this._handleDeclinePress.bind(this);
    this._sendNote = this._sendNote.bind(this);
  }

  _toggleNoteModal(){
    this.setState({ showModal: !this.state.showModal });
  }

  _handleApprovePress(){
    Alert.alert(
      translations.get('approve_modal_title').toTitleCase(),
      translations.get('approve_modal_info').val(),
      [
        {text: translations.get('cancel').toLabelCase(), onPress: () => {}},
        {text: translations.get('approve').toLabelCase(), onPress: () => {
          this.props.approve(this.props.user.id, this.props.tender);
        }}
      ],
      { cancelable: false }
    );
  }

  _handleDeclinePress(){
    Alert.alert(
      translations.get('decline_modal_title').toTitleCase(),
      translations.get('decline_modal_info').val(),
      [
        {text: translations.get('cancel').toLabelCase(), onPress: () => {}},
        {text: translations.get('decline').toLabelCase(), onPress: () => {
          this.props.decline(this.props.user.id, this.props.tender);
        }}
      ],
      { cancelable: false }
    );
  }

  _sendNote(note){
    this.props.addNote(this.props.user.id, this.props.tender, note);
    this._toggleNoteModal();
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <NoteModal connectionStatus={this.props.connectionStatus} show={this.state.showModal} cancel={this._toggleNoteModal} send={(note) => this._sendNote(note)} />
        <TextButton textStyle={styles.textStyle} style={styles.button} onPress={this._toggleNoteModal}>
          {translations.get('discuss').toLabelCase()}
        </TextButton>
        <TextButton textStyle={styles.textStyle} style={styles.button} onPress={this._handleApprovePress}>
          {translations.get('approve').toLabelCase()}
        </TextButton>
        <TextButton textStyle={styles.textStyle} style={styles.button} onPress={this._handleDeclinePress}>
          {translations.get('decline').toLabelCase()}
        </TextButton>
      </View>
    );
  }
}