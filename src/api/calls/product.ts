import { apiCall } from '../helpers';

const endpoints = {
  product: 'product',
};

async function fetchProducts() {
  return apiCall('fetchProducts', 'GET', `${endpoints.product}`);
}

async function createProduct(fields: any) {
  return apiCall('createProduct', 'POST', `${endpoints.product}/create`, fields);
}

async function deleteProduct(fields: any) {
  return apiCall('deleteProduct', 'DELETE', `${endpoints.product}/delete/${fields}`);
}

async function searchProduct(fields: any) {
  return apiCall('searchProduct', 'POST', `${endpoints.product}`, fields);
}

export default {
  fetchProducts,
  createProduct,
  deleteProduct,
  searchProduct
};
