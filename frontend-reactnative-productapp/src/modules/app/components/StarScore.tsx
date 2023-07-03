import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  score: number;
}

const StarScore = ({ score }: Props) => {

  const fullStars = Math.trunc(score);
  const halfStars = Math.round(score - Math.floor(score));
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <View style={styles.scoreContent}>
      {
        [...Array(fullStars)].map((value, index) => (
          <Icon key={index} name="star" size={20} color="#FFC107" />
        ))
      }
      {
        [...Array(halfStars)].map((value, index) => (
          <Icon key={index} name="star-half-outline" size={20} color="#FFC107" />
        ))
      }
      {
        [...Array(emptyStars)].map((value, index) => (
          <Icon key={index} name="star-outline" size={20} color="#FFC107" />
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  scoreContent: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default StarScore;