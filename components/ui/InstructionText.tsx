import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native'
import colors from '../../constants/colors'

type InstructionTextProps = {
  children: React.ReactNode
  style?: StyleProp<TextStyle>
}

export default function InstructionText({
  children,
  style,
}: Readonly<InstructionTextProps>) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: colors.accent500,
    fontSize: 24,
  },
})
