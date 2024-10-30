import CategoryBox from "./components/CategoryBox";
import FeatureHomePage from "./components/FeatureHomePage";
import TrendingCommentsHomePage from "./components/TrendingCommentsHomePage";
import TrendingReviewsHomePage from "./components/TrendingReviewsHomePage";

function HomePage() {
  return (
    <div className="flex flex-1 flex-col px-[90px] pt-[172px] pb-[42px]">
      <h1 className="text-[74px] leading-[103.6px] font-extrabold text-[#AAD0FF] text-center">
        SyncHomie
      </h1>
      <span className="max-w-[560px] self-center text-[33px] leading-[46.2px] font-bold text-white text-center my-[45px]">
        Keep track of all your media, and make friends while doing it
      </span>
      <div className="flex w-full justify-center">
        <button className="w-[280px] h-[68px] flex items-center justify-center rounded-[10px] register-button-home">
          Register Now
        </button>
      </div>
      <span className="max-w-[437px] self-center text-[24px] leading-[24px] font-medium text-white text-center mt-[64px] mb-[148px]">
        Track “TV Shows, Animes, K-Dramas, & Movies”
      </span>
      <FeatureHomePage />
      <div className="flex flex-col gap-[60px]">
        <TrendingReviewsHomePage />
        <TrendingCommentsHomePage />
      </div>
      <div className="flex justify-center items-center gap-2">
        <span className="text-[32px] leading-10 text-white font-bold my-10">
          Register to select your Streaming Services{" "}
        </span>
        <div className="flex gap-[10px]">
          <img src="https://placehold.co/45x45" />
          <img src="https://placehold.co/45x45" />
          <img src="https://placehold.co/45x45" />
          <img src="https://placehold.co/45x45" />
        </div>
      </div>
      <div className="flex w-full justify-center mb-7">
        <button className="w-[280px] h-[68px] flex items-center justify-center rounded-[10px] register-button-home">
          Register Now
        </button>
      </div>
      <div className="ml-[-30px] mb-10">
        <span className="text-[32px] leading-10 text-white">
          Explore the largest media database on the internet{" "}
        </span>
      </div>
      <div className="flex flex-col gap-[100px] mb-[230px]">
        <CategoryBox num={123456} cate="Movies" />
        <CategoryBox num={123123} cate="TV Shows" />
        <CategoryBox num={334123} cate="Anime" />
        <CategoryBox num={654321} cate="Drama" />
      </div>
      <div className="flex w-full justify-center mb-[44px]">
        <span id="track-what-you-watch" className="text-[48px] leading-[64px]">
          Start Tracking What You Watch
        </span>
      </div>
      <div className="flex w-full justify-center mb-7">
        <button className="w-[280px] h-[68px] flex items-center justify-center rounded-[10px] register-button-home">
          Register Now
        </button>
      </div>
    </div>
  );
}

export default HomePage;
