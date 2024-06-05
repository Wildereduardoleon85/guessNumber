import { Image, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={{ marginTop: 100 }}>
      <Text>Hello world!!</Text>
      <Image
        style={{ width: 100, height: 100 }}
        source={require('./assets/images/dice.png')}
      ></Image>
    </View>
  )
}
