import { apiCall } from '../helpers';

const endpoints = {
  item: 'item',
};

async function fetchItems(fields: any) {
  return apiCall('fetchItems', 'GET', `${endpoints.item}/${fields}`);
}

async function addItem(fields: any) {
  return apiCall('addItem', 'POST', `${endpoints.item}/create`, fields);
}

async function updateItem(fields: any) {
  return apiCall('updateItem', 'POST', `${endpoints.item}/update`, fields);
}

export default {
  fetchItems,
  addItem,
  updateItem
};
