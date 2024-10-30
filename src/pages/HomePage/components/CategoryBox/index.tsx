import React from "react";
import { InformationCircleIcon, PlayIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import movie1 from "../../../../assets/img/movie-1.jpeg";
import movie2 from "../../../../assets/img/movie-2.jpeg";
import movie3 from "../../../../assets/img/movie-3.jpeg";
import movie4 from "../../../../assets/img/movie-4.jpeg";
import movie5 from "../../../../assets/img/movie-5.jpeg";
import movie6 from "../../../../assets/img/movie-6.jpeg";

const data = [
  {
    poster: movie1,
    title: "The Wolf of Wall Street",
    genre: "Crime / Comedy",
    rating: 8.2,
    isBookmarked: false,
  },
  {
    poster: movie2,
    title: "Interstella",
    genre: "Sci-fi / Adventure",
    rating: 8.7,
    isBookmarked: true,
  },
  {
    poster: movie3,
    title: "Anyone But You",
    genre: "Romance / Comedy",
    rating: 6.2,
    isBookmarked: false,
  },
  {
    poster: movie4,
    title: "Inception",
    genre: "Sci-fi / Adventure",
    rating: 8.8,
    isBookmarked: false,
  },
  {
    poster: movie5,
    title: "Poor Things",
    genre: "Sci-fi / Comedy",
    rating: 7.9,
    isBookmarked: false,
  },
  {
    poster: movie6,
    title: "10 Things I Hate About You",
    genre: "Romance / Comedy",
    rating: 7.3,
    isBookmarked: false,
  },
];
export default function CategoryBox(props: any) {
  const { num, cate, description } = props;
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 mb-[12px] items-baseline">
        <span
          className="text-[48px] leading-[48px] text-[#6C204D4D]"
          style={{ fontFamily: "Lilita One" }}
        >
          {num}
        </span>
        <span
          className="text-[40px] leading-[40px] text-[#176BCE]"
          style={{ fontFamily: "Lilita One" }}
        >
          {cate}
        </span>
      </div>
      <div className="flex flex-col gap-[76px]">
        <span className="text-[20px] leading-6 font-semibold text-white">
          {description}
        </span>
        <div className="flex gap-12 overflow-x-scroll pb-4">
          {data.map((_data, index) => (
            <MovieCard key={index} {..._data} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MovieCard(props: any) {
  const { poster, title, genre, isBookmarked, rating } = props;
  return (
    <div className="flex flex-col w-[193px] min-w-[193px] h-[515px] pb-2 rounded-[10px] gap-4 bg-[#1B1B1B]">
      <div className="flex flex-1 w-full rounded-t-[10px] overflow-hidden">
        <img src={poster} className="w-full h-full object-fit" />
      </div>
      <div className="flex flex-col gap-[8px]">
        <div className="flex gap-1 min-h-[48px] h-[48px]">
          <span className="flex flex-1 text-[18px] leading-6 text-white italic">
            {title}
          </span>
          <InformationCircleIcon className="min-w-[24px] w-6 h-6 text-white" />
        </div>
        <span className="text-[14px] leading-[20px] italic text-[#BCBCBC]">
          {genre}
        </span>
        <div className="flex gap-1 items-center">
          <StarIcon className="min-w-[18px] w-[18px] h-[18px] text-[#E318F5]" />
          <span className="text-[14px] leading-[20px] italic text-[#BCBCBC]">
            {rating}
          </span>
        </div>
      </div>
      <div className="px-7">
        <button className="flex w-full h-[36px] gap-1 items-center justify-center rounded-[10px] bg-[#282828]">
          <PlayIcon className="min-w-[14px] w-[14px] h-[14px] text-[#1C97FF]" />
          <span className="text-[14px] leading-[20px] italic text-[#1C97FF]">
            Watch trailer
          </span>
        </button>
      </div>
    </div>
  );
}

CategoryBox.defaultProps = {
  num: 0,
  cate: "Movies",
  description: "",
};
