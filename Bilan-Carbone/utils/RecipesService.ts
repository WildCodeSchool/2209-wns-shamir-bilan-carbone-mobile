// type Recipe = {
//     id: number,
//     name: string,
//     co2: number,
//     image: any,
//     ingredients: [string]: number,
// };

interface Recipe {
    id: string;
    name: string;
    description: string;
    calcul: string;
  }
  
// interface Recipe {
//     id: number;
//     name: string;
//     description: string;
//     co2: number;
//     image: any,
//     ingredients: {
//       name: string;
//       amount: number;
//     }[];
//   }

// const RECIPES: Recipe[] = [
//     {
//         id: 100,
//         name: 'Pâtes Carbonara',
//         description: 'Un grand classique de la cuisine italienne !',
//         co2: 350,
//         image: require('../assets/images/pasta-carbonara.jpg'),
//         ingredients: [
//             { name: 'Pâtes', amount: 100 },
//             { name: 'Lardons', amount: 50 },
//             { name: 'Crème fraîche', amount: 50 },
//             { name: 'Oeufs', amount: 50 },
//             { name: 'Parmesan', amount: 50 },
//             { name: 'Sel', amount: 0 },
//             { name: 'Poivre', amount: 0 },
//         ]
//     },
//     {
//         id: 101,
//         name: 'Dahl de lentilles',
//         description: 'Une recette équilibrée et pleine de protéines !',
//         co2: 600,
//         image: require('../assets/images/dahl-lentilles.jpg'),
//         ingredients: [
// { name: 'Lentilles', amount: 100 },
// { name: 'Oignons', amount: 50 },
// { name: 'Gingembre', amount: 50 },
// { name: 'Curry', amount: 50 },
// { name: 'Cumin', amount: 50 },
// { name: 'Sel', amount: 0 },
// { name: 'Poivre', amount: 0 },
//         ]
//     },
//     {
//         id: 102,
//         name: 'Lasagnes végétariennes',
//         description: 'Un plat complet et réconfortant !',
//         co2: 200,
//         image: require('../assets/images/lasagnes-vege.jpg'),
//         ingredients: [
// { name: 'Pâtes', amount: 100 },
// { name: 'Courgettes', amount: 50 },
// { name: 'Aubergines', amount: 50 },
// { name: 'Tomates', amount: 50 },
// { name: 'Oignons', amount: 50 },
// { name: 'Sel', amount: 0 },
// { name: 'Poivre', amount: 0 },
//         ]
//     },
// ];

// export function getRecipes() {
//     return RECIPES;
// }
// export function getRecipe(id: number) {
//     return RECIPES.find((recipe) => (recipe.id == id));
// }
