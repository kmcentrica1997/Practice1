import React from 'react';
import {View} from 'react-native';
import Review from './screens/Review/Review';
import {styles} from './App.styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Review />
    </View>
  );
}
