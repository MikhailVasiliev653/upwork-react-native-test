import React from 'react';
import { Text, Image } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { SCENE_NAMES } from '../util/const';
import MainView from './MainView';
import Button from './Button';
import styles from './Global.style';

const Home = () => (
  <MainView>

    <Text style={styles.MainTitle}>What do you want to do now?</Text>

    <Button
      style={styles.btn}
      styleText={styles.btnText}
      title="Add another phonebook entry"
      onPress={Actions[SCENE_NAMES.ADD_ENTRY]}
    />
    <Button
      style={styles.btn}
      styleText={styles.btnText}
      title="Check or modify the phonebook"
      onPress={Actions[SCENE_NAMES.PHONEBOOK]}
    />
  </MainView>
);

export default Home;
