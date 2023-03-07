import Link from "next/link";
import Image from "next/image";

export default async function MovieDatabase({
  id,
  title,
  poster_path,
  release_date,
}) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h1>{title}</h1>
      <h2>
        {release_date}
        <Link href={`/${id}`}>
          <Image
            src={imagePath + poster_path}
            width={200}
            height={200}
            alt="Movie poster"
          />
        </Link>
      </h2>
    </div>
  );
}
