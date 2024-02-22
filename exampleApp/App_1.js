import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const handleClickIncrease = () => setCount(count + 1);
  const handleClickDecrease = () => setCount(count > 0 ? count - 1 : 0);
  return (
    <View style={styles.container}>
      <Button title="Click me to increase" onPress={handleClickIncrease} />
      <Button title="Click me to decrease" onPress={handleClickDecrease} />
      <Text>You have pressed the button {count} times.</Text>
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
});
