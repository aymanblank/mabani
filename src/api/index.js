import userAPI from './userAPI';
import tenderAPI from './tenderAPI';
import projectAPI from './projectAPI';

const API = {
  ...userAPI,
  ...tenderAPI,
  ...projectAPI,
};

export default API;