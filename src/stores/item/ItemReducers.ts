// Action types
import {
  IS_FETCHING_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  IS_ADDING_ITEM,
  ADD_ITEM_FAILURE,
  ADD_ITEM_SUCCESS,
  IS_UPDATING_ITEM,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAILURE
} from './ItemActionTypes';

const initialState = {
  error: '',
  isFetchingItems: false,
  isAddingItem: false,
  isUpdatingItem: false,
  items: []
};

export function itemReducer(state = initialState, action: any) {
  switch (action.type) {
    case IS_FETCHING_ITEMS: {
      return {
        ...state,
        isFetchingItems: true
      };
    }
    case FETCH_ITEMS_SUCCESS: {
      return {
        ...state,
        items: action.items,
        isFetchingItems: false
      };
    }
    case FETCH_ITEMS_FAILURE: {
      return {
        ...state,
        error: action.error,
        isFetchingItems: false
      };
    }
    case IS_ADDING_ITEM: {
      return {
        ...state,
        isAddingItem: true
      };
    }
    case ADD_ITEM_SUCCESS: {
      return {
        ...state,
        isAddingItem: false,
      };
    }
    case ADD_ITEM_FAILURE: {
      return {
        ...state,
        isAddingItem: false,
        error: action.error
      };
    }
    case IS_UPDATING_ITEM: {
      return {
        ...state,
        isUpdatingItem: false,
        error: action.error
      };
    }
    case UPDATE_ITEM_SUCCESS: {
      return {
        ...state,
        isUpdatingItem: false,
      };
    }
    case UPDATE_ITEM_FAILURE: {
      return {
        ...state,
        isUpdatingItem: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
}
