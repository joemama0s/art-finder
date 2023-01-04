import React from "react";
import Image from "next/image";
import imgOne from "./../public/img (70).webp";

function FeaturedArt() {
  return (
    <div>
      <section className="overflow-hidden text-gray-700">
        <div className="container mx-auto">
          <div className="flex flex-wrap ">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 ">
                <Image
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imgOne}
                />
              </div>
              <div className="w-1/2 ">
                <Image
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imgOne}
                />
              </div>
              <div className="w-full">
                <Image
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imgOne}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full ">
                <Image
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imgOne}
                />
              </div>
              <div className="w-1/2 ">
                <Image
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imgOne}
                />
              </div>
              <div className="w-1/2 ">
                <Image
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imgOne}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturedArt;
