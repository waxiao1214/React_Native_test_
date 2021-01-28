import React from 'react';
import { SafeAreaView, FlatList, Text } from 'react-native';
import Party from '../../components/Party';
import Comment from '../../components/comment'
import StarVisual from '../../components/StarVisual'
import { posts, user, reviews } from '../../constant/data';
import styles from './PartyRating.Style';

const PartyRating = (props:any) => {
  const { params } = props.route;
  const id = params.id
  const post = posts.filter(post => post.id === id)[0]
  const postReviews = reviews.filter(review => review.post_id === id)[0].reviews
  const [filteredReviews, setFilteredReviews] = React.useState(postReviews.slice(0,3))
  const [moreCount, setMoreCount] = React.useState(0);
  
  React.useEffect(() => {
    setMoreCount(postReviews.length - filteredReviews.length)
  }, [filteredReviews, postReviews])
  
  const renderItem = ({item}:any) => (
    <Comment score={item.rating} text={item.commit} image={item.image} voter={item.voter} edited={item.edited} beforeTime={item.beforeTime}/>
  )

  return(
    <SafeAreaView style={styles.container}>
      <Party 
        title={post.title} 
        voter={`${user.firstName} ${user.lastName}`} 
        location={post.city}
        rating={post.rating}
        date={post.date}
        distance={post.distance}
        backImage={post.backImage}
        userImage={user.image}
      />
      <StarVisual value={post.score} ratings={post.reviews}/>
      {moreCount > 0 &&  <Text 
          style={styles.moreView}
          onPress={() => setFilteredReviews(postReviews)}
        >
          Show {moreCount} more reviews
        </Text>
      }
      <FlatList
        data={filteredReviews}
        renderItem={renderItem} 
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default PartyRating