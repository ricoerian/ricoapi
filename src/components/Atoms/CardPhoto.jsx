"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function CardPhoto({ src, alt, height, width }) {
  return (
    <CardContainer>
      <CardBody className="group/card dark:hover:shadow-2xl w-auto h-auto rounded-2xl">
        <CardItem translateZ={100}>
          <Image
            src={src}
            height={height}
            width={width}
            className="object-cover rounded-2xl group-hover/card:shadow-xl"
            alt={alt}
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}