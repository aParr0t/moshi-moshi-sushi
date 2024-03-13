"use client";

import React, { useContext, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "@/context/cart";

import { Button } from "@/components/ui/button";

export default function Menu({ pages }: { pages: any[] }) {
  const [selectedPage, setSelectedPage] = useState(pages[0]);
  const [navHeight, setNavHeight] = useState(0);
  const headerRef = React.useRef<HTMLHeadingElement>(null);
  const { cartItems, addToCart } = useContext(CartContext);

  useEffect(() => {
    const newNavHeight = document.getElementById("nav")!.offsetHeight;
    setNavHeight(newNavHeight);
  }, []);

  return (
    <section
      id="menu"
      className="flex flex-col justify-start items-start w-full overflow-visible px-0"
    >
      <h2
        className="self-stretch text-center text-foreground text-3xl font-bold font-serif pb-1"
        ref={headerRef}
      >
        Meny
      </h2>
      {/* menu picker */}
      <div
        className={`sticky self-stretch py-4 bg-background -translate-y-1 w-full z-10 px-8`}
        style={{ top: navHeight }}
      >
        {/* menu picker mobile */}
        <div className="block sm:hidden">
          <Select
            value={selectedPage}
            onValueChange={(e) => {
              setSelectedPage(e);
              if (
                headerRef.current &&
                headerRef.current.getBoundingClientRect().top < 0
              ) {
                headerRef.current?.scrollIntoView();
              }
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {pages.map((page) => {
                return (
                  <SelectItem key={page.name} value={page}>
                    {page.name}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        {/* menu picker desktop */}
        <div className="flex-wrap hidden sm:gap-4 sm:flex w-full justify-center">
          {pages.map((page) => {
            const isPressed = page.name === selectedPage.name;
            return (
              <Button
                variant={"outline"}
                key={page.name}
                isPressed={isPressed}
                onClick={() => {
                  setSelectedPage(page);
                  if (
                    headerRef.current &&
                    headerRef.current.getBoundingClientRect().top < 0
                  ) {
                    headerRef.current?.scrollIntoView();
                  }
                }}
                className="max-sm:px-3 max-sm:py-1 "
              >
                {page.name}
              </Button>
            );
          })}
        </div>
      </div>

      {/* products */}
      <div
        className={`flex flex-col gap-y-8 md:flex-row flex-1 place-content-center w-full pt-[15px] gap-4 px-8`}
      >
        {selectedPage.subPages.map((page: any, subPageIdx: number) => (
          <div
            key={subPageIdx}
            className="flex flex-col w-full gap-2.5 min-w-[250px] max-w-[600px]"
          >
            <h3 className="text-2xl font-bold">{page.name}</h3>
            <div className="flex flex-col gap-6">
              {page.dishes.map((dish: any, index: number) => (
                <div
                  key={index}
                  className="flex flex-col self-stretch min-w-[250px] p-2.5 rounded-xl border border-foreground/30 gap-0.5 relative"
                >
                  <div className="flex flex-row justify-between">
                    <p className="text-foreground text-base font-bold font-sans">
                      {dish.name}
                    </p>
                    <div className="grow border-dotted border-b-2 mx-2 border-black" />
                    <div className="justify-start items-center flex">
                      <span className="text-foreground text-base font-bold font-sans">
                        {dish.price}
                      </span>
                      <span className="text-foreground text-base font-bold font-sans">
                        kr
                      </span>
                    </div>
                  </div>
                  <p className="self-stretch text-foreground text-base font-normal font-sans line-clamp-3 pr-4">
                    {dish.description}
                  </p>
                  <div
                    className="rounded-full p-2 bg-background absolute right-0 bottom-0 border border-foreground/30 translate-x-[30%] translate-y-[30%] hover:cursor-pointer"
                    onClick={() => {
                      addToCart(dish);
                    }}
                  >
                    <FaCartPlus size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
