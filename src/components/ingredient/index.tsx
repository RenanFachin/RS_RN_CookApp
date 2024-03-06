import { Image, Pressable, Text, PressableProps } from "react-native";
import { styles } from "./styles";

export type IngredientsProps = PressableProps & {
  name: string
  image: string
  selected?: boolean
}

export function Ingredient({ image, name, selected = false, ...props }: IngredientsProps) {
  return (
    <Pressable style={[styles.container, selected && styles.selected]} {...props}>
      <Image
        source={require("@/assets/apple.png")}
        style={styles.image}
      />

      <Text style={styles.title}>
        {name}
      </Text>
    </Pressable>
  )
}