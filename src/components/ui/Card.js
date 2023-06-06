import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../utils/colors';

const Card = ({children}) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    padding: 16,
    backgroundColor: Colors.scColor,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
  },
});
