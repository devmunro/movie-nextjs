import Link from "next/link";
import Image from "next/image";

export default function Movie({key,id, title, poster_path, release_date }) {
 const imagePath = "https://image.tmdb.org/t/p/original"
 
    return (
    <div>
      <h1>{title}</h1>
      <h2>
        {release_date}
        <Link href={``}>
          <Image src={imagePath+poster_path} width={100} height={100} alt="Movie poster" />
        </Link>
      </h2>
    </div>
  );
}
