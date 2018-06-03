import userAPI from './userAPI';
import tenderAPI from './tenderAPI';
import projectAPI from './projectAPI';
import quantitySubmissionsAPI from './quantitySubmissionsAPI';

const API = {
  ...userAPI,
  ...tenderAPI,
  ...projectAPI,
  ...quantitySubmissionsAPI,
};

export default API;