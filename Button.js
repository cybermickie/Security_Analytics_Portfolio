import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(label)}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    margin: 5,
    borderRadius: 40,
  },
  text: {
    fontSize: 24,
    color: '#000',
  },
});

export default Button;
