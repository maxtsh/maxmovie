import { getMovieGenresData, getTopratedData } from "@/service";
import MovieCard from "@/components/MovieCard";
import InfiniteMoviesScroll from "@/components/InfiniteMoviesScroll";

export const revalidate = 10 * 60;

const initalPage = 1;

const TopRatedPage: React.FC = async () => {
  const [movieRes, genresRes] = await Promise.allSettled([
    getTopratedData({ page: initalPage }),
    getMovieGenresData(),
  ]);

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
        <InfiniteMoviesScroll
          initialPage={initalPage}
          genres={
            genresRes?.status === "fulfilled" ? genresRes.value.genres : []
          }
          fetchMore={fetchMore}
        />
      </div>
    </section>
  );
};

export default TopRatedPage;
