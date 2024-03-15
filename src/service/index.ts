import type { MovieList, Genre, Movie } from "../Models";

type NowPlayingProps = {
  page: number;
};

type MovieDataProps = { id: string };

export async function getDiscoverData({
  page,
}: NowPlayingProps): Promise<MovieList> {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
      next: { tags: ["discover"] },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export async function getNowPlayingData({
  page,
}: NowPlayingProps): Promise<MovieList> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
      next: { tags: ["nowplaying"] },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export async function getTopratedData({
  page,
}: NowPlayingProps): Promise<MovieList> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
      next: { tags: ["toprated"] },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export async function getUpcomingData({
  page,
}: NowPlayingProps): Promise<MovieList> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
      next: { tags: ["upcoming"] },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export async function getPopularData({
  page,
}: NowPlayingProps): Promise<MovieList> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
      next: { tags: ["popular"] },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch data");

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

  if (!res.ok) throw new Error("Failed to fetch data");

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
