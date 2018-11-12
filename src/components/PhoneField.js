import React from 'react';
import PhoneInput from 'react-native-phone-input';
import { Field } from 'redux-form';
import { View } from 'react-native';
import ValidationError from './ValidationError';

const WrappedTextInput = ({
  input: { onChange, ...restInput },
  meta: { touched, error }, ...props
}) => (
  <View>
    <PhoneInput
      {...restInput}
      {...props}
      onChangePhoneNumber={onChange}
      underlineColorAndroid="transparent"
    />
    <ValidationError
      touched={touched}
      error={error}
    />
  </View>
);

const TextField = props => (
  <Field
    component={WrappedTextInput}
    {...props}
  />
);


export default TextField;
