import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../utils/colors';

const GuessLogItem = ({roundNumber, guess}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary500,
    borderWidth: 2,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.ripleColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
  },
  itemText: {
    fontFamily: 'Righteous-Regular',
  },
});
