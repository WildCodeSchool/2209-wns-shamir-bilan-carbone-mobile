import { gql } from "@apollo/client";

export const CARBON_QUERY = gql`
  query CarbonQuery {
    results {
      name
    }
  }
`;
