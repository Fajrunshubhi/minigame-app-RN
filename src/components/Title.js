import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = props => {
  return <Text style={styles.title}>{props.children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'yellow',
    textAlign: 'center',
    borderWidth: 2,
    padding: 12,
    borderColor: 'yellow',
  },
});
