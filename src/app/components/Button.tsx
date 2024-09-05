import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <Link href="/contact">
      <div className="flex justify-center items-center border-[1px] border-icon w-[200px] h-[40px]  relative">
        <p className="font-title text-white text-xl">Nous contacter</p>
        <div className="absolute border-[1px] border-white  w-[180px] h-[58px] left-[9px]"></div>
      </div>
    </Link>
  );
};

export default Button;
