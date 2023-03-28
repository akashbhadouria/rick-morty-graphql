import { useQuery, gql } from "@apollo/client";

// Naming our query
const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        gender
        image
      }
    }
  }
`;

const useCharacters = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS);
  return { error, loading, data }; 
};
export default useCharacters;
