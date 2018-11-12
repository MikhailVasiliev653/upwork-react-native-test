import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Home from './Home';
import AddEntryContainer from '../containers/AddEntryContainer';
import PhonebookContainer from '../containers/PhonebookContainer';
import EditEntryContainer from '../containers/EditEntryContainer';
import { SCENE_NAMES } from '../util/const';

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key={SCENE_NAMES.HOME} component={Home} title="Welcome in Phonebook" initial />
      <Scene key={SCENE_NAMES.ADD_ENTRY} title="Adding new number" component={AddEntryContainer} />
      <Scene key={SCENE_NAMES.EDIT_ENTRY} title="Edit entry" component={EditEntryContainer} />
      <Scene key={SCENE_NAMES.PHONEBOOK} title="Phonebook" component={PhonebookContainer} />
    </Stack>
  </Router>
);

export default Routes;
