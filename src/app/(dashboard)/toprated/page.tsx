import { getMovieGenresData, getTopratedData } from "@/service";
import MovieCard from "@/components/MovieCard";
import InfiniteMoviesScroll from "@/components/InfiniteMoviesScroll";

export const revalidate = 10 * 60;

const initalPage = 1;

const TopRatedPage: React.FC = async () => {
  const movies = await getTopratedData({ page: initalPage });
  const genres = await getMovieGenresData();

  // We can not pass functions directly to client components,
  // we need to pass server actions to client components
  const fetchMore = async (page: number) => {
    "use server";
    return getTopratedData({ page });
  };

  return (
    <section className="flex flex-1 flex-col gap-2 ">
      <div className="p-2">
        <h2 className="font-extrabold">Top Rated</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 overflow-y-auto md:grid-cols-2 lg:grid-cols-3 xl:max-2xl:grid-cols-4 2xl:grid-cols-5">
        {movies.results.map((item) => (
          <MovieCard key={item.id} movie={item} genres={genres.genres} />
        ))}
        <InfiniteMoviesScroll
          initialPage={initalPage}
          genres={genres.genres}
          fetchMore={fetchMore}
        />
      </div>
    </section>
  );
};

export default TopRatedPage;