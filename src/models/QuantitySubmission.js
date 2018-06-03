import axios from 'axios';
import API from '../api';
import moment from 'moment'

const useMoment = false;

export default class QuantitySubmission {

  constructor(obj = {}) {
    this._setAttributes(obj);
  }

  _setAttributes(obj) {
    this.id = obj.id || undefined;
    this.projectNumber = obj.projectNumber || '';
    this.item = obj.item || '';
    this.contractor = obj.contractor || '';
    this.currentQuantity = obj.currentQuantity || '';
    this.previousQuantity = obj.previousQuantity || '';
    this.totalQuantity = obj.totalQuantity || '';
    this.approvedQuantity = obj.approvedQuantity || '';
    this.approvedRate = obj.approvedRate || '';
    this.totalEarnings = obj.totalEarnings || '';
  }

  fetch() {
    return new Promise((resolve, reject) => {
      const api = API.GET_QUANTITY_SUBMISSIONS([this.id]);
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