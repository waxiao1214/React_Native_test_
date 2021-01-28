import React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import styles from './Party.Styles';

interface PostProps {
  title:string,
  voter:string,
  location:string,
  distance:string,
  rating:string,
  date:string,
  backImage?:any,
  userImage?:any
}

const Party = (props:PostProps) => {
  const { title, voter, location, distance, rating, date, backImage, userImage } = props
  return (
    <>
      <View style={styles.root}>
        <Image source={backImage} style={{ width: 112, height: 112 }}/>
        <View style={styles.content}>
          <Text style={{...styles.title, ...styles.bold}}>
            {title}
          </Text>
          <View style={{...styles.row, ...styles.m1}}>
            <Image source={userImage} style={styles.voterImage}/>
            <Text style={{...styles.title, ...styles.pl_1 }}>By {voter}</Text>
          </View>
          <View style={{...styles.row, ...styles.m1}}>
            <Feather name="map-pin" size={16} color="#666577"/>
            <Text style={{...styles.title, marginLeft: 6}}>{location}</Text>
            <Text style={{...styles.title, ...styles.gray, marginLeft: 10}}>{distance}</Text>
          </View>
          <View style={{...styles.row, ...styles.m1}}>
            <Feather name="users" size={16} color="#666577"/>
            <Text style={{...styles.title, flex: 1, marginLeft: 12}}>{rating}</Text>
            <Feather name="calendar" size={16} color="#666577"/>
            <Text style={{...styles.title, marginLeft: 14}}>{date}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Party;
