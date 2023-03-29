import React, {useEffect, useState, useContext} from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  Button, 
  StyleSheet
  } from 'react-native';
import { getRecipe } from '../../utils/RecipesService.js';
import { CartContext } from '../../context/MealsContext';
export function RecipeDetails({route}) {
  const { recipeId } = route.params;
  const [recipe, setRecipe] = useState({});

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    setRecipe(getRecipe(recipeId));
  });

  function onAddToCart() {
    addItemToCart(recipe.id);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.image}
          source={recipe.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{recipe.name}</Text>
          <Text style={styles.co2}>{recipe.co2} co2</Text>
          <Text style={styles.description}>{recipe.description}</Text>
            <Button
            onPress={onAddToCart}
            title="Ajouter"
            / >
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  co2: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
});