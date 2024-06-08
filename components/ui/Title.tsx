import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native'

type TitleProps = {
  children: React.ReactNode
  style?: StyleProp<TextStyle>
}

function Title({ children, style }: Readonly<TitleProps>) {
  return <Text style={[styles.title, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
})

export default Title
