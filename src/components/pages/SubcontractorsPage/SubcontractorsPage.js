import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Body, Title, Tabs, Tab, TabHeading, Text } from 'native-base';
import translations from '../../../localization/translations';
import routes from '../Router/routes';
import colors from '../../common/colors';
import assets from '../../../utils/assets';
import QuantitySubmissions from './QuantitySubmissions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  content: {
    
  },
  tabHeadingText:{
    fontSize: 12,
  },
  bold:{
    fontWeight: 'bold'
  }
});

export default class SubcontractorsPage extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: (
        <Body>
          <Title style={styles.bold}>{translations.get('subcontractors').toTitleCase()}</Title>
        </Body>
      ),
    }
  };

  constructor() {
    super();
    this.state = {
      quantitySubmissions: [],
    }
  }

  componentWillMount() {
  }

  componentWillReceiveProps(newProps){
    this.setState({quantitySubmissions: newProps.quantitySubmissions});
  }

  render() {
    return (
      <Container style={styles.container}>
        <Tabs initialPage={0}>
          <Tab heading={<TabHeading><Text style={styles.tabHeadingText}>{translations.get('q_submissions').toTitleCase()}</Text></TabHeading>}>
            <QuantitySubmissions navigation={this.props.navigation} quantitySubmissions={this.props.quantitySubmissions} />
          </Tab>
          <Tab heading={<TabHeading><Text style={styles.tabHeadingText}>{translations.get('performance').toTitleCase()}</Text></TabHeading>}>
            
          </Tab>
          <Tab heading={<TabHeading><Text style={styles.tabHeadingText}>{translations.get('assign').toTitleCase()}</Text></TabHeading>}>
            
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
