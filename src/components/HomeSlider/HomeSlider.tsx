"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Chip, Input } from "@nextui-org/react";
import { FaCirclePlay, FaRegStar } from "react-icons/fa6";
import { BiLike } from "react-icons/bi";
import { MdOutlineHowToVote } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LiaGripLinesSolid } from "react-icons/lia";
import { formatLargeNumber } from "@/utils";
import type { Genre, MovieListItem } from "@/Models";

type Props = {
  genres: Genre[];
  slides: MovieListItem[];
};

const HomeSlider: React.FC<Props> = ({ slides, genres }) => {
  const router = useRouter();
  const [slideIdx, setSlideIdx] = useState(0);

  const slide = slides?.[slideIdx];

  const handleNextSlide = () => {
    setSlideIdx((prev) => {
      if (prev === slides.length - 1) return 0;
      return prev + 1;
    });
  };

  return (
    <div
      onLoad={() => console.log("loaded")}
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#000000",
        backgroundImage: `url(${`https://image.tmdb.org/t/p/original${slide?.backdrop_path}`})`,
      }}
      className="flex flex-1 flex-col">
      <div
        className="z-5 absolute left-0 top-0 h-[100dvh] w-full"
        style={{
          background: `radial-gradient(
        ellipse at center,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0.2) 40%,
        rgba(0, 0, 0, 0.3) 50%,
        rgba(0, 0, 0, 0.4) 60%,
        rgba(0, 0, 0, 0.5) 70%,
        rgba(0, 0, 0, 0.7) 80%,
        rgba(0, 0, 0, 0.9) 100%
    )`,
        }}></div>
      <div className="z-10 flex flex-1 flex-col">
        <header className="z-10 flex h-[4rem] justify-between gap-2 px-4 py-2">
          <div className="flex flex-1 items-center">
            <ul className="flex items-center gap-2">
              <li className="flex items-center">
                <Link href="/discover">
                  <h5 className="text-white">Discover</h5>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <Link href="/">
              <h2 className="font-semibold text-white">MaxMovie</h2>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end gap-2">
            <Input
              size="sm"
              label=""
              radius="lg"
              color="default"
              variant="flat"
              placeholder="Search..."
              labelPlacement="outside"
              className="max-w-xs"
              endContent={<IoSearch size={18} />}
            />
            <Button size="sm" radius="lg" color="secondary" variant="solid">
              Login
            </Button>
          </div>
        </header>
        <div className="flex flex-1 justify-between p-6">
          <section className="flex  flex-1 flex-col justify-between gap-4 p-4">
            <div className="flex flex-wrap gap-1">
              {genres
                ?.filter((genre) => slide.genre_ids.includes(genre.id))
                .slice(0, 2)
                .map((genre) => (
                  <Link key={genre.id} href={`/genres/${genre.id}`}>
                    <Chip
                      key={genre.id}
                      size="sm"
                      radius="lg"
                      variant="shadow"
                      color="secondary">
                      {genre.name}
                    </Chip>
                  </Link>
                ))}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="rounded-full border-[0.0625rem] border-solid border-white p-2">
                  <MdOutlineHowToVote size={20} className="text-white" />
                </div>
                <p className="text-medium font-medium text-white">
                  {formatLargeNumber(slide.vote_count)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full border-[0.0625rem] border-solid border-white p-2">
                  <FaRegStar size={20} className="text-white" />
                </div>
                <p className="text-medium font-medium text-white">
                  {slide.vote_average.toFixed(1)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full border-[0.0625rem] border-solid border-white p-2">
                  <BiLike size={20} className="text-white" />
                </div>
                <p className="text-medium font-medium text-white">
                  {formatLargeNumber(slide.popularity)}
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <h1 className="text-6xl font-semibold text-white">
                {slide.title}
              </h1>
              <div className="flex flex-col justify-end">
                <h5 className="font-normal text-white">Year</h5>
                <h3 className="text-white ">
                  {new Date(slide.release_date).getFullYear()}
                </h3>
              </div>
            </div>
          </section>
          <section className="flex flex-1 flex-col justify-between gap-4 p-4">
            <div></div>
            <div className="flex cursor-pointer justify-center">
              <FaCirclePlay size={60} className="text-white" />
            </div>
            <div className="flex justify-center">
              <div
                className="flex h-[2rem] w-[3rem] cursor-grab items-center justify-center rounded-medium bg-white"
                onClick={handleNextSlide}>
                <LiaGripLinesSolid size={30} />
              </div>
            </div>
          </section>
          <section className="flex flex-1 flex-col justify-between gap-4 p-4">
            <div className="flex justify-end">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <p className="text-medium text-white">Unlimited Movies,</p>
                  <p className="text-medium text-white">Endless Adventures</p>
                </div>
                <Button
                  size="md"
                  radius="md"
                  color="default"
                  variant="bordered"
                  className="text-white"
                  onClick={() => router.push("/nowplaying")}>
                  Now Playing
                </Button>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end">
              <h1 className="text-white">Slider</h1>
            </div>
            <div className="flex justify-end">
              <h1 className="text-white">Player</h1>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
