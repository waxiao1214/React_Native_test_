import React from 'react';
import { Text, View } from 'react-native'; 
import styles from './UserRating.Style'; // import styles
import Rating from '../../components/Element/Rating'; // star element for test

const UserRating = () => {
  return(
    <View style={styles.root}>
      <Rating value={3.5} half={true} size={18} spacing={12} readOnly />
    </View>
  )
}

export default UserRating
