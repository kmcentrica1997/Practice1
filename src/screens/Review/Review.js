import React from 'react';
import {View, ScrollView, Text, SafeAreaView} from 'react-native';
import Bills from '../../components/containers/Bills/Bills';
import Container from '../../components/containers/container';
import {styles} from './Review.styles';
import ReviewBar from '../../components/TaskBar/TaskBar'
export default function Review() {
  return (
    <View>
      <ReviewBar />
      <SafeAreaView>
        <ScrollView>
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
              <Container style={{fontWeight: 'bold'}} text="Add account" />
            </View>
            <View style={styles.spacing3}>
              <Text style={styles.number}>Contact number</Text>
              <Container text="0712345678" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
