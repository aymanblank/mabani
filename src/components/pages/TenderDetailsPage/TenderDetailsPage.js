import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import { Container, Content, Body, Title, Text } from 'native-base';
import translations from '../../../localization/translations';
import routes from '../Router/routes';
import colors from '../../common/colors';
import assets from '../../../utils/assets';
import InfoBlock from './InfoBlock';
import Buttons from './Buttons';
import Note from './Note';
import HeaderItem from './HeaderItem';
import Item from './Item';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 10,
  },
  content: {},
  main: {
    flex: 1,
    //height: height * 0.87
  },
  header: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  topSection: {
    
  },
  infoBlocks: {
    
  },
  notes: {
    marginVertical: 10,
  },
  costingHeader: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  items:{
    marginVertical: 10,
  },
  buttons: {
    // position: 'absolute',
    // bottom: 0,
    // zIndex: 99
  }
});

export default class TenderDetailsPage extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: (
        <Body>
          <Title>{params.title}</Title>
        </Body>
      ),
    }
  };

  constructor() {
    super();
    this.state = {
      id: '',
      tender: null,
      tenders: []
    }
  }

  componentWillMount() {
    const id = this.props.navigation.getParam('tenderId', '');
    let tender = this.props.tenders.filter(t => t.id === id);
    tender = tender[0] ? tender[0] : null;
    this.props.navigation.setParams({ title: tender.number || '' });
    this.setState({ id, tender });
  }

  componentWillReceiveProps(newProps){
    this.setState({tenders: newProps.tenders});
  }

  render() {
    const tender = this.state.tender;
    let isItemDark = true;
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
        {tender ?
          <View style={styles.main}>
            <ScrollView style={styles.topSection}>
              <Text style={styles.header}>{translations.get('basic_information').toLabelCase()}</Text>

              <View style={styles.infoBlocks}>
                <InfoBlock icon={assets.OWNER} label={'tender_label_owner'} info={tender.owner} /> 
                <InfoBlock icon={assets.PROJECT_TYPE} label={'tender_label_project_type'} info={tender.project_type} /> 
                <InfoBlock icon={assets.CONSALTANT} label={'tender_label_consaltant'} info={tender.consaltant} />
                <InfoBlock icon={assets.RECEIVED} label={'tender_label_received'} info={tender.received} />
                <InfoBlock icon={assets.DEADLINE} label={'tender_label_deadline'} info={tender.deadline} />
                <InfoBlock icon={assets.BIDDING_BOND} label={'tender_label_bidding_bound'} info={tender.bidding_bound} />
                <InfoBlock icon={assets.PERFORMANCE_BOND} label={'tender_label_performance_bound'} info={tender.performance_bound} />
                <InfoBlock icon={assets.LOCATION} label={'tender_label_location'} info={tender.location} />
                <InfoBlock icon={assets.ATTACHMENTS} label={'tender_label_attachments'} info={ 'no attachments'} />
              </View>

              { tender.notes ? 
              <View style={styles.notes}>
                {tender.notes.map( note => <Note label={note.label} info={note.details} /> )}
              </View>
              : null }

              { tender.items ? 
              <View style={styles.items}>
                <Text style={styles.costingHeader}>{translations.get('costing').toLabelCase()}</Text>
                <HeaderItem />
                {tender.items.map( item => {
                  isItemDark = !isItemDark;
                  return <Item dark={isItemDark} details={item.details} quantity={item.quantity} cost={item.cost} pricing={item.pricing} /> 
                })}
              </View>
              : null }
            </ScrollView>
            { !(tender.approved || tender.declined) ?
            <Buttons 
              connectionStatus={this.props.connectionStatus}
              user={this.props.user} 
              tender={this.state.tender} 
              style={styles.buttons} 
              approve={this.props.approveTender} 
              decline={this.props.declineTender}
              addNote={this.props.addNote} />
            : null }
          </View>
          :
          <View></View>
        }
        </Content>
      </Container>
    );
  }
}
