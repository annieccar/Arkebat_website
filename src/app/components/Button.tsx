import Link from "next/link";
import React from "react";

const Button = ({ title, isLink }: { title: string; isLink: boolean }) => {
  return isLink ? (
    <Link href="/contact">
      <div className="flex justify-center items-center text-black/50 bg-light_green w-[200px] p-2 px-3 rounded-full shadow-md hover:bg-light_green/80 hover:text-white transition-all duration-300 ease-in-out">
        <p className="font-title font-semibold text-white  text-xl text-ellipsis ">
          {title}
        </p>
      </div>
    </Link>
  ) : (
    <div className="flex justify-center items-center bg-light_green w-[160px] p-2 rounded-lg shadow-md hover:bg-light_green/80 hover:text-white transition-all duration-300 ease-in-out">
      <p className="font-title text-black font-semibold lg:text-lg text-ellipsis ">
        {title}
      </p>
    </div>
  );
};

export default Button;
