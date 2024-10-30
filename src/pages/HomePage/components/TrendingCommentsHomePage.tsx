import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  InformationCircleIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import userAvatar from "../../../assets/img/user-avatar.png";

export default function TrendingCommentsHomePage() {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="h-[1px] rounded border-[4px] border-[#F5C518]" />
          <h2 className="text-[28px] leading-[32.81px] text-[#C3C3C3]">
            Trending Comments
          </h2>
        </div>
        <div className="flex gap-[10px] px-[18px] items-center justify-center">
          <ArrowLeftCircleIcon className="w-8 h-8 text-[#797979] opacity-[50%]" />
          <ArrowRightCircleIcon className="w-8 h-8 text-[#797979]" />
        </div>
      </div>
      <div className="flex gap-6 overflow-x-scroll">
        {Array.from(Array(8)).map((e, index) => (
          <Commenttem key={index} />
        ))}
      </div>
    </div>
  );
}

function Commenttem() {
  return (
    <div
      className={clsx(
        "flex flex-col gap-[10px] p-[26px] bg-[#2C2737] rounded-[24px] w-[445px] min-w-[445px] h-[189px] min-h-[189px]"
      )}
    >
      <span className="text-[16px] leading-[20px] text-white">
        Funny episode, kinda makes you rethink a lot. Like what if we’re all
        connected to one super mega-conciousness?
      </span>
      <div className="flex gap-[10px]">
        <img
          src={userAvatar}
          className="w-[26px] min-w-[26px] h-[26px] min-h-[26px]"
        />
        <span className="text-[21px] leading-[27px] text-[#E4A5EE]">
          S15E10
        </span>
      </div>
      <span className="text-[14px] leading-6 text-[#F0F0F0] font-medium">
        It’s Always Sunny in Philadelphia
      </span>
    </div>
  );
}
