import { Actions } from 'react-native-router-flux';
import { reset } from 'redux-form';
import {
  ENTRY_ADDED, ENTRY_EDIT_FINISHED, ENTRY_EDIT_STARTED,
  ENTRY_REMOVED, SEARCH_COMPLETED, SEARCH_STARTED,
  TABLE_SORT_CHANGED,
} from './types';
import { FORM_NAMES, SCENE_NAMES } from '../util/const';

export const add = entry =>
  (dispatch) => {
    dispatch({ type: ENTRY_ADDED, entry });
    dispatch(reset(FORM_NAMES.ADD_ENTRY));
    Actions.pop();
  };

export const remove = entry =>
  (dispatch) => {
    dispatch({ type: ENTRY_REMOVED, entry });
  };

export const edit = entry =>
  (dispatch) => {
    dispatch({ type: ENTRY_EDIT_STARTED, entry });
    Actions[SCENE_NAMES.EDIT_ENTRY]();
  };

export const update = (oldEntry, newEntry) =>
  (dispatch) => {
    dispatch({ type: ENTRY_EDIT_FINISHED, oldEntry, newEntry });
    Actions.pop();
  };

export const changeSort = column => ({ type: TABLE_SORT_CHANGED, column });

export const searchStart = query => ({ type: SEARCH_STARTED, query });

export const searchComplete = (query, list) => ({ type: SEARCH_COMPLETED, query, list });
