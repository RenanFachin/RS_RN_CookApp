import { ScrollView, Text, View, Alert } from "react-native";
import { router } from 'expo-router'
import { styles } from "./style";
import { Ingredient } from "@/components/ingredient";
import { useEffect, useState } from "react";
import { Selected } from "@/components/selected";

import { services } from "@/services"

export default function Index() {
  const [selected, setSelected] = useState<string[]>([])
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])

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

  function handleSearch() {
    router.navigate("/recipes")
  }

  useEffect(() => {
    services.ingredients.findAll().then(setIngredients)
  }, [])

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
          ingredients.map((item) => (
            <Ingredient
              key={item.id}
              name={item.name}
              image={`${services.storage.imagePath}/${item.image}`}
              selected={selected.includes(item.id)}
              onPress={() => handleToggleSelectIngredient(item.id)}
            />
          ))
        }
      </ScrollView>


      {
        selected.length > 0 && (
          <Selected
            quantity={selected.length}
            onClear={handleClearSelectIngredients}
            onSearch={handleSearch}
          />
        )
      }
    </View>
  )
}