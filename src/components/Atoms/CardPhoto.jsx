"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function CardPhoto() {
  return (
    <CardContainer>
      <CardBody className="group/card dark:hover:shadow-2xl w-auto h-auto rounded-2xl">
        <CardItem translateZ={100}>
          <Image
            src="/assets/you.png"
            height={300}
            width={300}
            className="object-cover rounded-2xl group-hover/card:shadow-xl"
            alt="Rico Eriansyah"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}