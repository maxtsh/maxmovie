import type { NowPlayingData, Genre, Movie } from "../Models";

type NowPlayingProps = {
  page: number;
};

type MovieDataProps = { id: string };

export async function getNowPlayingData({
  page,
}: NowPlayingProps): Promise<NowPlayingData> {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
      next: { tags: ["nowplaying"] },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getMovieData({ id }: MovieDataProps): Promise<Movie> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
      next: { tags: ["movie", id] },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getMovieGenresData(): Promise<{ genres: Genre[] }> {
  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
      next: { tags: ["genres"] },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
