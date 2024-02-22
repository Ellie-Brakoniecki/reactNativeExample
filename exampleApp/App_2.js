import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
    const [count, setCount] = useState(0);
    
    const handleClick = (action) => {
      if (action === 'increase') {
        setCount(count + 1);
      } else if (action === 'decrease') {
        setCount(count > 0 ? count - 1 : 0);
      }
    };


  const message = `Button Counter: ${count}`;

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="click me to increase" onPress={() => handleClick('increase')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="click me to decrease" onPress={() => handleClick('decrease')} />
      </View>
      <Text>{message}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginBottom: 10, 
  },
}); 
