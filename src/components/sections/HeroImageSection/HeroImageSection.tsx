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
      <div className="flex flex-col items-center gap-[33px] pt-0 pb-[9px] px-0">
        <div className="flex flex-col h-[660px] z-[2] items-start pl-[78px]  pr-0 pt-[120px] pb-0 relative w-full rounded-[25px] font-display">
          {/* Hero Text and Rating */}
          <div className="inline-flex flex-col h-[218px] items-start justify-around gap-[15px] relative">
            <div className="inline-flex flex-col h-[182px] items-start justify-center gap-[21px] relative">
              <h1 className="relative w-[587px] font-bold text-white text-[54px] leading-[70px]">
                Fly stress-free, <br />
                We handle your bags
              </h1>

              {/* Trustpilot Rating */}
              <Card className="inline-flex items-center gap-[12.01px] px-[12.01px] py-[7.5px] bg-transparent border-0 relative flex-[0_0_auto] rounded-[3px]">
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
          <div className="inline-flex flex-col h-[78px] items-center gap-[19px] relative">
            <div className="inline-flex items-start gap-[9px] relative flex-[0_0_auto]">
              <Button className="flex items-center justify-center gap-[14.23px] px-[42px] py-[32px] relative mt-[5.42px] mb-[-1.42px] ml-[-1.42px] mr-[-1.42px] bg-[#fdcd00] rounded-[13px] hover:bg-[#fdcd00]/90">
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
          <div className="relative ml-6 mt-4 font-semibold text-[#bdbdbd] text-lg text-center tracking-[0] leading-[21.8px]">
            Starting from $25
          </div>

          {/* Hero Image Section */}
          <div className="absolute w-[858px] h-[973px] top-0 left-[667px]">
            <div className="relative h-[906px]">
              <Image
                className=""
                alt="Rectangle"
                src="/hero-image.png"
                width={1100}
                height={1000}
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Grid Overlay */}
        <Image
          className="absolute w-full h-full top-0 left-0 z-[1]"
          alt="Grid layers"
          src="/grid-layer.png"
          width={1100}
          height={1000}
          unoptimized
        />
      </div>
    </section>
  );
};
