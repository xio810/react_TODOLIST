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
      <ul>
        {data.results.map((poke) => (
          <li key={poke}>{poke.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
