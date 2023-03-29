const PRODUCTS = [
    {
        id: 100,
        name: 'Pâtes Carbonara',
        co2: 350,
        image: require('../assets/images/pasta-carbonara.jpg'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 101,
        name: 'Dahl de lentilles',
        co2: 600,
        image: require('../assets/images/dahl-lentilles.jpg'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 102,
        name: 'Lasagnes végétariennes',
        co2: 200,
        image: require('../assets/images/lasagnes-vege.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    }
];
export function getRecipes() {
    return PRODUCTS;
}
export function getRecipe(id) {
    return PRODUCTS.find((recipe) => (recipe.id == id));
}
