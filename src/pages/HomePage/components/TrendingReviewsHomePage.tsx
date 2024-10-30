import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  InformationCircleIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import userAvatar from "../../../assets/img/user-avatar.png";

export default function TrendingReviewsHomePage() {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="h-[1px] rounded border-[4px] border-[#F5C518]" />
          <h2 className="text-[28px] leading-[32.81px] text-[#C3C3C3]">
            Trending Reviews
          </h2>
        </div>
        <div className="flex gap-[10px] px-[18px] items-center justify-center">
          <ArrowLeftCircleIcon className="w-8 h-8 text-[#797979] opacity-[50%]" />
          <ArrowRightCircleIcon className="w-8 h-8 text-[#797979]" />
        </div>
      </div>
      <div className="flex gap-6 overflow-x-scroll">
        {Array.from(Array(8)).map((e, index) => (
          <ReviewItem key={index} />
        ))}
      </div>
    </div>
  );
}

function ReviewItem() {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4 px-4 py-6 bg-[#141421] rounded-[12px] border w-[265px] min-w-[265px] h-[237px] min-h-[237px]"
      )}
      style={{
        borderImageSource:
          "linear-gradient(90deg, rgba(227, 24, 245, 0.33) 0%, rgba(117, 94, 255, 0.33) 100%)",
      }}
    >
      <div className="flex flex-1 gap-[10px]">
        <img src={userAvatar} className="w-10 min-w-10 h-10 min-h-10" />
        <div className="flex flex-col gap-1">
          <span className="text-[18px] leading-6 font-medium text-[#F0F0F0] tracking-[-0.24px]">
            Reviewer Name
          </span>
          <span className="text-[16px] leading-6 text-[#737373] tracing-[-0.176px]">
            Lorem Ipsum Lorem Ipsum
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[5px]">
        <div className="flex gap-[10px]">
          <InformationCircleIcon className="w-[18px] min-w-[18px] h-[18px] text-[#BCBCBC]" />
          <HandThumbUpIcon className="w-[18px] min-w-[18px] h-[18px] text-[#50DB2D]" />
          <HandThumbDownIcon className="w-[18px] min-w-[18px] h-[18px] text-[#DB2D53]" />
        </div>
        <span className="text-[14px] leading-6 font-medium text-[#F0F0F0] tracking-[-0.24px]">
          It’s Always Sunny in Philadelphia
        </span>
      </div>
    </div>
  );
}
