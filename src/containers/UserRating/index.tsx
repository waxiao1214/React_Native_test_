import React from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native'; 
import styles from './UserRating.Style'; // import styles
import { posts, user } from '../../constant/data';
import Rating from '../../components/Element/Rating';
import Party from '../../components/Party'; // Party component for test
import StarVisual from '../../components/StarVisual'

const Item = ({item, navigation}:any) => (
  <View>
    <Party
      title={item.title} 
      voter={`${user.firstName} ${user.lastName}`} 
      location={item.city}
      rating={item.rating}
      date={item.date}
      distance={item.distance}
      backImage={item.backImage}
      userImage={user.image}
    />
    <View style={{...styles.header, height: 48, ...styles.m12}}>
      <View style={styles.left}>
        <View style={{marginLeft: -6}}>
          <Rating value={item.score} half={true} size={18} spacing={12} readOnly />
        </View>
        <Text style={{...styles.white, marginLeft: 20}}>20 ratings</Text>
      </View>
      <Text style={styles.gray} 
        onPress={() => {
          navigation.navigate('Party Rating', { id: item.id })
        }}
      > 
        Show reviews
      </Text>
    </View>
  </View>
)

const UserRating = (props:any) => {
  const { navigation } = props;
  const renderItem = ({ item }: any) => (
    <Item item={item} navigation={navigation}/>
  );

  return(
    <SafeAreaView style={styles.container}>
      <StarVisual />
      <FlatList
        data={posts}
        renderItem={renderItem} 
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default UserRating
