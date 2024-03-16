import { getDiscoverData, getMovieGenresData } from "@/service";
import HomeSlider from "@/components/HomeSlider";

const HomePage: React.FC = async () => {
  const data = await getDiscoverData({ page: 1 });
  const genres = await getMovieGenresData();

  return (
    <main className="flex h-[100dvh] flex-col">
      <HomeSlider slides={data.results} genres={genres.genres} />
    </main>
  );
};

export default HomePage;

