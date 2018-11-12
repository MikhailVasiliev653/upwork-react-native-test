import React from 'react';
import { Text, View } from 'react-native';
import styles from './Global.style';

const ValidationError = ({ touched, error }) => (
  <View style={styles.validation}>
    {touched && error && <Text style={styles.validationText}>{error}</Text>}
  </View>
);

export default ValidationError;
