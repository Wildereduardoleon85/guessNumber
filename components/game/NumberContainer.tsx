import { StyleSheet, Text, View } from 'react-native'
import colors from '../../constants/colors'

type NumberContainerProps = {
  children: React.ReactNode
}

export default function NumberContainer({
  children,
}: Readonly<NumberContainerProps>) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: colors.accent500,
    fontSize: 36,
    fontFamily: 'open-sans-bold',
  },
})
