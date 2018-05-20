import React, { Component } from 'react';
import { StyleSheet, View, Modal, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { Text, Textarea, H3 } from 'native-base';
import translations from '../../../localization/translations';
import colors from '../../common/colors';
import { validateText } from '../../../utils/validators';
import FormValidator from '../../../utils/FormValidator';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: colors.black,
    opacity: 0.3,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  modal: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
  },
  modalContent: {
    width: width * 0.8,
    height: height * 0.61,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 7,
    borderWidth: 0.3,
    borderColor: colors.darkGray,
  },
  modalHeader: {
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
  },
  noteTextBlock: {
  },
  modalButtons: {
    flex: 1,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalButtonCancel: {
    flex: 1,
    borderRadius: 0,
    borderWidth: 0.3,
    borderStartWidth: 0,
    borderBottomWidth: 0,
    borderColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  modalButtonSend: {
    flex: 1,
    borderRadius: 0,
    borderWidth: 0.3,
    borderEndWidth: 0,
    borderBottomWidth: 0,
    borderColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  modalButtonText: {
    textAlign: 'center',
    color: colors.blue,
    fontSize: 18,
  }
});

export default class NoteModal extends Component {

  constructor() {
    super();

    this.validator = new FormValidator();
    this.validator.addField('note', validateText);

    this.state = {
      note: '',
      noteValid: true,
      noteOk: false,
      showModal: false
    };

    this._notifyChange = this._notifyChange.bind(this);
    this._valid = this._valid.bind(this);
    this._send = this._send.bind(this);
  }

  componentWillReceiveProps(props){
    this.setState({ showModal: props.show });
  }

  _valid(){
    return this.validator.isFormValid;
  }

  _send(){
    if(this.props.connectionStatus){
      if(this._valid()){
        this.props.send(this.state.note);
        this.setState({
          note: '',
          noteValid: true,
          noteOk: false,
          showModal: false
        });
      }else{
        Alert.alert(
        translations.get('not_valid_alert_header').toTitleCase(),
        translations.get('note_modal_not_valid_msg').val(),
        [{text: translations.get('ok').toTitleCase(), onPress: () => {}}]);
      }
    }else{
      Alert.alert(
      translations.get('no_connection_alert_header').toTitleCase(),
      translations.get('no_connection_msg').val(),
      [{text: translations.get('ok').toTitleCase(), onPress: () => {}}]);
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

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.showModal}>
        <View style={styles.modal}>
          <View style={styles.overlay}></View>
          <View style={styles.modalContent}>
            <H3 style={styles.modalHeader}>{translations.get('post_a_note').toTitleCase()}</H3>
            <View style={styles.noteTextBlock}>
              <Textarea 
                value={this.state.note} 
                rowSpan={12} 
                bordered 
                placeholder={translations.get('include_a_message').toLabelCase()}
                onChangeText={note => this._notifyChange({note})} />
            </View>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButtonCancel} onPress={this.props.cancel}>
                <Text style={styles.modalButtonText}>{translations.get('cancel').toLabelCase()}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButtonSend} onPress={this._send}>
                <Text style={styles.modalButtonText}>{translations.get('send').toLabelCase()}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}