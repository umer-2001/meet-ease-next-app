import Image from "next/image";
import React from "react";
import { cn } from "./../lib/utils";

interface IHomeCards {
  className: string;
  icon: string;
  title: string;
  desc: string;
  handleClick?: () => void;
}
const HomeCards = ({
  className,
  icon,
  title,
  desc,
  handleClick,
}: IHomeCards) => {
  return (
    <div
      className={
        (cn(
          "px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer"
        ),
        className)
      }
      onClick={() => {}}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={icon} alt="icon" height={28} width={28} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-base font-medium">{desc}</p>
      </div>
    </div>
  );
};

export default HomeCards;
