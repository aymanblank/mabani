import axios from 'axios';
import API from '../api';

export default class User {

  constructor(obj = {}){
    this._setAttributes(obj);
  }

  _setAttributes(obj){
    this.id = obj.id || undefined;
    this.username = obj.username || '';
    this.password = obj.password || '';
  }

  fetch(){
    return new Promise((resolve, reject) => {
      const api = API.GET_USER([this.id]);
      axios.get(api)
      .then( response => {
        const data = response.data;
        if(data && data.length > 0){
          this.username = data.username;
          this.password = data.password;
        }
        resolve(this);
      })
      .catch(error => reject(error));
    });
  }

}