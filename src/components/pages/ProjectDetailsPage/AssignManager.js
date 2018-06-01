import React, { Component } from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { Text, Picker, Icon, H3 } from 'native-base';
import translations from '../../../localization/translations';
import colors from '../../common/colors';
import assets from '../../../utils/assets';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 60,
  },
  header: {
    fontWeight: 'bold',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  icon:{
    width: 10,
    height: 10,
  },
  label:{
    marginHorizontal: 10,
    fontSize: 10,
    fontWeight: 'bold'
  },
  picker:{
    marginHorizontal: 5,
    alignSelf: 'flex-start',
    width: undefined
  },
  placeholderIconStyle:{
    fontSize: 10
  },
  placeholderStyle:{
    fontSize: 10,
  },
  optionTextStyle: {
    fontSize: 10,
  },
});

export default class AssignManager extends Component {

  constructor() {
    super();

    this.state = {
      options: [],
      selected: undefined,
    };

    this._onSelectedChange = this._onSelectedChange.bind(this);
  }

  componentWillReceiveProps(newProps){
    this.setState({ options: newProps.options });
  }

  _onSelectedChange(id){
    this.setState({ selected: id });
  }

  render() {
    return (
      <View style={styles.container}>
        <H3 style={styles.header}>{translations.get('assign_manager').toTitleCase()}</H3>
        <View style={styles.wrapper}>
          <Image style={styles.icon} source={assets.ASSIGN_MANAGER || null} />
          <Text style={styles.label}>{ translations.get('area_manager').toTitleCase() + ' :' }</Text>
          <Picker
            mode="dropdown"
            iosIcon={<Icon style={styles.placeholderIconStyle} name="md-arrow-dropdown" />}
            placeholder={translations.get('select_one').toTitleCase()}
            placeholderStyle={styles.placeholderStyle}
            placeholderIconColor={colors.black}
            textStyle={styles.optionTextStyle}
            style={styles.picker}
            selectedValue={this.state.selected}
            onValueChange={this._onSelectedChange}
            >
            {this.state.options.map(option => 
              <Picker.Item label={option.label} value={option.id} />
            )}
          </Picker>
        </View>
      </View>
    );
  }
}