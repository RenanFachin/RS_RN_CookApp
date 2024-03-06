import Animated, { SlideInDown, BounceOutDown } from 'react-native-reanimated'
import { styles } from "./styles"
import { View, Text } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'

import { theme } from '@/theme'

type Props = {
  quantity: number
  onClear: () => void
  onSearch: () => void
}

export function Selected({ quantity, onClear, onSearch }: Props) {
  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown.duration(500)}
      exiting={BounceOutDown}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} ingredientes selecionados</Text>

        <MaterialIcons
          name="close"
          size={24}
          color={theme.colors.gray_400}
          onPress={onClear}
        />
      </View>

    </Animated.View>
  )
}