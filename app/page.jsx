import MovieDatabase from "./MovieDatabase";

export default async function Home() {
  const api = "https://api.themoviedb.org/3/movie/popular";
  const data = await fetch(`${api}?api_key=${process.env.API_KEY}`);
  const response = await data.json();
  return (
    <main>
    
      <div className="grid md:gap-16 md:grid-cols-fluid grid-cols-2 gap-4 ">
        
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
