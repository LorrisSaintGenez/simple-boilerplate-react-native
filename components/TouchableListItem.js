import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default TouchableListItem = ({ children, ...other }) => {
  const { textProps, touchableProps } = other;
  return (
    <TouchableOpacity {...touchableProps}>
      <Text {...textProps}>{children}</Text>
    </TouchableOpacity>
  );
};
