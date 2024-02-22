import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleClick = (action) => {
    if (action === 'increase') {
      setCount(count + 1);
    } else if (action === 'decrease') {
      setCount(count > 0 ? count - 1 : 0);
    }
  };

  const handleSetCount = () => {
    const newValue = parseInt(inputValue, 10);
    if (!isNaN(newValue)) {
      setCount(newValue);
      setInputValue(''); 
    }
  };

  const message = `Button Counter: ${count}`;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactjs.org/logo-og.png' }}
        style={styles.logo}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setInputValue}
          value={inputValue}
          keyboardType="numeric"
          placeholder="Enter starting count"
        />
        <Button title="Set" onPress={handleSetCount} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="click to increase" onPress={() => handleClick('increase')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="click to decrease" onPress={() => handleClick('decrease')} />
      </View>

      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
      
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
  messageContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'dodgerblue',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
  },
  messageText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 150, 
    borderRadius: 5,
  },
});
