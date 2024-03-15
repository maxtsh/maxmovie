import Link from "next/link";
import { FaStar } from "react-icons/fa";
import MovieImage from "./MovieImage";
import type { MovieListItem, Genre } from "@/Models";

type Props = {
  movie: MovieListItem;
  genres: Genre[];
};

const MovieCard: React.FC<Props> = ({ movie, genres }) => {
  return (
    <div className="flex flex-col">
      <Link
        href={`/discover/${movie.id}`}
        className="flex flex-1 flex-col gap-1 p-2">
        <MovieImage title={movie.title} source={movie.poster_path} />
      </Link>
      <h6 className="ellipsis font-bold">{movie.title}</h6>
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1">
          <FaStar size={18} className="text-yellow-400" />
          <h5 className="text-small">{movie.vote_average.toFixed(1)}</h5>
        </div>
        <span>|</span>
        <p>
          {genres
            ?.filter((genre) => movie.genre_ids.includes(genre.id))
            .map((genre) => genre.name)
            .slice(0, 2)
            .join(".")}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
