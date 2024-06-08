import { StyleSheet, View } from 'react-native'
import colors from '../../constants/colors'

type CardProps = {
  children: React.ReactNode
}

export default function Card({ children }: Readonly<CardProps>) {
  return <View style={styles.card}>{children}</View>
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: 36,
    backgroundColor: colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    alignItems: 'center',
  },
})
