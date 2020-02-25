import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export const ScreenTwo = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.titleText}>2nd screen!</Text>
      </ScrollView>
    </View>
  );
};

ScreenTwo.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30,
    paddingBottom: 30
  },
  titleText: {
    fontSize: 32,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
    paddingTop: 32,
    fontWeight: 'bold'
  }
});

export default ScreenTwo;
