import React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Rating from '../Element/Rating';
import styles from './Comment.Style';

interface CommentProps {
  text:string,
  image:any,
  score:number,
  edited?:boolean,
  voter:string,
  beforeTime:string
}

const Comment = (props:CommentProps) => {
  const { text, image, score, edited, voter, beforeTime } = props
  return (
    <>
      <View style={styles.root}>
        <Image source={image} style={styles.image}/>
        <View style={styles.content}>
          <View style={{width: 150, marginLeft: -26}}>
            <Rating value={score} half={false} size={11} spacing={12} readOnly />
          </View>
          <Text style={{...styles.contentTitle, ...styles.white}}>
            <Text style={{...styles.bold, ...styles.white}}>{voter}</Text>
            <Text>{` ${text} `}</Text>
            <Text style={{...styles.gray}}>{`  ${beforeTime}`}</Text>
            { edited && 
            <Text style={{...styles.gray}}>
              {`    (Edited)`}
              <Feather name="edit-3" color="#666657"/>
            </Text> }
          </Text>
        </View>
        <Entypo name="dots-three-vertical" size={16} color="#666657" />
      </View>
    </>
  );
};

export default Comment;