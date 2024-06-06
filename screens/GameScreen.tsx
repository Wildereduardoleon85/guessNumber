import { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import { Direction } from '../types'

function generateRandomBetween(min: number, max: number, exclude: number) {
  const rndNumber = Math.floor(Math.random() * (max - min)) + min

  if (rndNumber === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return rndNumber
  }
}

let minBoundary = 1
let maxBoundary = 100

type GameScreenProps = {
  userNumber: number
  onGameOver: () => void
}

function GameScreen({ userNumber, onGameOver }: Readonly<GameScreenProps>) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess)

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver()
    }
  }, [currentGuess, userNumber])

  function nextGuessHandler(direction: Direction) {
    if (
      (direction === Direction.lower && currentGuess < userNumber) ||
      (direction === Direction.greater && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ])
      return
    }

    if (direction === Direction.lower) {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    )
    setCurrentGuess(newRndNumber)
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <PrimaryButton onPress={() => nextGuessHandler(Direction.lower)}>
          -
        </PrimaryButton>
        <PrimaryButton onPress={() => nextGuessHandler(Direction.greater)}>
          +
        </PrimaryButton>
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
