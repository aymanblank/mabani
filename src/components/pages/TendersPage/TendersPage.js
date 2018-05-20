import React from 'react';
import { StyleSheet, Button, Alert } from 'react-native';
import { Container, Content, Body, Title, List, ListItem, Text, Left, Right, Icon } from 'native-base';
import translations from '../../../localization/translations';
import routes from '../Router/routes';
import colors from '../../common/colors';
import assets from '../../../utils/assets';
import RightHeaderComponent from './RightHeaderComponent';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  content: {
  },
  right: {
    justifyContent: 'center',
  },
  rightArrowIcon:{
    fontSize: 30,
    color: colors.black
  },
  tenderNumber:{
    color: colors.blue,
    fontWeight: 'bold',
  },
});

export default class TendersPage extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: (
        <Body>
          <Title>{translations.get('tenders_page_title').toTitleCase()}</Title>
        </Body>
      ),
      headerRight: (
        <RightHeaderComponent onPress={params.changeToSelectable} />
      ),
    }
  };

  constructor() {
    super();
    this.state = {
      selectable: false,
      tenders: [],
      selectedTenders: []
    }
    this._handleItemPress = this._handleItemPress.bind(this);
    this._changeToSelectable = this._changeToSelectable.bind(this);
  }

  componentWillMount() {
    this.props.navigation.setParams({ changeToSelectable: this._changeToSelectable });
  }

  componentWillUnmount(){
    const tenders = this.state.tenders;
    tenders.map(tender => tender.selected = false);
    this.setState({ selectable: !this.state.selectable, selectedTenders: [], tenders });
  }

  componentWillReceiveProps(newProps){
    this.setState({tenders: newProps.tenders});
  }

  _changeToSelectable(){
    const tenders = this.state.tenders;
    tenders.map(tender => tender.selected = false);
    this.setState({ selectable: !this.state.selectable, selectedTenders: [], tenders });
  }

  _handleItemPress(item){
    const selectable = this.state.selectable;
    const tenders =  this.props.tenders.slice(0);
    const selectedTenders = this.state.selectedTenders;

    let tender = tenders.filter(t => t.id === item.id);
    tender = tender[0] ? tender[0] : null;

    if(selectable){
      if(tender){
        tender.selected = !tender.selected;

        // After changing the selected value 
        if(tender.selected){
          selectedTenders.push(tender);
          this.setState({ tenders, selectedTenders });
        }else{
          const newSelectedTenders = this.state.selectedTenders.filter(t => t.id != item.id);
          this.setState({ tenders, selectedTenders: newSelectedTenders });
        }
      }
    }else{
      Alert.alert(
        translations.get('navigate_to_tender_modal_title').toTitleCase(),
        tender ? tender.number : '',
        [
          {text: translations.get('cancel').toLabelCase(), onPress: () => {}},
          {text: translations.get('apply').toLabelCase(), onPress: () => {
            this.props.navigation.navigate(routes.TENDER_DETAILS, { tenderId: tender.id });
          }}
        ],
        { cancelable: false }
      );
    }
  }

  _limitTextLines(text){
    if(text){
      if(text.length > 100){
        let newText = text.substring(0, 99);
        newText += ' ...';
        return newText;
      }else{
        return text;
      }
    }
    return text;
  }

  render() {
    const listItemStyle = {
      marginLeft: 0, 
      paddingLeft: 16, 
      backgroundColor: colors.white,
    };
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <List>
            {this.state.tenders.map(item => 
              <ListItem 
                style={ item.selected ? { ...listItemStyle, backgroundColor: colors.alphaGray} : listItemStyle } 
                key={item.id} 
                button
                avatar 
                onPress={() => {this._handleItemPress(item)} } selected={item.selected}>
                <Left>
                  <Text style={styles.tenderNumber}>{item.number}</Text>
                </Left>
                <Body>
                  <Text>{item.status}</Text>
                  <Text note>{this._limitTextLines(item.details)}</Text>
                </Body>
                <Right style={styles.right}>
                  <Icon type="Entypo" name="chevron-right" style={styles.rightArrowIcon} />
                </Right>
              </ListItem>
            )}
          </List>
        </Content>
      </Container>
    );
  }
}
