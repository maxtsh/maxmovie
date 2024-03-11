"use client";
import { cn } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

type Props = {
  title: string;
  source: string;
};

const MovieImage: React.FC<Props> = ({ title, source }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => setIsLoaded(true);

  return (
    <div className="relative h-[25rem] sm:h-[14rem]">
      {!isLoaded && (
        <div className="h-full w-full animate-pulse rounded-large bg-slate-300"></div>
      )}
      <Image
        fill
        alt={title}
        sizes="100%"
        loading="lazy"
        src={`https://image.tmdb.org/t/p/w500${source}`}
        className={cn(
          "h-auto max-w-full cursor-pointer rounded-large object-cover object-top transition-[transform,opacity] duration-200 ease-in-out hover:scale-105",
          !isLoaded ? "opacity-0" : "opacity-100",
        )}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default MovieImage;
