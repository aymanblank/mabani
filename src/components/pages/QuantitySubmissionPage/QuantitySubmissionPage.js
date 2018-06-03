import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Body, Title , Text } from 'native-base';
import translations from '../../../localization/translations';
import routes from '../Router/routes';
import colors from '../../common/colors';
import assets from '../../../utils/assets';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 16,
  },
  bold:{
    fontWeight: 'bold',
  },
  content: {
    marginTop: 16,
  },
  wrapper:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  row:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  labelText:{
    flex: 2,
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
  },
  valueText:{
    flex: 4,
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    color: colors.gray
  },
  smallWrapper:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 25,
  },
  smallRow:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  smallLabelText:{
    flex: 2,
    fontSize: 11,
    justifyContent: 'flex-start',
    color: colors.black
  },
  smallValueText:{
    flex: 4,
    fontSize: 11,
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    color: colors.black
  },
});

export default class QuantitySubmissionPage extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: (
        <Body>
          <Title style={styles.bold}>{translations.get('quantity_submission').toTitleCase()}</Title>
        </Body>
      ),
    }
  };

  constructor() {
    super();
    this.state = {
      quantitySubmissions: [],
      quantitySubmission: null
    }
  }

  componentWillMount() {
    const quantitySubmission = this.props.navigation.getParam('quantitySubmission', null);
    this.setState({ quantitySubmission });
  }

  componentWillReceiveProps(newProps){
    this.setState({quantitySubmissions: newProps.quantitySubmissions});
  }

  render() {
    const quantitySubmission = this.state.quantitySubmission;
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          {quantitySubmission? 
          <View style={styles.wrapper}>
            <View style={styles.row}>
              <Text style={styles.labelText}>{translations.get('project').toLabelCase() + ':' }</Text>
              <Text style={[styles.valueText, {color: colors.blue}]}>{quantitySubmission.projectNumber}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.labelText}>{translations.get('item').toLabelCase() + ':' }</Text>
              <Text style={styles.valueText}>{quantitySubmission.item}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.labelText}>{translations.get('contractor').toLabelCase() + ':' }</Text>
              <Text style={styles.valueText}>{quantitySubmission.contractor}</Text>
            </View>

            {/* Small Info */}
            <View style={styles.smallWrapper}>
              <View style={styles.smallRow}>
                <Text style={styles.smallLabelText}>{translations.get('current_quantity').toTitleCase() + ':' }</Text>
                <Text style={styles.smallValueText}>{quantitySubmission.currentQuantity}</Text>
              </View>
              <View style={styles.smallRow}>
                <Text style={styles.smallLabelText}>{translations.get('previous_quantity').toTitleCase() + ':' }</Text>
                <Text style={styles.smallValueText}>{quantitySubmission.previousQuantity}</Text>
              </View>
              <View style={[styles.smallRow, { marginTop: 20 }]}>
                <Text style={styles.smallLabelText}>{translations.get('total_quantity').toTitleCase() + ':' }</Text>
                <Text style={styles.smallValueText}>{quantitySubmission.totalQuantity}</Text>
              </View>
              <View style={styles.smallRow}>
                <Text style={styles.smallLabelText}>{translations.get('approved_quantity').toTitleCase() + ':' }</Text>
                <Text style={styles.smallValueText}>{quantitySubmission.approvedQuantity}</Text>
              </View>
              <View style={[styles.smallRow, { marginTop: 20 }]}>
                <Text style={styles.smallLabelText}>{translations.get('approved_rate').toTitleCase() + ':' }</Text>
                <Text style={styles.smallValueText}>{quantitySubmission.approvedRate}</Text>
              </View>
              <View style={styles.smallRow}>
                <Text style={styles.smallLabelText}>{translations.get('total_earnings').toTitleCase() + ':' }</Text>
                <Text style={styles.smallValueText}>{quantitySubmission.totalEarnings}</Text>
              </View>
            </View>
          </View>
          : null}
        </Content>
      </Container>
    );
  }
}
