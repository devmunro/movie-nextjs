import Image from "next/image";
import MovieDatabase from "../MovieDatabase";

export default async function ComingSoon() {
  const api = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`;

  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(api);
  const response = await data.json();

  return (
    <div>
      <h2 className="font-bold py-4 text-xl">Popular TV Shows</h2>

      <div className="grid lg:gap-16 lg:grid-cols-fluid grid-cols-2 gap-4 ">
        {response.results.map((tv) => (
          <MovieDatabase
            key={tv.id}
            id={tv.id}
            title={tv.name}
            poster_path={tv.poster_path}
            release_date={tv.first_air_date}
            section= "tvdetails"
          />
        ))}
      </div>
    </div>
  );
}
