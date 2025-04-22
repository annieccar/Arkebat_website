import Link from "next/link";
import React from "react";

const Button = ({ title, isLink }: { title: string; isLink: boolean }) => {
  return (
    <div className="h-[58px] flex flex-col justify-center mt-5 md:mt-0 hover:scale-105 transition-transform ease-in-out duration-300">
      {isLink ? (
        <Link href="/contact">
          <div className="flex justify-center items-center border-[1px] border-icon w-[200px] h-[40px]  relative">
            <p className="font-title font-semibold text-white text-xl">
              {title}
            </p>
            <div className="absolute border-[1px] border-white  w-[180px] h-[58px] left-[9px]"></div>
          </div>
        </Link>
      ) : (
        <div className="flex justify-center items-center border-[1px] border-icon w-[200px] h-[40px]  relative">
          <p className="font-title font-semibold text-white text-xl">{title}</p>
          <div className="absolute border-[1px] border-white  w-[180px] h-[58px] left-[9px]"></div>
        </div>
      )}
    </div>
  );
};

export default Button;
