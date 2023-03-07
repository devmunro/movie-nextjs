import Link from "next/link";

export default function Movie({key,id, title, poster_path, release_date }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>
        Release Date
        <Link href={``}>
          <img src="s" alt="Movie poster" />
        </Link>
      </h2>
    </div>
  );
}
