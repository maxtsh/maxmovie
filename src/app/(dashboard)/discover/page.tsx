import { getNowPlayingData, getMovieGenresData } from "@/service";
import MovieCard from "@/components/MovieCard";

export const revalidate = 10 * 60;

const initalPage = 1;

const DiscoverPage: React.FC = async () => {
  const [movieRes, genresRes] = await Promise.allSettled([
    getNowPlayingData({ page: initalPage }),
    getMovieGenresData(),
  ]);

  return (
    <div className="flex flex-col gap-1">
      <div className="p-2">
        <h2 className="font-extrabold">Now Playing</h2>
      </div>
      <div className="grid  grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:max-2xl:grid-cols-4 2xl:grid-cols-5">
        {movieRes.status === "fulfilled" &&
          movieRes.value.results.map((item) => (
            <MovieCard
              key={item.id}
              movie={item}
              genres={
                genresRes?.status === "fulfilled" ? genresRes.value.genres : []
              }
            />
          ))}
      </div>
    </div>
  );
};

export default DiscoverPage;
