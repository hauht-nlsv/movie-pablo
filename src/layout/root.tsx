import { Link, Outlet } from "react-router-dom";
import logo from "../assets/img/logo.png";
import {
  ChevronDownIcon,
  BookmarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Footer from "./components/Footer";

const navbarTextClassName = "text-base text-white";
const ChevronDown = () => (
  <ChevronDownIcon className="w-[20px] h-[14px] text-white" />
);

export default function Root() {
  return (
    <div className="flex flex-col flex-1 w-full h-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex justify-between px-10 h-[105px]">
      <div className="flex gap-6 items-center">
        <img src={logo} className="w-[90px] h-[73px]" />
        <div className="flex gap-4 items-center">
          <Link to="/">
            <span className={clsx(navbarTextClassName)}>Home</span>
          </Link>
          <div className={clsx(navbarTextClassName, "flex gap-1 items-center")}>
            <span>Discover</span>
            <ChevronDown />
          </div>
          <div className={clsx(navbarTextClassName, "flex gap-1 items-center")}>
            <span>Calendar</span>
            <ChevronDown />
          </div>
          <div className={clsx(navbarTextClassName, "flex gap-1 items-center")}>
            <span>People</span>
            <ChevronDown />
          </div>
          <div className={clsx(navbarTextClassName, "flex gap-1 items-center")}>
            <BookmarkIcon className="w-[20px] h-[20px] text-white" />
            <span>Bookmarks</span>
          </div>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <MagnifyingGlassIcon className="w-[28px] h-[28px] text-white" />
        <span className={clsx(navbarTextClassName)}>Sign Up</span>
      </div>
    </div>
  );
}
