import React from 'react';
import {Text, View} from 'react-native';
import { styles } from '../TaskBar/TaskBar.styles';

export default function ReviewBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Review</Text>
    </View>
  );
}
