import React from 'react';
import { Text, View } from 'react-native'; 
import styles from './UserRating.Style'; // import styles
import { posts } from '../../constant/data';
import Party from '../../components/Party'; // Party component for test

const UserRating = () => {
  return(
    <View style={styles.root}>
      {posts.map((post, key) => <Party
        key={key}
        title={post.title} 
        voter={post.voter} 
        location={post.city}
        rating={post.rating}
        date={post.date}
        distance={post.distance}
        backImage={post.backImage}
        userImage={post.userImage}
      />
      )}
    </View>
  )
}

export default UserRating
