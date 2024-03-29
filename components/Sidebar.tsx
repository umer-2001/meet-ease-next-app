"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { sidebarList } from "@/contants";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="border border-blue-500 sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-col gap-6">
        {sidebarList?.map((i, index) => {
          const isActive =
            pathname === i?.route || pathname.startsWith(`${i?.route}/`);
          return (
            <Link
              href={i?.route}
              key={index}
              className={cn(
                "flex gap-4 items-center justify-start rounded-lg p-4",
                { "bg-blue-1": isActive }
              )}
            >
              <Image src={i?.img} alt={i?.label} width={24} height={24} />

              <p className="">{i?.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
