import Movie from "./movie";

export default async function Home() {
  const api = "https://api.themoviedb.org/3/movie/popular";
  const data = await fetch(`${api}?api_key=${process.env.API_KEY}`);
  const response = await data.json();
  console.log(response);
  return (
    <main>
      <h1 className="">Hello Nextjs</h1>
      {response.results.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
      ))}
    </main>
  );
}
