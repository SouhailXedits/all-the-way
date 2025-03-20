import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../ui/navigation-menu";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export const NavigationBarSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", href: "#" },
    { label: "How it works", href: "#" },
    { label: "Help & support", href: "#" },
  ];

  return (
    <header className="w-full z-10 h-[83px] flex items-center justify-between px-[66px] py-2.5 bg-white shadow-[0px_4px_33px_#00000033] sticky top-0 z-10">
      {/* Logo */}
      <div className="cursor-pointer">
        <Image src="/logo.png" alt="logo" width={153} height={23.67} unoptimized />
      </div>


      {/* Navigation Links */}
      <NavigationMenu>
        <NavigationMenuList className="flex gap-[22px] pl-[90px]">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                className="inline-flex items-center justify-center p-2.5 font-medium text-black text-base text-[17.6px] leading-[26px] transition-colors duration-300 hover:text-gray-600"
                href={item.href}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right Side Controls */}
      <div className="flex items-center justify-end gap-7">
        {/* Language Selector */}
        <div className="inline-flex items-center gap-1">
          <div className="mr-1">
            {/* <div className="relative w-6 h-6 bg-[100%_100%] border"> */}
              <Image
                className=" w-[22px] h-[18px] top-0 left-0 p-0 border"
                alt="Mask group"
                src="/eng.svg"
                width={20}
                height={17}
                unoptimized
              />
            {/* </div> */}
          </div>
          <span className="text-black [font-family:'Manrope',Helvetica] font-[500] text-base text-center">
            EN
          </span>
          <ChevronDownIcon className="w-6 h-6 text-black font-bold" />
        </div>

        {/* For Business Button */}
        <Button
          variant="outline"
          className="h-auto px-[18px] py-[11px] rounded-[16px] border-[2.3px] border-black font-bold text-black font-display text-[17px] flex items-center justify-center"
        >
          For Business
        </Button>
      </div>
    </header>
  );
};
