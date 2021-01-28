import { StyleSheet } from 'react-native';

const StarVisualStyles = StyleSheet.create({
  root: {
    backgroundColor: '#25233D',
  },
  m18: {
    marginTop: 18
  },
  m12: {
    marginTop: 14
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  left: {
    flex: 1,
    flexDirection: 'row'
  },
  score: {
    fontSize: 40,
    marginRight: 12,
    fontWeight: "900",
    lineHeight: 48
  },
  white: {
    color: 'white',
  },
})

export default StarVisualStyles;