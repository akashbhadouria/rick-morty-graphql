import { useQuery, gql } from "@apollo/client";

// Naming our query
const GET_CHARACTER_INFO = gql`
  query GetCharacterInfo($id: ID!) {
    character(id: $id) {
      name
      id
      image
      episode {
        name
        episode
      }
    }
  }
`;

const useCharacterInfo = (id) => {
  const { error, loading, data } = useQuery(GET_CHARACTER_INFO, {
    variables: {
      id,
    },
  });

  return { error, loading, data };
};
export default useCharacterInfo;
