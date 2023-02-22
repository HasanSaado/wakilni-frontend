import {
  IS_FETCHING_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  IS_ADDING_ITEM,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  IS_UPDATING_ITEM,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAILURE
} from './ItemActionTypes';

// Api
import { itemApi } from 'api';

export function fetchItems(fields: any) {
  return async (dispatch: any) => {
    dispatch({ type: IS_FETCHING_ITEMS });

    try {
      const result: any = await itemApi.fetchItems(fields);
      dispatch({
        type: FETCH_ITEMS_SUCCESS,
        items: result,
      });

      return result;
    } catch (error: any) {
      console.log('Fetch items error: ', error);

      dispatch({
        type: FETCH_ITEMS_FAILURE,
        error: error.message
      });
    }
  }
}

export function addItem(fields: any) {
  return async (dispatch: any) => {
    dispatch({ type: IS_ADDING_ITEM });

    try {
      await itemApi.addItem(fields);
      dispatch({ type: ADD_ITEM_SUCCESS });
    } catch (error: any) {
      console.log('Add item error: ', error);

      dispatch({
        type: ADD_ITEM_FAILURE,
        error: error.message
      });
    }
  }
}

export function updateItem(fields: any) {
  return async (dispatch: any) => {
    dispatch({ type: IS_UPDATING_ITEM });
    
    try {
      await itemApi.updateItem(fields);
      dispatch({ type: UPDATE_ITEM_SUCCESS });
    } catch (error: any) {
      console.log('Update item error: ', error);

      dispatch({
        type: UPDATE_ITEM_FAILURE,
        error: error.message
      });
    }
  }
}
