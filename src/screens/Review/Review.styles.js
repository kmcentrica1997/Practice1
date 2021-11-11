import {Platform, StyleSheet} from 'react-native';
import {spacing} from '../../utils/sizes';

export const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#071330',
    marginBottom: '2.5%',
    marginLeft: '0.2%',
  },
  contactDetails: {
    color: '#071330',
    marginLeft: '0.2%',
  },
  container: {
    marginLeft: '7%',
    fontWeight: '100',
    paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
  },
  spacing: {
    marginTop: '-1%',
  },
  spacing1: {
    marginTop: '12%',
  },
  paymentText: {
    marginLeft: '9.2%',
    fontWeight: 'bold',
    fontSize: 17,
    color: '#071330',
  },
  number: {
    color: '#071330',
    fontWeight: 'bold',
    marginLeft: '9.2%',
    fontSize: 17,
  },
  spacing3: {
    marginTop: '4%',
  },
});
