export default async function Home() {
  const api = "https://api.themoviedb.org/3/movie/popular";
  const data = await fetch(`${api}?api_key=${process.env.API_KEY}`);
  const response = await data.json();
  console.log(response);
  return (
    <main>
      <h1 className="">Hello Nextjs</h1>
    </main>
  );
}
