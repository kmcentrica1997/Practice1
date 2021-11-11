import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './container.styles';

export default function Container(props) {
  return (
    <View style={styles.container}>
      <Text>{props.text}</Text>
    </View>
  );
}
