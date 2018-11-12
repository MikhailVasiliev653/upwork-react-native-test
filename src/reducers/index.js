import { reducer as form } from 'redux-form';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import entry from './entry';

const config = {
  key: 'root',
  storage,
  blacklist: ['form'],
};

export default persistCombineReducers(config, {
  form,
  entry,
});
