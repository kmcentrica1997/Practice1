import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {StyleSheet} from 'react-native';
import {styles} from './Review.styles';
export default function Review() {
  return (
    <SafeAreaView>
      <View style={styles.container1}>
        <Text style={styles.title}>HomeCare Three</Text>
        <Text style={styles.contactDetails}>88, Lee Green Lane SE26 6TC</Text>
        <Text style={styles.contactDetails}>jon@email.com</Text>
      </View>
    </SafeAreaView>
  );
}
