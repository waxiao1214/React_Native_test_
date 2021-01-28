import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './RatingMark.Style';

const COLOR_STAR = require("../../../assets/img/color_star.png")

interface RatingMarkProps {
  text?:string
}

const RatingMark = (props:RatingMarkProps) => {
  const { text } = props;
  return (
    <View style={styles.contaienr}>
      <Text style={styles.text}>{text}</Text>
      <Image source={COLOR_STAR} style={styles.star}/>
    </View>
  )
}

export default RatingMark;
