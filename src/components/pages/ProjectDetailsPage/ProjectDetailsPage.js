import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import { Container, Content, Body, Title, Text } from 'native-base';
import translations from '../../../localization/translations';
import routes from '../Router/routes';
import colors from '../../common/colors';
import assets from '../../../utils/assets';
import AssignManager from './AssignManager';
import Demarcation from './Demarcation';
import ConstructionCertifications from './ConstructionCertification';
import TemporaryWAndELines from './TemporaryWAndELines';
import Note from '../TenderDetailsPage/Note';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 16,
  },
  content: {},
  main: {
    flex: 1,
  },
  header: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  topSection: {
    
  },
  row: {
    height: 1,
    backgroundColor: colors.alphaGray
  },
  notes:{
    marginVertical: 10,
  }
});

export default class ProjectDetailsPage extends React.Component {

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
      project: null,
      projects: []
    }
  }

  componentWillMount() {
    const id = this.props.navigation.getParam('projectId', '');
    let project = this.props.projects.filter(t => t.id === id);
    project = project[0] ? project[0] : null;
    this.props.navigation.setParams({ title: project.number || '' });
    this.setState({ id, project });
  }

  componentWillReceiveProps(newProps){
    this.setState({projects: newProps.projects});
  }

  render() {
    const project = this.state.project;
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
        {project ?
          <View style={styles.main}>
            <AssignManager options={this.props.areaManagers} />
            <View style={styles.row}></View>
            <ScrollView style={styles.topSection}>
              <Demarcation demarcations={project.demarcations} />
              <ConstructionCertifications constructionCertifications={project.constructionCertifications} />
              <TemporaryWAndELines temporaryWAndELines={project.temporaryWAndELines} />

              { project.notes ? 
              <View style={styles.notes}>
                {project.notes.map( note => <Note label={note.label} info={note.details} /> )}
              </View>
              : null }
            </ScrollView>
          </View>
          :
          <View></View>
        }
        </Content>
      </Container>
    );
  }
}
