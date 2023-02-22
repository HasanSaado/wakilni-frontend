// Action types
import { 
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  IS_CREATING_PRODUCT,
  IS_DELETING_PRODUCT,
  IS_FETCHING_PRODUCTS,
  IS_SEARCHING_PRODUCT,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE
} from './ProductActionTypes';

const initialState = { 
  error: '',
  isFetchingProducts: false,
  isCreatingProduct: false,
  isDeletingProduct: false,
  isSearchingProducts: false,
  productResults: [],
  products: []
};

export function productReducer(state = initialState, action: any) {
  switch (action.type) {
    case IS_FETCHING_PRODUCTS: {
      return {
        ...state,
        isFetchingProducts: true
      };
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.products,
        isFetchingProducts: false
      };
    }
    case FETCH_PRODUCTS_FAILURE: {
      return {
        ...state,
        error: action.error,
        isFetchingProducts: false
      };
    }
    case IS_CREATING_PRODUCT: {
      return {
        ...state,
        isCreatingProduct: true
      };
    }
    case CREATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        isCreatingProduct: false
      };
    }
    case CREATE_PRODUCT_FAILURE: {
      return {
        ...state,
        isCreatingProduct: false,
        error: action.error
      };
    }
    case IS_DELETING_PRODUCT: {
      return {
        ...state,
        isDeletingProduct: true
      };
    }
    case DELETE_PRODUCT_SUCCESS: {
      return {
        ...state,
        isDeletingProduct: false
      };
    }
    case DELETE_PRODUCT_FAILURE: {
      return {
        ...state,
        isDeletingProduct: false,
        error: action.error
      };
    }
    case IS_SEARCHING_PRODUCT: {
      return {
        ...state,
        isSearchingProducts: true
      };
    }
    case SEARCH_PRODUCT_SUCCESS: {
      return {
        ...state,
        isSearchingProducts: false,
        productResults: action.productResults
      };
    }
    case SEARCH_PRODUCT_FAILURE: {
      return {
        ...state,
        isSearchingProducts: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
}
