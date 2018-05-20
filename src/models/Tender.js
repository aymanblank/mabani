import axios from 'axios';
import API from '../api';
import moment from 'moment'

const useMoment = false;

export default class Tender {

  constructor(obj = {}) {
    this._setAttributes(obj);
  }

  _setAttributes(obj) {
    this.id = obj.id || undefined;
    this.number = obj.number || '';
    this.selected = obj.selected || false;
    this.status = obj.status || '';
    this.approved = obj.approved || false;
    this.declined = obj.declined || false;
    this.details = obj.details || '';
    this.owner = obj.owner || '';
    this.project_type = obj.project_type || '';
    this.consaltant = obj.consaltant || '';
    this.received = useMoment ? (obj.received ? moment(obj.received) : null) : (obj.received || null) ;
    this.deadline = useMoment ? (obj.deadline ? moment(obj.deadline) : null) : (obj.deadline || null) ;
    this.bidding_bound = obj.bidding_bound || '';
    this.performance_bound = obj.performance_bound || '';
    this.location = obj.location || '';
    this.attachments = obj.attachments || [];
    this.notes = obj.notes || [];
    this.items = obj.items || null;
  }

  fetch() {
    return new Promise((resolve, reject) => {
      const api = API.GET_TENDER([this.id]);
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

  approve(userId) {
    return new Promise((resolve, reject) => {
      const api = API.APPROVE_TENDER();
      axios.post(api,{
        userId,
        tenderId: this.id,
      }).then(response => {
        resolve(this);
      })
      .catch(error => reject(error));
    });
  }

  decline(userId) {
    return new Promise((resolve, reject) => {
      const api = API.DECLINE_TENDER();
      axios.post(api,{
        userId,
        tenderId: this.id,
      }).then(response => {
        resolve(this);
      })
      .catch(error => reject(error));
    });
  }

  addNote(userId, note) {
    return new Promise((resolve, reject) => {
      const api = API.ADD_TENDER_NOTE();
      axios.post(api,{
        userId,
        note,
        tenderId: this.id,
      }).then(response => {
        resolve(this);
      })
      .catch(error => reject(error));
    });
  }

}