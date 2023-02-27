import { useEffect, useState } from "react";
import { GRAPHQL_API, GET_CHARACTERS_QUERY } from "./constants";
import axios from "axios";
import { Characters, Episodes } from "./components";

const style = { display: "flex", flexDirection: "column" };
const container = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  maxWidth: "700px",
  margin: "0 auto",
};

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.post(GRAPHQL_API, {
        query: GET_CHARACTERS_QUERY,
      });

      const characters = response?.data?.data?.characters?.results;
      const episodes = response?.data?.data?.episodes?.results;
      setData({ characters, episodes });
    };
    getCharacters();
  }, []);

  return (
    <div style={container}>
      <Characters style={style} characters={data?.characters} />
      <Episodes style={style} episodes={data?.episodes} />
    </div>
  );
};

export default App;
