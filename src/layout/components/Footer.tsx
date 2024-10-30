import React from "react";
import logo from "../../assets/img/logo.png";

const textFooterClass = "text-[14px] text-white";
export default function Footer() {
  return (
    <div className="flex flex-col px-[60px] py-[60px] border-t-[2px] border-[#FFFFFF26]">
      <div className="flex justify-end gap-2">
        <input
          className="w-[288px] h-[48px] py-[12px] px-[14px] rounded-[8px] bg-[#21222466] border border-[#D0D5DD4F] placeholder:text-white placeholder:text-[16px] placeholder:leading-6"
          placeholder="Enter your email"
        />
        <button className="w-[175px] h-[48px] flex items-center justify-center rounded-[10px] register-button-home">
          Join our newsletter
        </button>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-10">
          <img src={logo} className="w-[80px] h-[64px]" />
          <span className={textFooterClass}>
            Copyrights © 2024. All rights reserved by SyncHomie.com
          </span>
          <span className={textFooterClass}>Privacy</span>
          <span className={textFooterClass}>Terms</span>
        </div>
        <div className="flex items-center gap-4">
          <span className={textFooterClass}>Contact Us</span>
          <div className="flex gap-6">
            <img src="https://placehold.co/24x24" />
            <img src="https://placehold.co/24x24" />
            <img src="https://placehold.co/24x24" />
            <img src="https://placehold.co/24x24" />
          </div>
        </div>
      </div>
    </div>
  );
}
