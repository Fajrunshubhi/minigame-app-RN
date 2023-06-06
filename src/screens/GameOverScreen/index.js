import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from '../../components/ui/Title';
import bgImg from '../../assets/images/bg2.jpg';
import Colors from '../../utils/colors';
import PrimaryButton from '../../components/ui/PrimaryButton';

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GameOverScreen</Title>
      <View style={styles.imgContainer}>
        <Image source={bgImg} style={styles.image} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber} </Text>
        rounds to fuess the number
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary500,
    overflow: 'hidden',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'Righteous-Regular',
    marginVertical: 20,
  },
  highlight: {
    color: Colors.scColor,
  },
});
