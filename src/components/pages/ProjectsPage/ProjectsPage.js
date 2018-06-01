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
  projectNumber:{
    color: colors.blue,
    fontWeight: 'bold',
  },
});

export default class ProjectsPage extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: (
        <Body>
          <Title>{translations.get('projetcs_page_title').toTitleCase()}</Title>
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
      projects: [],
      selectedProjects: []
    }
    this._handleItemPress = this._handleItemPress.bind(this);
    this._changeToSelectable = this._changeToSelectable.bind(this);
  }

  componentWillMount() {
    this.props.navigation.setParams({ changeToSelectable: this._changeToSelectable });
  }

  componentWillUnmount(){
    const projects = this.state.projects;
    projects.map(project => project.selected = false);
    this.setState({ selectable: !this.state.selectable, selectedProjects: [], projects });
  }

  componentWillReceiveProps(newProps){
    this.setState({projects: newProps.projects});
  }

  _changeToSelectable(){
    const projects = this.state.projects;
    projects.map(project => project.selected = false);
    this.setState({ selectable: !this.state.selectable, selectedProjects: [], projects });
  }

  _handleItemPress(item){
    const selectable = this.state.selectable;
    const projects =  this.props.projects.slice(0);
    const selectedProjects = this.state.selectedProjects;

    let project = projects.filter(t => t.id === item.id);
    project = project[0] ? project[0] : null;

    if(selectable){
      if(project){
        project.selected = !project.selected;

        // After changing the selected value 
        if(project.selected){
          selectedProjects.push(project);
          this.setState({ projects, selectedProjects });
        }else{
          const newSelectedProjects = this.state.selectedProjects.filter(t => t.id != item.id);
          this.setState({ projects, selectedProjects: newSelectedProjects });
        }
      }
    }else{
      this.props.navigation.navigate(routes.PROJECT_DETAILS, { projectId: project.id });
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
            {this.state.projects.map(item => 
              <ListItem 
                style={ item.selected ? { ...listItemStyle, backgroundColor: colors.alphaGray} : listItemStyle } 
                key={item.id} 
                button
                avatar 
                onPress={() => {this._handleItemPress(item)} } selected={item.selected}>
                <Left>
                  <Text style={styles.projectNumber}>{item.number}</Text>
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
