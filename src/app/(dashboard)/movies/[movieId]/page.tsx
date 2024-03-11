import { getMovieData } from "@/service";
import Image from "next/image";

type Props = {
  params: { movieId: string };
};

const MoviePage: React.FC<Props> = async ({ params }) => {
  const movieData = await getMovieData({ id: params.movieId });

  return (
    <div>
      <div className="relative flex h-[40rem]">
        <Image
          fill
          sizes="100%"
          alt={movieData.title}
          quality={100}
          className="h-auto w-full rounded-medium object-cover object-center"
          src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
        />
      </div>
      <h1>{movieData.title}</h1>
    </div>
  );
};

export default MoviePage;
