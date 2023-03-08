import Image from "next/image";


export default async function movie({ params }) {
   const {movie} = params
   const api = `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
console.log(params)
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(api)
  console.log(api)
  const response = await data.json();

  return (
    <div>
    <div className="">
      <h2 className="text-4xl">{response.title}</h2>
      <h1 className="text-lg ">{response.release_date}</h1>
      <h2>Runtime: {response.runtime} minutes</h2>
      <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-lg text-sm">
        {response.status}
      </h2>
      <div className="flex flex-wrap">
      <Image
        className="my-12 w-full"
        src={imagePath + response.backdrop_path}
        alt={response.title}
        width={1000}
        height={1000}
        priority
      />
    </div>
    <div className="my-4 w-full">
      <p className="text-md">{response.overview}</p>
    </div>
    </div>
  </div>
  );
}
