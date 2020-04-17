import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Algos from '../components/Algos.jsx';

const AlgoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.algoHeader}>
        <Text style={styles.algoTitle}>Algorithms</Text>
      </View>
      <Algos />
    </View>
  );
};

export default AlgoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  algoHeader: {
    backgroundColor: '#17b9eb',
    height: 100,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 40,
  },
  algoTitle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
