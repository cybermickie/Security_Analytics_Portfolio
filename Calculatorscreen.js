import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import { calculateExpression } from '../api/api';
import { handleButtonPress, formatNumber } from '../utils/helpers';

const CalculatorScreen = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('0');
  const sessionId = 'calc_session_123'; // Replace with dynamic session ID if required

  const handlePress = async (value) => {
    if (value === '=') {
      try {
        const data = await calculateExpression(expression, sessionId);
        setResult(formatNumber(data.result));
      } catch (error) {
        setResult('Error');
      }
    } else {
      setExpression(handleButtonPress(value, expression));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.expression}>{expression}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttonGrid}>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'].map((label) => (
          <Button key={label} label={label} onPress={handlePress} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  display: {
    flex: 2,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
  },
  expression: {
    fontSize: 24,
    color: '#fff',
  },
  result: {
    fontSize: 48,
    color: '#fff',
  },
  buttonGrid: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
});

export default CalculatorScreen;
