import Link from "next/link";
import Image from "next/image";

export default async function MovieDatabase({
  id,
  title,
  poster_path,
  release_date,
  section
}) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div className="">
     
      <Link href={`/${section}/${id}`}>
        <div className="p-4 bg-indigo-900 rounded-t-lg h-20">
          <h1 className="font-bold">{title}</h1>
          <h2>{release_date} </h2>
        </div>
        <Image
          src={imagePath + poster_path}
          width={400}
          height={200}
          alt="Movie poster"
        />
      </Link>
    </div>
  );
}
