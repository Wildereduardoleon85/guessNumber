import { StyleSheet, Text, View } from 'react-native'
import Title from '../components/Title'

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS */}
      <View>
        <Text>Higher or lower?</Text>
        {/* +
        - */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 42,
    paddingHorizontal: 24,
  },
})

export default GameScreen
