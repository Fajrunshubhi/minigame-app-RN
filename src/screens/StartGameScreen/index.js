import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import PrimaryButton from '../../components/PrimaryButton';

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = inputText => {
    setEnteredNumber(inputText);
  };
  const resetInputHandler = () => {
    setEnteredNumber('');
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      Alert.alert(
        'Invalid Number',
        'Number has to be a number between 1 and 99',
        [
          {
            text: 'Okay',
            onPress: resetInputHandler,
            style: 'destructive',
          },
        ],
        {
          cancelable: true,
        },
      );
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    padding: 16,
    backgroundColor: '#00C4FF',
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    height: 50,
    width: 60,
    borderBottomColor: 'yellow',
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 32,
    marginBottom: 10,
    color: 'yellow',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
