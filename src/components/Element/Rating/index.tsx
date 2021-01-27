import React from 'react'
import { Text, View } from 'react-native';
import Stars from 'react-native-stars';
import styles from './StarRating.style';

const STAR_IMAGE = require('../../../assets/img/star.png')
const STAR_EMPTY = require('../../../assets/img/star_empty.png')
const STAR_HALP = require('../../../assets/img/star_half.png')

interface RatingProps {
  getValue?:Function
  value:number,
  half?:boolean,
  spacing?:number,
  size:number,
  readOnly?:boolean
}

const StarRating = (props:RatingProps) => {
  const { value, getValue, half, spacing, size, readOnly } = props;
  const starValue = Math.floor(value) === value ? value : Math.floor(value) + 0.5
  return (
    <View style={styles.root}>
      <Stars
        half={half}
        default={starValue}
        update={(value:number) => getValue && getValue(value)}
        spacing={spacing}
        starSize={size}
        count={5}
        fullStar={STAR_IMAGE}
        emptyStar={STAR_EMPTY}
        halfStar={STAR_HALP}
        disabled={readOnly || false}
      />
    </View>
  )
}

export default StarRating;