import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handlePress = () => {
    if (name.trim() === '') {
      Alert.alert('Please enter your name!');
    } else {
      setGreeting(`Hello, ${name}!`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to My App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Say Hello" onPress={handlePress} />
      {greeting ? <Text style={styles.greeting}>{greeting}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 18,
    color: 'green',
    marginTop: 20,
  },
});
