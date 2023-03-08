import Image from "next/image";
import MovieDatabase from "../MovieDatabase";

export default async function ComingSoon() {
  const api = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`;

  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(api);
  const response = await data.json();

  return (
    <div>
      <h2 className="font-bold py-4 text-xl">Coming Soon:</h2>

      <div className="grid lg:gap-16 lg:grid-cols-fluid grid-cols-2 gap-4 ">
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
    </div>
  );
}
