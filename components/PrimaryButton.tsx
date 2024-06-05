import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import colors from '../constants/colors'

type PrimaryButtonProps = {
  children: React.ReactNode
  onPress: (event: GestureResponderEvent) => void
}

function PrimaryButton({ children, onPress }: Readonly<PrimaryButtonProps>) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          // styles.pressed takes effect on ios
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: colors.primary600 }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: colors.primary500,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
})
export default PrimaryButton
