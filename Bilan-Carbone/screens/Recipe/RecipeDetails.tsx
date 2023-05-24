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
import { CartContext } from '../../context/MealsContext.js';
import { useQuery } from '@apollo/client';
import { GETALL_RECIPES } from '../../gql/queries';

export function RecipeDetails({route}: any) {
  const { recipeId } = route.params;
  const [recipe, setRecipe] = useState({});
  const { data, loading, error } = useQuery(GETALL_RECIPES);

  const { addItemToCart } = useContext(CartContext);

  const recipeInfos = data.getAllRecipes.map((recipe: Recipe) => ({
    id: recipe.id,
    name: recipe.name,
    description: recipe.description,
    calcul: recipe.calcul,
  }));

  useEffect(() => {
    setRecipe(recipeInfos);
  }, []);

  function onAddToCart() {
    addItemToCart(recipeInfos.id);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Image
          style={styles.image}
          source={recipe.image}
        /> */}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{recipeInfos.name}</Text>
          <Text style={styles.description}>{recipeInfos.description}</Text>
          <Text style={styles.co2}>{recipeInfos.calcul} co2</Text>
          {/* {recipeInfos.map((item) => 
          <Text style={styles.description}>{item.ingredients.name}</Text>
          )} */}
          {/* <Text style={styles.description}>{recipe.ingredients.amount}</Text> */}
            <Button
            onPress={onAddToCart}
            title="Ajouter"
            />
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