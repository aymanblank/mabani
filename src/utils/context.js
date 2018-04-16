import { AsyncStorage } from 'react-native';

class Context {
  constructor() {
    this.currentLanguage = 'en';
    this.setCurrentLanguage();
  }

  setCurrentLanguage() {
    AsyncStorage.getItem('language').then(lang => {
      this.currentLanguage = lang || 'en';
    }).catch(error => {
      AsyncStorage.setItem('language', this.currentLanguage);
    })
  }

  changeCurrentLanguage(lang){
    this.currentLanguage = lang;
    AsyncStorage.setItem('language', this.currentLanguage);
  }

  getCurrentLanguage(){
    return this.currentLanguage;
  }
}

var context = new Context();
export default context;