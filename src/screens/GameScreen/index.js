import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from '../../components/Title';

const GameScreen = () => {
  const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  };
  return (
    <View style={styles.screen}>
      <Title>Opponest Guess</Title>
      <View>
        <Text>Higher or Lower</Text>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
