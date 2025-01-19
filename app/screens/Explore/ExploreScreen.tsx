import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const ExploreScreen = () => {
  const [value, setValue] = useState('');
  const [search, setSearch] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState(false);

  const addItems = () => {
    if (value.trim() !== '') {
      setSearch([...search, value]);
      setErrorMessage(false);
      setValue('');
    } else {
      setErrorMessage(true);
    }
  };

  const removeItem = (index: number) => {
    setSearch(search.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={text => setValue(text)}
          value={value}
          style={[
            styles.textInput,
            {borderColor: errorMessage ? 'red' : 'white'},
          ]}
          placeholder={`${
            errorMessage ? 'Please fill this value!' : 'Write a text'
          }`}
          placeholderTextColor={errorMessage ? 'red' : '#fff'}
        />
        <TouchableOpacity onPress={addItems} style={styles.button}>
          <Text style={styles.buttonText}>Click</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {search.map((item, index) => (
          <View key={index} style={styles.outputContainer}>
            <Text style={styles.outputText}>{item}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => removeItem(index)}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D192C',
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    color: 'white',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  outputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  outputText: {
    color: 'white',
    fontSize: 16,
    flex: 1,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default ExploreScreen;
