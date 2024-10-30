import clsx from "clsx";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import feature1 from "../../../assets/img/feature-1.png";
import feature2 from "../../../assets/img/feature-2.png";
import feature3 from "../../../assets/img/feature-3.png";
import feature4 from "../../../assets/img/feature-4.png";
import feature5 from "../../../assets/img/feature-5.png";
import feature6 from "../../../assets/img/feature-6.png";
import {
  PlusCircleSVG,
  StarSVG,
  BoltSVG,
  DotCircleSVG,
  MapSVG,
} from "../../../assets/icon";

const featureCardClassName =
  "flex flex-col flex-1 bg-[#141421] px-6 pb-[32px] rounded-[12px]";
const featureTextClassName =
  "text-[16px] leading-[25.6px] font-semibold text-[#F7F8F8]";

export default function FeatureHomePage() {
  return (
    <div className="flex flex-col gap-[30px] px-[78px] mb-[200px]">
      <div className="flex gap-10">
        <div className={clsx(featureCardClassName)}>
          <div className="min-h-[145px]">
            <img src={feature1} />
          </div>
          <div className="flex gap-[12px]">
            <PlusCircleSVG />
            <span className={clsx(featureTextClassName)}>
              Discover new media and find out which platforms are streaming it
              now.
            </span>
          </div>
        </div>
        <div className={clsx(featureCardClassName)}>
          <div className="min-h-[145px]">
            <img src={feature2} />
          </div>
          <div className="flex gap-[12px]">
            <StarSVG />
            <span className={clsx(featureTextClassName)}>
              Discover new media and find out which platforms are streaming it
              now.
            </span>
          </div>
        </div>
        <div className={clsx(featureCardClassName)}>
          <div className="min-h-[145px]">
            <img src={feature3} />
          </div>
          <div className="flex gap-[12px]">
            <BoltSVG />
            <span className={clsx(featureTextClassName)}>
              Track media easily with automated bookmarks using our Chrome
              extension
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-10">
        <div className={clsx(featureCardClassName)}>
          <div className="min-h-[145px]">
            <img src={feature4} />
          </div>
          <div className="flex gap-[12px]">
            <DotCircleSVG />
            <span className={clsx(featureTextClassName)}>
              Social network system to keep track of what you think and share
              with your friends
            </span>
          </div>
        </div>
        <div className={clsx(featureCardClassName)}>
          <div className="min-h-[145px]">
            <img src={feature5} />
          </div>
          <div className="flex gap-[12px]">
            <MapSVG />
            <span className={clsx(featureTextClassName)}>
              Calendar System to allow you to say on top of new releases, and be
              notified upon their release
            </span>
          </div>
        </div>
        <div className={clsx(featureCardClassName)}>
          <div className="min-h-[145px]">
            <img src={feature6} />
          </div>
          <div className="flex gap-[12px]">
            <PlusCircleSVG />
            <span className={clsx(featureTextClassName)}>
              Easily import bookmarks from any platform for a consolidated list.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
