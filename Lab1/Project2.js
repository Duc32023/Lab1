import React from 'react';
import { View, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Project2 = () => {
  const showAlert = () => {
    Alert.alert('hello');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={showAlert}>
        <Text style={styles.buttonText}>Nhấn</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Project2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
