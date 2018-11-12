import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import styles from './Global.style';

const Header = ({ name, changeSort, sort }) => (
  <TouchableOpacity onPress={changeSort}  style={styles.headerBtn}>
    <Text style={styles.headerText}>{name}</Text>
    <Text style={styles.sort}>{sort}</Text>
  </TouchableOpacity>
);

export default Header;
