import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <main className="flex h-[100dvh] flex-col">
      <div className="flex flex-1 flex-col items-center justify-center gap-2">
        <h1>Welcome to Max Movies</h1>
        <p>This project is under construction...</p>
        <Link href="/movies">
          <h5>Go to Movies</h5>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;

