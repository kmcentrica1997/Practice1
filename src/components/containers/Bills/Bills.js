import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Bills.styles';

export default function Bills() {
  return (
    <View style={styles.container}>
      <View style={styles.payments}>
        <Text style={styles.subheading}>Term: Monthly</Text>
        <Text>Monthly Payments</Text>
      </View>
      <View style={styles.excess}>
        <Text style={styles.subheading}>Excess: £60</Text>
        <Text>You'll pay this amount for{'\n'}each repair</Text>
      </View>
      <View style={styles.renewal}>
        <Text style={styles.subheading}>Auto-renewal</Text>
        <Text>
          Renew your service cover plans{'\n'}automatically each year?{'\n'}
          <Text style={{fontWeight: 'bold'}}>Learn more</Text>
        </Text>
      </View>
    </View>
  );
}
