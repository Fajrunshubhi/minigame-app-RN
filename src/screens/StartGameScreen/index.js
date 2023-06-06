import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import PrimaryButton from '../../components/ui/PrimaryButton';
import Colors from '../../utils/colors';
import Title from '../../components/ui/Title';
import Card from '../../components/ui/Card';

const StartGameScreen = props => {
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
      return;
    }
    props.onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Text style={styles.instructionText}>Enter a Number</Text>
        <Text style={styles.cekFont}>Ini menggunakan font baru</Text>
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
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  instructionText: {
    color: Colors.primary500,
    fontSize: 24,
    fontFamily: 'Righteous-Regular',
  },
  cekFont: {
    fontSize: 24,
    color: 'red',
    fontFamily: 'Righteous-Regular',
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
    borderBottomColor: Colors.primary500,
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 32,
    marginBottom: 10,
    color: Colors.primary500,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
