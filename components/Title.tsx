import React from 'react'
import { StyleSheet, Text } from 'react-native'
import colors from '../constants/colors'

type TitleProps = {
  children: React.ReactNode
}

function Title({ children }: Readonly<TitleProps>) {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.accent500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: colors.accent500,
    padding: 12,
  },
})

export default Title
