import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';

const index = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
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
