"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";

export default function Menu({ pages }) {
  const [selectedPage, setSelectedPage] = useState(pages[0]);

  return (
    <section
      id="menu"
      className="w-full px-[70px] pb-[50px] flex-col justify-start items-start inline-flex"
    >
      <h2 className="self-stretch text-center text-foreground text-3xl font-bold font-['Cormorant Garamond']">
        Meny
      </h2>
      <div className="self-stretch pt-4 justify-center items-center gap-[30px] inline-flex">
        {pages.map((page) => {
          const isPressed = page.name === selectedPage.name;
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
      <div
        className={`flex flex-row flex-1 place-content-center w-full pt-[15px] gap-[30px] mt-8`}
      >
        {selectedPage.subPages.map((page, subPageIdx) => (
          <div
            key={subPageIdx}
            className="flex flex-col w-full gap-2.5 min-w-[250px] max-w-[600px]"
          >
            <h3 className="text-2xl font-bold">{page.name}</h3>
            <div className="flex flex-col gap-6">
              {page.dishes.map((dish, index) => (
                <div
                  key={index}
                  className="flex flex-col self-stretch min-w-[250px] p-2.5 rounded-xl border border-foreground/30 gap-0.5"
                >
                  <div className="flex flex-row justify-between">
                    <p className="text-foreground text-base font-bold font-sans">
                      {dish.name}
                    </p>
                    <div className="grow border-dotted border-b-2 mx-2 border-black" />
                    <div className="justify-start items-center inline-flex">
                      <span className="text-foreground text-base font-bold font-sans">
                        {dish.price}
                      </span>
                      <span className="text-foreground text-base font-bold font-sans">
                        kr
                      </span>
                    </div>
                  </div>
                  <p className="self-stretch text-foreground text-base font-normal font-sans line-clamp-3">
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
