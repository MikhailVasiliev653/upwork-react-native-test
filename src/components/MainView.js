import React from 'react';
import { View, StatusBar } from "react-native";
import styles from './Global.style';

const MainView = ({ children }) => (
  <View style={styles.main}>
    <StatusBar barStyle="default" hidden />

    {children}
  </View>
);

export default MainView;