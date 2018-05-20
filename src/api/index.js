import userAPI from './userAPI';
import tenderAPI from './tenderAPI';

const API = {
  ...userAPI,
  ...tenderAPI,
};

export default API;