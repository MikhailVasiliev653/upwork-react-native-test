import React from 'react';
import { TextInput, View } from 'react-native';
import { Field } from 'redux-form';
import ValidationError from './ValidationError';

const WrappedTextInput = ({
  input: { onChange, ...restInput },
  meta: { error, touched }, ...props
}) => (
  <View>
    <TextInput
      onChangeText={onChange}
      {...restInput}
      {...props}
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
