import { times } from 'lodash';
import {
  ENTRY_ADDED, ENTRY_EDIT_FINISHED, ENTRY_EDIT_STARTED, ENTRY_REMOVED,
  TABLE_SORT_CHANGED,
} from '../actions/types';
import { ENTRY_FIELD_NAMES, SORT_TYPES, TABLE_COLUMN_NAMES } from '../util/const';

const initialState = {
  list: [],
  current: {},
  sort: times(4, SORT_TYPES.none),
};

const findIxByPhoneNumber = (list, e) =>
  list.findIndex(i =>
    i[ENTRY_FIELD_NAMES.PHONE_NUMBER] === e[ENTRY_FIELD_NAMES.PHONE_NUMBER]);

export default function entry(state = initialState, action) {
  switch (action.type) {
    case ENTRY_ADDED:
      return {
        ...state,
        list: [...state.list, action.entry],
      };
    case ENTRY_REMOVED: {
      const ix = findIxByPhoneNumber(state.list, action.entry);
      return {
        ...state,
        list: [
          ...state.list.slice(0, ix),
          ...state.list.slice(ix + 1),
        ],
      };
    }
    case ENTRY_EDIT_STARTED:
      return {
        ...state,
        current: action.entry,
      };
    case ENTRY_EDIT_FINISHED: {
      const ix = findIxByPhoneNumber(state.list, action.oldEntry);
      return {
        ...state,
        list: [
          ...state.list.slice(0, ix),
          action.newEntry,
          ...state.list.slice(ix + 1),
        ],
      };
    }
    case TABLE_SORT_CHANGED: {
      const newSort = state.sort[action.column] === SORT_TYPES.desc
        ? SORT_TYPES.asc : SORT_TYPES.desc;
      const newOrderFunc = (a, b) => {
        const r = a[TABLE_COLUMN_NAMES[action.column].name]
          .localeCompare(b[TABLE_COLUMN_NAMES[action.column].name]);
        return newSort === SORT_TYPES.asc ? r : -r;
      };
      return {
        ...state,
        list: [
          ...state.list.sort(newOrderFunc),
        ],
        sort: [
          ...times(action.column, SORT_TYPES.none),
          newSort,
          ...times(3 - action.column, SORT_TYPES.none),
        ],
      };
    }
    default:
      return state;
  }
}
