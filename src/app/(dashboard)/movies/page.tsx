import { getNowPlayingData, getMovieGenresData } from "@/service";
import MovieCard from "@/components/MovieCard";

export const revalidate = 10 * 60;

const MoviesPage: React.FC = async () => {
  const nowPlaying = await getNowPlayingData({ page: 1 });
  const genres = await getMovieGenresData();

  return (
    <div className="flex flex-col gap-1">
      <div className="p-2">
        <h2 className="font-extrabold">Now Playing</h2>
      </div>
      <div className="grid  grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:max-2xl:grid-cols-4 2xl:grid-cols-5">
        {nowPlaying.results.map((item) => (
          <MovieCard key={item.id} movie={item} genres={genres.genres} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
