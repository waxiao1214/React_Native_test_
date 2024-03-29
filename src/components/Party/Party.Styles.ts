import { StyleSheet } from 'react-native';

const PostStyles = StyleSheet.create({
  root: {
    borderRadius: 10,
    backgroundColor: "#201F34",
    overflow: 'hidden',
    flexDirection: 'row',
    position: 'relative'
  },
  content: {
    paddingTop: 10,
    paddingLeft: 12,
    paddingBottom: 10,
    paddingRight: 10,
    flex: 1
  },
  commercial: {
    position: 'absolute',
    top: 10,
    left: 10
  },
  rating_mark: {
    position: 'absolute',
    bottom: 12,
    left: 10
  },
  gray: {
    color: '#666577'
  },
  pl_1: {
    paddingLeft: 4
  },
  bold: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0.35,
    color: 'white'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  m1: {
    marginTop: 4
  },
  voterImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1
  }
})

export default PostStyles;