import React from 'react';
import { Text, View } from 'react-native';
import { ENTRY_FIELD_NAMES } from '../util/const';
import styles from './Global.style';
import Button from './Button';

const Entry = ({ entry, remove, edit }) => (
  <View>
    <View style={styles.entryRow}>
      <Text style={styles.entryRowText}>{entry[ENTRY_FIELD_NAMES.FIRSTNAME]}</Text>
      <Text style={styles.entryRowText}>{entry[ENTRY_FIELD_NAMES.LASTNAME]}</Text>
      <Text style={styles.entryRowText}>{entry[ENTRY_FIELD_NAMES.DATE_OF_BIRTH]}</Text>
      <Text style={styles.entryRowText}>{entry[ENTRY_FIELD_NAMES.PHONE_NUMBER]}</Text>
    </View>

    <View style={styles.entryRow}>
      <Button
        style={styles.entryRowBtn}
        styleText={styles.btnText}
        title="Delete"
        onPress={remove(entry)}
      />

      <Button
        style={styles.entryRowBtn}
        styleText={styles.btnText}
        title="Edit"
        onPress={edit(entry)}
      />
    </View>
  </View>
);

export default Entry;
