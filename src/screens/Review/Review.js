import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Bills from '../../components/containers/Bills/Bills';
import Container from '../../components/containers/container';
import {styles} from './Review.styles';

export default function Review() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>HomeCare Three</Text>
        <Text style={styles.contactDetails}>
          88, Lee Green Lane SE26 6TC{'\n'}jon@email.com
        </Text>
      </View>
      <View style={styles.spacing}>
        <Bills />
      </View>
      <View style={styles.spacing1}>
        <View>
          <Text style={styles.paymentText}>Payment set up</Text>
          <Container text="Add account" />
        </View>
        <View>
          <Text style={styles.number}>Contact number</Text>
          <Container text="0712345678" />
        </View>
      </View>
    </SafeAreaView>
  );
}
