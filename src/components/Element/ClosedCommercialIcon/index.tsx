import React from 'react';
import { View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Commercial.Styles';

const ClosedCommercialIcon = () => {
  return (
    <View style={styles.container}>
      <Feather name="lock" color="white"/>
      <MaterialCommunityIcons name="currency-usd-circle-outline" color="white" />
    </View>
  )
}

export default ClosedCommercialIcon;
 