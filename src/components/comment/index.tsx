import React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Rating from '../Element/Rating';
import styles from './Comment.Style';

interface CommentProps {
  text:string,
  image:any,
  score:number,
  edited?:boolean
}

const Comment = (props:CommentProps) => {
  const { text, image, score, edited } = props
  return (
    <>
      <View style={styles.root}>
        <Image source={image} style={styles.image}/>
        <View style={styles.content}>
          <View style={{width: 150, marginLeft: -26}}>
            <Rating value={score} half={false} size={11} spacing={12} readOnly />
          </View>
          <Text style={{...styles.contentTitle, ...styles.white}}>
            {text}
            {edited && 
              <Text style={styles.gray}>(Edited)</Text>
            }
          </Text>
        </View>
        <Entypo name="dots-three-vertical" size={16} color="#666657" />
      </View>
    </>
  );
};

export default Comment;