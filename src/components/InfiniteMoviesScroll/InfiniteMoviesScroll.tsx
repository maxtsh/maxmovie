"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Skeleton } from "@nextui-org/react";
import { useIntersectionObserver } from "@/hooks";
import MovieCard from "@/components/MovieCard";
import type { MovieListItem, MovieList, Genre } from "@/Models";

type Props = {
  initialPage: 1;
  genres: Genre[];
  fetchMore: (page: number) => Promise<MovieList>;
};

type InfiniteScrollData = {
  loading: boolean;
  error: null | string;
  data: MovieListItem[];
};

const InfiniteMoviesScroll: React.FC<Props> = ({
  initialPage,
  genres,
  fetchMore,
}) => {
  const page = useRef<number>(initialPage);
  const { ref, observerStatus } = useIntersectionObserver<HTMLDivElement>({
    threshold: 1,
  });
  const [state, setState] = useState<InfiniteScrollData>({
    data: [],
    error: null,
    loading: false,
  });

  const handleFetch = useCallback(async () => {
    setState((prevData) => ({ ...prevData, loading: true }));
    try {
      const newPage = page.current + 1;

      const list = await fetchMore(newPage);

      setState((prevData) => ({
        loading: false,
        error: null,
        data: prevData.data.concat(list.results),
      }));

      page.current = newPage;
    } catch (err) {
      setState((prevData) => ({
        ...prevData,
        loading: false,
        error: err instanceof Error ? err.message : "Something went wrong",
      }));
    }
  }, [fetchMore]);

  useEffect(() => {
    if (observerStatus?.isIntersecting && !state.loading) handleFetch();
  }, [observerStatus, state.loading, handleFetch]);

  return (
    <>
      {state?.data.map((item) => (
        <MovieCard key={item.id} movie={item} genres={genres} />
      ))}
      {state.loading &&
        Array(5)
          .fill(1)
          .map((_, idx) => (
            <div key={idx} className="mb-5 mt-5 flex flex-col gap-2">
              <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-secondary"></div>
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-full rounded-lg bg-secondary"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
                </Skeleton>
              </div>
            </div>
          ))}
      {state.error && (
        <div className="flex flex-col gap-2 rounded-medium border p-2">
          <h5 className="text-danger-500">{state.error}</h5>
          <Button
            size="sm"
            radius="md"
            color="default"
            variant="flat"
            onClick={handleFetch}>
            Try again
          </Button>
        </div>
      )}
      <div ref={ref} className="opacity-0"></div>
    </>
  );
};

export default InfiniteMoviesScroll;
