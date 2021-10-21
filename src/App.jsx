import { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PokeListPage />
    </QueryClientProvider>
  );
};

const PokeListPage = () => {
  const { isLoading, error, data } = useQuery("pokeList", () =>
    fetch("https://pokeapi.co/api/v2/pokemon").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const getNoFromUrl = (url) => {
    const urlBits = url.split("/");
    return parseInt(urlBits[urlBits.length - 2]);
  };

  return (
    <>
      <h1 className="py-2 text-center font-bold bg-gray-500 text-white sticky top-0">
        포켓몬 리스트
      </h1>
      <ul>
        {data.results.map((poke) => {
          const no = getNoFromUrl(poke.url);

          return (
            <li key={poke} className="flex items-center">
              <img
                src={`https://cdn.jsdelivr.net/gh/PokeAPI/sprites/sprites/pokemon/${no}.png`}
              />
              <div className="ml-2">
                <h2 className="w-20">
                  <span className="badge badge-outline badge-primary">
                    {no}
                  </span>
                </h2>
                <h2>{poke.name}</h2>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
