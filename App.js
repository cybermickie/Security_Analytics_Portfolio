import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalculatorScreen from './screens/CalculatorScreen';
import HistoryScreen from './screens/HistoryScreen';
import UnitConverterScreen from './screens/UnitConverterScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Unit Converter" component={UnitConverterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
