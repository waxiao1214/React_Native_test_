import { StyleSheet } from 'react-native';

const RatingMarkStyles = StyleSheet.create({
  contaienr: {
    width: 53,
    height: 20,
    backgroundColor: "rgba(46, 35, 66, 0.6)",
    borderRadius: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5
  },
  star: {
    marginLeft: 6
  },
  text: {
    color: 'white',
    fontSize: 10
  }
})

export default RatingMarkStyles;