import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './container.styles';

export default function Container(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}
