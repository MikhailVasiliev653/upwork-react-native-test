import React from 'react';
import { Field } from 'redux-form';
import DatePicker from 'react-native-datepicker';
import styles from './Global.style';

const WrappedDatePicker = ({ input: { onChange, value, ...restInput }, ...props }) => (
  <DatePicker
    showIcon={false}
    confirmBtnText="Confirm"
    cancelBtnText="Cancel"
    placeholder="Select date"
    customStyles={{
      dateInput: {
        width: '100%',
        height: 35,
        marginVertical: 10,
        borderColor: '#CBCBCB',
        borderRadius: 3,
      },
      placeholderText: {
        color: '#000',
      },
    }}
    onDateChange={onChange}
    date={value}
    {...restInput}
    {...props}
  />
);

const TextField = props => (
  <Field
    component={WrappedDatePicker}
    {...props}
  />
);


export default TextField;
