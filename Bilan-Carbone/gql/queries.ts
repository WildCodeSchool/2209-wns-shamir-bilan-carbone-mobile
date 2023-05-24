import { gql } from "@apollo/client";

export const GETALL_ALIMENTS = gql`
  query GetAllAliments {
    getAllAliments {
      id
      idAgr
      subgroup
      name
      empreinte
    }
  }
`;

export const AGRIBALYSE_QUERY = gql`
  query AgribalyseQuery {
    results {
      _i
      name
      subgroup
      empreinte
    }
  }
`;

export const GETALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      id
      email
      firstName
      lastName
    }
  }
`;

export const GETALL_RECIPES = gql`
  query GetAllRecipes {
    getAllRecipes {
      id
      name
      description
      calcul
    }
  }
`;

// export const GET_ONE_RECIPE = (id: number) =>
// gql`
//   query GetOneRecipe {
//     getOneRecipe(id: ${id}) {
//       id
//       name
//       description
//       calcul
//     }
//   }
// `;
