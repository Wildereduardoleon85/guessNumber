import { useEffect, useState } from 'react'
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import { Direction } from '../types'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import GuessLogItem from '../components/game/GuessLogItem'

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
  onGameOver: (numberOfRounds: number) => void
}

function GameScreen({ userNumber, onGameOver }: Readonly<GameScreenProps>) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess)
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess])

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length)
    }
  }, [currentGuess, userNumber])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

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
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds])
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler(Direction.lower)}>
              <FontAwesome name='minus' size={16} color='white' />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler(Direction.greater)}>
              <FontAwesome name='plus' size={16} color='white' />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem
              roundNumber={guessRounds.length - index}
              guess={item}
            />
          )}
          keyExtractor={(item) => String(item)}
        />
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
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
})

export default GameScreen
