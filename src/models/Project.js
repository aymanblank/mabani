import axios from 'axios';
import API from '../api';
import moment from 'moment'

const useMoment = false;

export default class Project {

  constructor(obj = {}) {
    this._setAttributes(obj);
  }

  _setAttributes(obj) {
    this.id = obj.id || undefined;
    this.number = obj.number || '';
    this.selected = obj.selected || false;
    this.status = obj.status || '';
    this.details = obj.details || '';
    this.demarcations = obj.demarcations || [];
    this.constructionCertifications = obj.constructionCertifications || [];
    this.temporaryWAndELines = obj.temporaryWAndELines || [];
    this.notes = obj.notes || [];
  }

  fetch() {
    return new Promise((resolve, reject) => {
      const api = API.GET_PROJECT([this.id]);
      axios.get(api)
        .then(response => {
          const data = response.data;
          if (data && data.length > 0) {
            this._setAttributes(data);
          }
          resolve(this);
        })
        .catch(error => reject(error));
    });
  }

}