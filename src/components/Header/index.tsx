import React from "react";
import Image from "next/image";
import SpotifyLogo from "@/public/assets/spotify-icon.svg";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="r-width flex h-14 items-center justify-between lg:h-20">
      <span className="display-font font-display text-3xl">Sazaana</span>
      <div className="flex cursor-pointer items-center rounded-lg bg-base-300 p-2 shadow-md transition-shadow duration-200 ease-in-out md:hover:shadow-lg">
        <span className="text-sm font-bold">Connect</span>
        <span className="relative ml-2 h-5 w-5">
          <Image src={SpotifyLogo} layout="fill" />
        </span>
      </div>
    </header>
  );
};

export default Header;
