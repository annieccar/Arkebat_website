import Link from "next/link";
import React from "react";

const Button = ({ title, isLink }: { title: string; isLink: boolean }) => {
  return isLink ? (
    <Link href="/contact">
      <div className="flex justify-center items-center text-black/50 bg-light_green w-[200px] p-2.5 px-3 rounded-full shadow-md hover:bg-light_green/50 hover:text-white transition-all duration-300 ease-in-out">
        <p className="font-title font-semibold text-xl text-ellipsis translate-y-[5%]">
          {title}
        </p>
      </div>
    </Link>
  ) : (
    <div className="flex justify-center items-center text-black/50 bg-light_green w-[200px] p-2.5 rounded-lg shadow-md hover:bg-light_green/50 hover:text-white transition-all duration-300 ease-in-out">
      <p className="font-title font-semibold text-xl text-ellipsis translate-y-[5%]">
        {title}
      </p>
    </div>
  );
};

export default Button;
