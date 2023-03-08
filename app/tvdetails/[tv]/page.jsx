import Image from "next/image";

export default async function movie({ params }) {
  const { tv } = params;
  const api = `https://api.themoviedb.org/3/tv/${tv}?api_key=${process.env.API_KEY}`;
  console.log(params);
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(api);
  console.log(api);
  const response = await data.json();

    // define an array of colors
  
  return (
    <div>
      <div className="">
        <h1 className="text-4xl">{response.name}</h1>
        <h2 className="text-lg">{response.first_air_date}</h2>
        <h3>Runtime: {response.runtime} minutes</h3>
        <div className="md:flex gap-8 my-4">
          <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-lg md:text-sm">
            {response.status}
          </h2>{" "}
          <div className="w-full">
            <ul className="flex gap-2 [&>*]:bg-blue-600 [&>*]:my-2 [&>*]:py-2 [&>*]:px-4 [&>*]:rounded-lg md:text-sm">
              {response.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:flex w-full my-12 lg:gap-4">
          <Image
            className=" w-full lg:w-1/2"
            src={imagePath + response.backdrop_path}
            alt={response.title}
            width={1000}
            height={1000}
            priority
          />

          <div className="my-4 w-full lg:w-1/4 lg:text-lg">
            <p className="text-md">{response.overview}</p>
          </div>
        </div>

        <div className="my-4 w-full">
          <h3>Production Companies:</h3>
          <ul>
            {response.production_companies.map((company) => (
              <li key={company.id}>{company.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
