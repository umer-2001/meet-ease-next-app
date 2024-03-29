"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Link } from "next/link";
import { usePathname } from "next/navigation";
import { sidebarList } from "../contants";

const MobileNavigation = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px] border border-yellow-300">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src={"/assets/icons/hamburger.svg"}
            alt="humburger"
            width={36}
            height={36}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className=" bg-dark-1">
          <Link href={"/"} className="flex items-center gap-1">
            <Image
              src={"/assets/icons/logo.svg"}
              alt={"Meet Ease"}
              width={24}
              height={24}
              className="mx-sm:size-10"
            />
            <p className="text-[24px] font-extrabold text-white">Meet Ease</p>
          </Link>
          <div className="border border-yellow overflow-y-auto">
            <SheetClose asChild>
              <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
                <div className="flex flex-col gap-6">
                  {sidebarList?.map((i, index) => {
                    const isActive = pathname === i?.route;
                    return (
                      <Link
                        href={i?.route}
                        key={index}
                        className={cn(
                          "flex gap-4 items-center justify-start rounded-lg p-4",
                          { "bg-blue-1": isActive }
                        )}
                      >
                        <Image
                          src={i?.img}
                          alt={i?.label}
                          width={20}
                          height={20}
                        />

                        <p className="">{i?.label}</p>
                      </Link>
                    );
                  })}
                </div>
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavigation;
