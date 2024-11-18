import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Fetch data from JSONPlaceholder API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json.slice(0, 10))) // Limit to 10 items
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Example</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here"
        placeholderTextColor="#888"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TouchableOpacity style={styles.button} onPress={() => setInputValue('')}>
        <Text style={styles.buttonText}>Clear Input</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1e1e2f',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f5f5f5',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: '#4e4e80',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  input: {
    height: 50,
    borderColor: '#4e4e80',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    backgroundColor: '#6c63ff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#6c63ff',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
  item: {
    fontSize: 16,
    color: '#f5f5f5',
    backgroundColor: '#2a2a40',
    marginVertical: 8,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export default App;
