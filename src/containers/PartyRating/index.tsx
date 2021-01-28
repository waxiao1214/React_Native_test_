import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import styles from './PartyRating.Style';

const PartyRating = () => {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.root}>
        <Text>Party Rating</Text>
      </View>
    </SafeAreaView>
  )
}

export default PartyRating
