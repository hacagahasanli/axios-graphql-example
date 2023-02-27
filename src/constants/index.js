export const GRAPHQL_API = "https://rickandmortyapi.com/graphql";

export const GET_CHARACTERS_QUERY = `
   query {
  characters{
    results{
      id,
      name,
      status,
      species,
      type,
      gender,
      image
    }
  },
  episodes{
		results{
      id,
      name,
      air_date,
      episode,
      created
    }
  }
}`;
