import { ScrollView, Text, View, Alert } from "react-native";
import { styles } from "./style";
import { Ingredient } from "@/components/ingredient";
import { useState } from "react";
import { Selected } from "@/components/selected";

export default function Index() {
  const [selected, setSelected] = useState<string[]>([])

  function handleToggleSelectIngredient(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value))
    }


    setSelected((state) => [...state, value])
    console.log(selected)
  }

  function handleClearSelectIngredients() {
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      {
        text: "Não",
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => setSelected([])
      }
    ])


  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>

      <Text style={styles.message}>
        Descubra receitas baseadas nos{"\n"}produtos que você escolheu.
      </Text>


      <ScrollView contentContainerStyle={styles.ingredients} showsVerticalScrollIndicator={false}>
        {
          Array.from({ length: 100 }).map((_item, index) => (
            <Ingredient
              key={index}
              name="Maça"
              image=""
              selected={selected.includes(String(index))}
              onPress={() => handleToggleSelectIngredient(String(index))}
            />
          ))
        }
      </ScrollView>


      {
        selected.length > 0 && (
          <Selected
            quantity={selected.length}
            onClear={handleClearSelectIngredients}
            onSearch={() => { }}
          />
        )
      }
    </View>
  )
}