import React from 'react';
import { View } from 'react-native';
import moment from 'moment';
import { lengthLesserThan20, required } from '../util/validation';
import DateField from './DateField';
import PhoneField from './PhoneField';
import TextField from './TextField';
import { ENTRY_FIELD_NAMES } from '../util/const';
import MainView from './MainView';
import Button from './Button';
import styles from './Global.style';

const formattedDate2YearsBefore = moment().subtract({ years: 2 }).format('YYYY-MM-DD');

const EntryForm = ({ handleSubmit, submitButtonName }) => (
  <MainView>
    <TextField
      style={styles.input}
      placeholder='Name'
      name={ENTRY_FIELD_NAMES.FIRSTNAME}
      validate={[required, lengthLesserThan20]}
    />
    <TextField
      style={styles.input}
      placeholder='Lastname'
      name={ENTRY_FIELD_NAMES.LASTNAME}
      validate={[required, lengthLesserThan20]}
    />

    <DateField
      style={styles.date}
      name={ENTRY_FIELD_NAMES.DATE_OF_BIRTH}
      maxDate={formattedDate2YearsBefore}
    />

    <View style={styles.phone}>
      <PhoneField
        name={ENTRY_FIELD_NAMES.PHONE_NUMBER}
        validate={required}
      />
    </View>

    <Button
      style={styles.entryBtn}
      styleText={styles.btnText}
      title={submitButtonName}
      onPress={handleSubmit}
    />
  </MainView>
);

export default EntryForm;
