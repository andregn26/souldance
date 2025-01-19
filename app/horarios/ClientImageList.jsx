"use client";

import React from "react";
import Image from "next/image";
import { getImageUrl } from "@/utils/useImageUrlBuilder";

const ClientImageList = ({ gallery }) => {
  return (
    <>
      {gallery?.map((img, idx) => {
        const imgUrl = getImageUrl(img).url();
        console.log("🚀 ~ {gallery?.map ~ imgUrl:", imgUrl);

        return (
            <picture>
                <Image
            key={idx}
            src={imgUrl}
            alt="horario"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            width={1080} // Replace with actual width
            height={1920} // Replace with actual height
            className="object-contain"
            placeholder="blur"
            blurDataURL={imgUrl}
          />
            </picture>
          
        );
      })}
    </>
  );
};

export default ClientImageList;
