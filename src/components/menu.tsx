"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Menu({ pages }) {
  const [selectedPage, setSelectedPage] = useState(pages[0]);

  return (
    <section
      id="menu"
      className="w-full px-[70px] pb-[50px] flex-col justify-start items-start inline-flex"
    >
      <h2 className="self-stretch text-center text-foreground text-3xl font-bold font-['Cormorant Garamond']">
        Menu
      </h2>
      <div className="self-stretch pt-4 justify-center items-center gap-[30px] inline-flex">
        {pages.map((page) => {
          let isPressed = false;
          if (page.name === selectedPage.name) {
            console.log(selectedPage);
            isPressed = true;
          }
          return (
            <Button
              variant={"outline"}
              key={page.name}
              isPressed={isPressed}
              onClick={() => {
                setSelectedPage(page);
              }}
            >
              {page.name}
            </Button>
          );
        })}
      </div>
      <div className="self-stretch pt-[15px] flex-col justify-start items-start gap-[30px] flex">
        {selectedPage.subPages.map((page, subPageIdx) => (
          <div
            key={subPageIdx}
            className="self-stretch flex-col justify-start items-start gap-2.5 flex"
          >
            <h3 className="text-2xl font-bold">{page.name}</h3>
            <div className="overflow-x-scroll self-stretch justify-start items-center gap-[50px] inline-flex">
              {page.dishes.map((dish, index) => (
                <div
                  key={index}
                  className="min-w-[200px] p-2.5 rounded-xl border border-foreground flex-col justify-start items-start gap-0.5 flex"
                >
                  <Image
                    className="self-stretch rounded-xl"
                    src="https://via.placeholder.com/189x186"
                    alt="sushi"
                    width={189}
                    height={186}
                  />
                  <p className="text-foreground text-base font-bold font-sans">
                    {dish.name}
                  </p>
                  <div className="justify-start items-center inline-flex">
                    <span className="text-foreground text-base font-bold font-sans">
                      {dish.price}
                    </span>
                    <span className="text-foreground text-base font-bold font-sans">
                      kr
                    </span>
                  </div>
                  <p className="self-stretch text-foreground text-base font-normal font-sans">
                    {dish.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
