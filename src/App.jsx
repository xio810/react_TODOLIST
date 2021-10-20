import { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
};

const Main = () => {
  const { isLoading, error, data } = useQuery("pokemon", () =>
    fetch("https://pokeapi.co/api/v2/pokemon").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <h1>POKÉMON</h1>
      <ul>
        {data.results.map((poke) => {
          const urlBits = poke.url.split("/");
          const no = parseInt(urlBits[urlBits.length - 2]);

          return (
            <li key={poke}>
              <img
                src={`https://cdn.jsdelivr.net/gh/PokeAPI/sprites/sprites/pokemon/${no}.png`}
              />
              <h2>{poke.name}</h2>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
