import React from 'react';
import { Text, View } from 'react-native';
import Rating from '../Element/Rating';
import styles from './StarVisual.Style';

interface StarVisualProps {
  value:number,
  ratings:number
}

const StarVisual = (props:StarVisualProps) => {
  const { value, ratings } = props;
  return (
    <View style={styles.root}>
      <View style={{...styles.header, ...styles.m18, height: 70 }}>
        <View style={styles.left}>
          <Text style={{...styles.score, ...styles.white}}>{value.toFixed(1)}</Text>
          <View style={styles.m12}>
            <Rating value={value} half={true} size={20} spacing={12} readOnly/>
          </View>
        </View>
        <Text style={{...styles.white, ...styles.m18}}>{ratings} ratings</Text>
      </View>
    </View>
  )
}

export default StarVisual;