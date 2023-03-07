import MovieDatabase from "./MovieDatabase";

export default async function Home() {
  const api = "https://api.themoviedb.org/3/movie/popular";
  const data = await fetch(`${api}?api_key=${process.env.API_KEY}`);
  const response = await data.json();
  return (
    <main>
      <h1 className="">Hello Nextjs</h1>
      <div className="grid gap-16 grid-cols-fluid">
        
        {response.results.map((movie) => (
          <MovieDatabase
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
