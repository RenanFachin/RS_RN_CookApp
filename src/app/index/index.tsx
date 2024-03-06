import { Text, View } from "react-native";
import { styles } from "./style";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>

      <Text style={styles.message}>
        Descubra receitas baseadas nos{"\n"}produtos que você escolheu.
      </Text>


    </View>
  )
}