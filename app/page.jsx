import MovieDatabase from "./MovieDatabase";

export default async function Home() {
  const api = "https://api.themoviedb.org/3/movie/popular";
  const data = await fetch(`${api}?api_key=${process.env.API_KEY}`);
  const response = await data.json();
  return (
    <main>
      <h2 className="font-bold py-4 text-xl">Popular Movies:</h2>
     
      <div className="grid lg:gap-16 lg:grid-cols-fluid grid-cols-2 gap-4 ">
        {response.results.map((movie) => (
          <MovieDatabase
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            section= "moviedetails"
          />
        ))}
      </div>
    </main>
  );
}
