import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  TouchableOpacity,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [orderDate, setOrderDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      Alert.alert('Please enter both username and password!');
    } else {
      setIsLoggedIn(true);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || orderDate;
    setShowDatePicker(false);
    setOrderDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || orderDate;
    setShowTimePicker(false);
    setOrderDate(currentTime);
  };

  if (!isLoggedIn) {
    // Dummy Login Page
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    );
  }

  // Orders Page
  return (
    <View style={styles.container}>
      {/* Dummy Navigation Bar */}
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>Welcome, {username}</Text>
      </View>

      <Text style={styles.header}>Set Order Date and Time</Text>

      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.buttonText}>
          {`Set Date: ${orderDate.toLocaleDateString()}`}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={orderDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShowTimePicker(true)}
      >
        <Text style={styles.buttonText}>
          {`Set Time: ${orderDate.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}`}
        </Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={orderDate}
          mode="time"
          display="default"
          onChange={handleTimeChange}
        />
      )}

      <Text style={styles.greeting}>
        Selected: {orderDate.toLocaleString()}
      </Text>
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
  navbar: {
    width: '100%',
    height: 60,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  navbarText: {
    color: '#fff',
    fontSize: 18,
  },
  dateButton: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#6200ee',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  greeting: {
    fontSize: 16,
    color: 'green',
    marginTop: 20,
  },
});
