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
      <div className="p-4 bg-slate-600">
        <h1 className="font-bold">{title}</h1>
        <h2>{release_date} </h2>
      </div>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width= {400}
          height={200}
          alt="Movie poster"
        />
      </Link>
    </div>
  );
}
