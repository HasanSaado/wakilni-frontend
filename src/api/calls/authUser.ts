import { apiCall } from '../helpers';

const endpoints = {
  authUser: 'user',
};

async function loginUser(fields: any) {
  return apiCall('loginUser', 'POST', `${endpoints.authUser}/login`, fields);
}

async function registerUser(fields: any) {
  return apiCall('registerUser', 'POST', `${endpoints.authUser}/register`, fields);
}

async function logoutUser() {
  return apiCall('logout', 'GET', `${endpoints.authUser}/logout`);
}

async function refresh() {
  return apiCall('register', 'GET', `${endpoints.authUser}/refresh`);
}

export default { 
  loginUser,
  logoutUser,
  registerUser,
  refresh
};