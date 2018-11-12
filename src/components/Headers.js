import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import { TABLE_COLUMN_NAMES } from '../util/const';
import styles from './Global.style';

const renderHeader = (sort, changeSort) =>
  (c, i) =>
    (<Header
      name={c.name}
      key={i}
      sort={sort[i]}
      changeSort={changeSort(i)}
    />);

const Headers = ({ sort, changeSort }) => (
  <View style={styles.headers}>
    {TABLE_COLUMN_NAMES.map(renderHeader(sort, changeSort))}
  </View>
);

export default Headers;
