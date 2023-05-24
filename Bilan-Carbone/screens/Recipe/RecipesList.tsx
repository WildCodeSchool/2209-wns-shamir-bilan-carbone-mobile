import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { RecipeCard } from './RecipeCard';
// import { getRecipes } from '../../utils/RecipesService.js';
import SearchBis from '../../components/SearchBis';
import { GETALL_RECIPES } from '../../gql/queries';
import { useQuery } from "@apollo/client";

export function RecipesList ({navigation}: any) {
function renderRecipe({item: recipe}: {item: Recipe}) {
    return (
      <RecipeCard {...recipe} 
      onPress={() => {
        navigation.navigate('RecipeDetails', {
          recipeId: recipe.id,
        });
      }}
      />
    );
  }

  const [recipes, setRecipes] = useState([]);
  const { data } = useQuery(GETALL_RECIPES);

  const recipeInfos = data.getAllRecipes.map((recipe: Recipe) => ({
    id: recipe.id,
    name: recipe.name,
    description: recipe.description,
    calcul: recipe.calcul,
  }));

  useEffect(() => {
    setRecipes(recipeInfos);
  }, []);

  return (
    <>
    <SearchBis />
    <FlatList
      style={styles.recipesList}
      contentContainerStyle={styles.recipesListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={recipes}
      renderItem={renderRecipe}
    />
    </>
  );
}
const styles = StyleSheet.create({
  recipesList: {
    backgroundColor: '#eeeeee',
  },
  recipesListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});