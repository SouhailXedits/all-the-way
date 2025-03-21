import { ArrowRight, ArrowRightIcon, ArrowUpIcon } from "lucide-react";
import React from "react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import Image from "next/image";

const totalStars = 5;
const filledStars = 4.9;

export const HeroImageSection = (): JSX.Element => {
  // Rating stars data
  const stars = [
    { src: "/star-full.png", alt: "Star" },
    { src: "/star-full.png", alt: "Star" },
    { src: "/star-full.png", alt: "Star" },
    { src: "/star-full.png", alt: "Star" },
    { src: "/star-partial.png", alt: "Star" },
  ];

  return (
    <section className="relative w-full bg-[#050505] rounded-[0px_0px_33px_33px] overflow-hidden mb-10">
      <div className="flex flex-col items-center gap-[33px] pt-0 px-0">
        <div className="flex min-h-[660px] z-[2] items-center px-4 md:px-8 lg:pl-[78px] lg:pr-0 py-12 lg:pt-[120px] relative w-full rounded-[25px] font-display">
          <div className="flex flex-col items-start gap-5 w-full lg:w-[45%] z-10 -mt-28">

          {/* Hero Text and Rating */}
          <div className="flex flex-col items-start gap-2 lg:gap-[15px]">
            <div className="flex flex-col items-start gap-4 lg:gap-[21px]">
              <h1 className="relative w-full font-bold text-white text-3xl md:text-4xl lg:text-[54px] leading-tight lg:leading-[70px]">
                Fly stress-free, <br />
                We handle your bags
              </h1>

              {/* Trustpilot Rating */}
              <Card className="inline-flex items-center gap-2 lg:gap-[12.01px] p-2 lg:px-[12.01px] lg:py-[7.5px] bg-transparent border-0">
                <div className="relative w-fit font-light text-transparent text-[12.3px] tracking-[0] leading-[11.3px] whitespace-nowrap">
                  <span className="font-semibold text-white">{filledStars}/{totalStars}</span>
                  <span className="font-bold text-[#fefefe8c]">&nbsp;</span>
                  <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#fefefe8c]">
                    Rating
                  </span>
                </div>

                <div className="inline-flex items-center gap-[8.44px] relative flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-[1.53px] relative flex-[0_0_auto]">
                    {stars.map((star, index) => (
                      // <div key={index} className="relative w-[16.27px] h-[16.27px] bg-[#219653] flex items-center justify-center">
                        <Image
                          key={index}
                          className="relative w-[16.27px] h-[16.27px]"
                          alt={star.alt}
                          src={star.src}
                          width={100}
                          height={100}
                          unoptimized
                        />
                      // </div>
                    ))}
                  </div>

                  <div className="[font-family:'Manrope',Helvetica] font-normal text-white text-[14px] leading-[14.5px] relative w-fit tracking-[1px] whitespace-nowrap">
                    Trustpilot
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Book Now Button */}
          <div className="flex flex-col gap-4 lg:gap-[19px]">
            <div className="flex items-start gap-2 lg:gap-[9px]">
              <Button className="flex items-center justify-center gap-3 lg:gap-[14.23px] px-6 lg:px-[42px] py-4 lg:py-[32px] bg-[#fdcd00] rounded-[13px] hover:bg-[#fdcd00]/90">
                <span className="relative w-fit font-bold text-[#050505] text-lg tracking-[0] leading-[normal] mr-1 pr-2 pt-1">
                  Book now
                </span>
                <Image
                  className=" text-black "
                  height={25}
                  width={25}
                  src="/arrow-right.png"
                  alt="Arrow Right"
                />
              </Button>
            </div>
          </div>

          {/* Price Text */}
          <div className="relative ml-2 lg:ml-6 mt-2 lg:mt-4 font-semibold text-[#bdbdbd] text-base lg:text-lg text-center tracking-[0] leading-[21.8px]">
            Starting from $25
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="absolute top-0 right-0 w-full lg:w-[50%] xl:w-[40%] 2xl:w-[40%] h-full hidden lg:block overflow-visible bg-[#FDCD00]">
            <div className="w-full h-full relative">
            <div className="flex items-end justify-center w-full h-full">
              <Image
                className="w-[65%] h-[92%] ml-10"
                alt="Rectangle"
                src="/lady-image.png"
                priority
                unoptimized
                width={1000}
                height={1000}
              />
            </div>
            <div className="absolute bottom-[58%] left-0 transform -translate-x-1/2 translate-y-1/2">
              <Image
                className="w-[300px] h-full"
                alt="Rectangle"
                src="/Group-3.png"
                priority
                unoptimized
                width={600}
                height={600}
              />
            </div>
            </div>
          </div>
        </div>

        {/* Grid Overlay */}
        <Image
          className="absolute inset-0 w-full h-full z-[1] object-cover"
          alt="Grid layers"
          src="/grid-layer.png"
          fill
          priority
          unoptimized
        />
      </div>
    </section>
  );
};
