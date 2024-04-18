import { getDiscoverData, getMovieGenresData } from "@/service";
import HomeSlider from "@/components/HomeSlider";

const initalPage = 1;

export const revalidate = 24 * 60 * 60;

const HomePage: React.FC = async () => {
  const [movieRes, genresRes] = await Promise.allSettled([
    getDiscoverData({ page: initalPage }),
    getMovieGenresData(),
  ]);

  return (
    <main className="flex h-[100dvh] flex-col">
      <HomeSlider
        slides={movieRes.status === "fulfilled" ? movieRes.value.results : []}
        genres={genresRes.status === "fulfilled" ? genresRes.value.genres : []}
      />
    </main>
  );
};

export default HomePage;

