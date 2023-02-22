import {
  IS_FETCHING_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  IS_CREATING_PRODUCT,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  IS_DELETING_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  IS_SEARCHING_PRODUCT,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE
} from './ProductActionTypes';

// Api
import { productApi } from 'api';

export function fetchProducts() {
  return async (dispatch: any) => {
    dispatch({ type: IS_FETCHING_PRODUCTS });

    try {
      const result: any = await productApi.fetchProducts();
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        products: result,
      });

      return result;
    } catch (error: any) {
      console.log('Fetch products error: ', error);

      dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        error: error.message
      });
    }
  }
}

export function createProduct(fields: any) {
  return async (dispatch: any) => {
    dispatch({ type: IS_CREATING_PRODUCT });

    try {
      await productApi.createProduct(fields);
      dispatch({ type: CREATE_PRODUCT_SUCCESS });
    } catch (error: any) {
      console.log('Create product error: ', error);

      dispatch({
        type: CREATE_PRODUCT_FAILURE,
        error: error.message
      });
    }
  }
}

export function deleteProduct(fields: any) {
  return async (dispatch: any) => {
    dispatch({ type: IS_DELETING_PRODUCT });

    try {
      await productApi.deleteProduct(fields);
      dispatch({ type: DELETE_PRODUCT_SUCCESS });
    } catch (error: any) {
      console.log('Delete product error: ', error);

      dispatch({
        type: DELETE_PRODUCT_FAILURE,
        error: error.message
      });
    }
  }
}

export function searchProduct(fields: any) {
  return async (dispatch: any) => {
    dispatch({ type: IS_SEARCHING_PRODUCT});

    try {
      const result = await productApi.searchProduct(fields);
      dispatch({ 
        type: SEARCH_PRODUCT_SUCCESS,
        productResults: result
      });
      return result;
    } catch (error: any) {
      console.log('Search error: ', error);

      dispatch({
        type: SEARCH_PRODUCT_FAILURE,
        error: error.message
      });
    }
  }
}
