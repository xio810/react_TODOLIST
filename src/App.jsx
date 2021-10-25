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
  const [pokes, setPokes] = useState([]);
  const [offset, setOffset] = useState(0);
  const totalItems = 118;
  const maxItemsInAPage = 20;
  const limit =
    offset + maxItemsInAPage < totalItems
      ? maxItemsInAPage
      : totalItems - offset;

  const { isLoading, error, data } = useQuery(
    `pokemon?offset=${offset}&limit=${limit}`,
    () =>
      fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
      ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (offset + limit > pokes.length) {
    setPokes([...pokes, ...data.results]);
  }

  const getNoFromUrl = (url) => {
    const urlBits = url.split("/");
    return parseInt(urlBits[urlBits.length - 2]);
  };

  const showMore = () => {
    setOffset(offset + limit);
  };

  const btnShowMoreVisible = offset + limit < totalItems;

  return (
    <>
      <h1 className="py-2 text-center font-bold bg-gray-500 text-white sticky top-0">
        포켓몬 리스트
      </h1>
      <ul>
        {pokes.map((poke) => {
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

      <div className="px-2 mt-2">
        {btnShowMoreVisible ? (
          <button onClick={showMore} className="btn btn-block btn-secondary">
            More
          </button>
        ) : (
          <button className="btn btn-block btn-disabled">
            마지막 페이지 입니다.
          </button>
        )}
      </div>
    </>
  );
};

export default App;
