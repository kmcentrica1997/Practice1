import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import Review from './screens/Review/Review';
import {styles} from './App.styles';
import TaskBar from './components/taskbar/taskbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Review />
    </View>
  );
}
