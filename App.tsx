import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import colors from './constants/colors'

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null)

  function pickNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient
        colors={[colors.primary700, colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require('./assets/images/dice.png')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})
