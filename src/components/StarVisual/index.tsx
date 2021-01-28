import React from 'react';
import { Text, View } from 'react-native';
import { posts } from '../../constant/data';
import Rating from '../Element/Rating';
import styles from './StarVisual.Style';

const Home = (props:any) => {
  const { navigation } = props;
  return (
    <View style={styles.root}>
      <View style={{...styles.header, ...styles.m18, height: 70 }}>
        <View style={styles.left}>
          <Text style={{...styles.score, ...styles.white}}>4.7</Text>
          <View style={styles.m12}>
            <Rating value={3.5} half={true} size={20} spacing={12} readOnly/>
          </View>
        </View>
        <Text style={{...styles.white, ...styles.m18}}>132 ratings</Text>
      </View>
    </View>
  )
}

export default Home;