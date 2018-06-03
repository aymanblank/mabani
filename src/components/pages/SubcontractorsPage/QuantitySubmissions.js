import React from 'react';
import { StyleSheet, Button, Alert } from 'react-native';
import { Body, List, ListItem, Text, Left, Right, Icon, View } from 'native-base';
import translations from '../../../localization/translations';
import routes from '../Router/routes';
import colors from '../../common/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  content: {
  },
  listItemStyle: {
    marginLeft: 0, 
    paddingLeft: 16, 
    backgroundColor: colors.white,
  },
  projectNumberText:{
    color: colors.blue,
    fontSize: 12,    
    fontWeight: 'bold',
  },
  right: {
    justifyContent: 'center',
  },
  rightArrowIcon:{
    fontSize: 30,
    color: colors.black
  },
  body:{
    flex: 1,
    flexDirection: 'column',
  },
  itemText:{
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 5
  },
  wrapperRow:{
    flex: 1,
    flexDirection: 'row',
  },
  wrapperColumn:{
    flex: 1,
    flexDirection: 'column',
  },
  row:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityLabel:{
    flex: 2,
    fontSize: 8,
    fontWeight: 'bold',
  },
  spaceText:{
    flex: 1,
    fontSize: 8,
  },
  quantityText:{
    flex: 2,
    fontSize: 8,
  }
});

export default class QuantitySubmissions extends React.Component {

  constructor() {
    super();
    this.state = {
      quantitySubmissions: [],
    }

    this._handleItemPress = this._handleItemPress.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ quantitySubmissions: newProps.quantitySubmissions });
  }

  _handleItemPress(item){
    console.log('item', item);
    const quantitySubmissions =  this.props.quantitySubmissions.slice(0);
    let quantitySubmission = quantitySubmissions.filter(t => t.id === item.id);
    quantitySubmission = quantitySubmission[0] ? quantitySubmission[0] : null;

    this.props.navigation.navigate(routes.QUANTITY_SUBMISSION, { quantitySubmission });
  }

  _limitTextLines(text) {
    if (text) {
      if (text.length > 100) {
        let newText = text.substring(0, 99);
        newText += ' ...';
        return newText;
      } else {
        return text;
      }
    }
    return text;
  }

  render() {
    return (
      <List>
        {this.props.quantitySubmissions.map(item => 
          <ListItem
          style={styles.listItemStyle}
          key={item.id}
          button
          avatar
          onPress={() => { this._handleItemPress(item) }}>
          <Left>
            <Text style={styles.projectNumberText}>{item.projectNumber}</Text>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.itemText}>{item.item + ' ' + translations.get('quantity_submission').toTitleCase()}</Text>
            <View style={styles.wrapperRow}>
              <View style={styles.wrapperColumn}>
                {/* Current */}
                <View style={styles.row}>
                  <Text style={styles.quantityLabel}>{translations.get('current').toLabelCase() + ':'}</Text>
                  <Text style={styles.spaceText}></Text>
                  <Text style={styles.quantityText}>{item.currentQuantity}</Text>
                </View>
                {/* Previous */}
                <View style={styles.row}>
                  <Text style={styles.quantityLabel}>{translations.get('previous').toLabelCase() + ':'}</Text>
                  <Text style={styles.spaceText}></Text>
                  <Text style={styles.quantityText}>{item.previousQuantity}</Text>
                </View>
              </View>
              <View style={styles.wrapperColumn}>
                {/* Total */}
                <View style={styles.row}>
                  <Text style={styles.quantityLabel}>{translations.get('total').toLabelCase() + ':'}</Text>
                  <Text style={styles.spaceText}></Text>
                  <Text style={styles.quantityText}>{item.totalQuantity}</Text>
                </View>
                {/* Approved */}
                <View style={styles.row}>
                  <Text style={styles.quantityLabel}>{translations.get('approved').toLabelCase() + ':'}</Text>
                  <Text style={styles.spaceText}></Text>
                  <Text style={styles.quantityText}>{item.approvedQuantity}</Text>
                </View>
              </View>
            </View>
          </Body>
          <Right style={styles.right}>
            <Icon type="Entypo" name="chevron-right" style={styles.rightArrowIcon} />
          </Right>
        </ListItem>
        )}
      </List>
    );
  }
}
