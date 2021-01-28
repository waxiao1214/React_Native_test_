import { StyleSheet } from 'react-native';

const ReviewStyles = StyleSheet.create({
  root: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 10
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderColor: "white",
    borderWidth: 1
  },
  content: {
    flex: 1,
    marginLeft: 10
  },
  white: {
    color: 'white'
  },
  gray: {
    color: "#666577"
  },
  ml: {
    marginLeft: 10
  },
  contentTitle: {
    fontSize: 14,
    marginTop: 10,
    lineHeight: 17,
  },
  bold: {
    fontWeight: "bold",
  }
})

export default ReviewStyles;