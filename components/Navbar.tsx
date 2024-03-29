import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10  border border-purple-400">
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          src={"/assets/icons/logo.svg"}
          alt={"Meet Ease"}
          width={32}
          height={32}
          className="mx-sm:size-10"
        />
        <p className="text-[24px] font-extrabold text-white mx-sm:hidden">
          Meet Ease
        </p>
      </Link>
      <div className="flex-between gap-5">
        {/* user-management */}
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
