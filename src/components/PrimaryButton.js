import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PrimaryButton = ({children, onPress}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInerContainer, styles.cek]
            : styles.buttonInerContainer
        }
        onPress={onPress}
        android_ripple={{color: '#F79327'}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 30,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInerContainer: {
    backgroundColor: 'yellow',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 5,
  },
  buttonText: {
    color: 'blue',
    textAlign: 'center',
  },
  cek: {
    opacity: 0.5,
  },
});
