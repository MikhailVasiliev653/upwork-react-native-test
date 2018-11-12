import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ title, style, styleText, onPress }) => (
  <TouchableOpacity
    underlayColor={'#fff'}
    onPress={onPress}
    style={style}
  >
    <Text style={styleText}>{ title }</Text>
  </TouchableOpacity>
);

export default Button;