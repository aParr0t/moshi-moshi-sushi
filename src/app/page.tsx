import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import HandModel from "@/components/hand";
import Menu from "@/components/menu";
import { getPages } from "@/lib/directus";

export default async function Home() {
  const pages = await getPages();

  return (
    <main className="flex min-h-screen flex-col items-center max-w-[1500px] mx-auto relative">
      <nav className="flex flex-row gap-4 justify-between items-center w-full px-10 py-2 fixed top-0 left-0 z-50 backdrop-blur-sm bg-background/70">
        <Image
          src="/static/images/logo.svg"
          alt="logo"
          height={80}
          width={80}
        />
        <ul className="flex flex-row gap-4 items-center">
          <li>
            <a href="#hero">Hjem</a>
          </li>
          <li>
            <a href="#menu">Meny</a>
          </li>
          <li>
            <a href="#contact">Kontakt oss</a>
          </li>
          <li>
            <Button>Bestill</Button>
          </li>
        </ul>
      </nav>
      <div className="max-w-[1000px]">
        {/* Hero */}
        <section
          id="hero"
          className="flex flex-row place-items-start min-h-[90vh] w-full relative"
        >
          <div
            className="w-full flex flex-col items-start gap-4 my-auto
          translate-y-10 p-6 ml-auto z-20 mr-[50%] bg-background/70 pointer-events-none backdrop-blur-sm rounded-lg"
          >
            <h1 className="text-5xl font-serif font-light">
              Opplev Smaken av Fantastisk Sushi
            </h1>
            <p className="text-lg font-sans">
              Sushi som tar deg med på en smaksreise til Japan.
            </p>
            <Button className="pointer-events-auto">Bestill</Button>
          </div>
          <div className="left-[-100px] h-full absolute text-center right-[-100px]">
            <HandModel />
            <div className="absolute h-full right-0 top-0 bg-gradient-to-r from-transparent to-background w-[50px]"></div>
          </div>
        </section>
        {/* Menu */}
        <Menu pages={pages} />

        {/* About us */}
        <section
          id="about"
          className="w-full px-[72px] py-[68px] justify-center items-start gap-[65px] inline-flex"
        >
          <Image
            src="/static/images/kitchen.png"
            alt="Om oss"
            className="rounded-xl"
            width={377}
            height={331}
          />
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <p className="text-foreground text-3xl font-bold font-serif">
              Om oss
            </p>
            <p className="self-stretch text-foreground text-opacity-90 text-base font-normal font-sans">
              Velkommen til Moshi Moshi Sushi i hjertet av Lillestrøm! Vi er
              stolte av å presentere vår lidenskap for sushi gjennom hver deilig
              bit vi serverer. Våre dyktige kokker deler en dyp kjærlighet for
              sitt håndverk, og det gjenspeiles i hvert rull eller nigiri de
              lager. Vårt mål er å tilby den beste sushi-opplevelsen i
              Lillestrøm, og vi ser frem til å servere deg sushi.
            </p>
          </div>
        </section>
        {/* Working hours */}
        <section
          id="working-hours"
          className="w-full px-[72px] pt-5 pb-[50px] flex-col justify-start items-center gap-4 inline-flex"
        >
          <h2 className="text-foreground text-3xl font-bold font-serif">
            Åpningstider
          </h2>
          <div className="text-center text-foreground text-base font-normal font-sans">
            <ul>
              <li>Mandag 13:00-20:15</li>
              <li>Tirsdag 13:00-20:15</li>
              <li>Onsdag Stengt</li>
              <li>Torsdag 13:00-20:15</li>
              <li>Fredag 13:00-20:15</li>
              <li>Lørdag 13:00-20:15</li>
              <li>Søndag 13:00-20:15</li>
            </ul>
          </div>
        </section>
        {/* Location */}
        <section
          id="location"
          className="w-full px-[72px] pt-5 pb-[50px] flex-col justify-start items-center gap-4 inline-flex"
        >
          <h2 className="text-foreground text-3xl font-bold font-serif">
            Hvor du finner oss
          </h2>
          <iframe
            width="100%"
            height="400px"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1997.4512231496426!2d11.04652587674458!3d59.95783836055433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46417c9f8522ad41%3A0x2541f13ccfdcdd89!2sMoshiMoshi%20Sushi!5e0!3m2!1sen!2sno!4v1696621580428!5m2!1sen!2sno"
          ></iframe>
        </section>
        {/* Footer */}
        <footer className="w-full h-[352px] px-[70px] pt-16 pb-6 flex-col justify-center items-center gap-10 inline-flex">
          <div className="self-stretch justify-start items-start gap-[70px] inline-flex">
            <div className="grow shrink basis-0 justify-between items-start flex">
              <div className="flex-col justify-start items-start gap-4 inline-flex">
                <Image
                  width={172}
                  height={121}
                  src="/static/images/logo.svg"
                  alt="logo"
                />
                <p className="w-[204px] text-foreground text-base font-normal font-sans">
                  Ditt beste valg for autentisk sushi i Lillestrøm
                </p>
              </div>
              <div className="flex-col justify-start items-start gap-[30px] inline-flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <p className="text-foreground text-lg font-bold font-sans">
                    Besøksadresse
                  </p>
                  <div className="text-foreground text-base font-normal font-sans">
                    Parkalleen 4b
                    <br />
                    2000 Lillestrøm
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <p className="text-foreground text-lg font-bold font-sans">
                    Kontakt oss
                  </p>
                  <div className="text-foreground text-base font-normal font-sans">
                    post@moshimoshi.no
                    <br />
                    Tlf: +47 21 39 56 75
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <p className="text-foreground text-lg font-bold font-sans">
                  Åpningstider
                </p>
                <ul className="text-foreground text-base font-normal font-sans">
                  <li>Mandag 13:00-20:15</li>
                  <li>Tirsdag 13:00-20:15</li>
                  <li>Onsdag Stengt</li>
                  <li>Torsdag 13:00-20:15</li>
                  <li>Fredag 13:00-20:15</li>
                  <li>Lørdag 13:00-20:15</li>
                  <li>Søndag 13:00-20:15</li>
                </ul>
              </div>
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <p className="text-foreground text-lg font-bold font-sans">
                  Tjenester
                </p>
                <ul className="flex-col justify-start items-start gap-2 flex">
                  <li>
                    <a href="#menu">Meny</a>
                  </li>
                  <li>
                    <a href="#working-hours">Åpningstider</a>
                  </li>
                  <li>
                    <a href="#about">Om oss</a>
                  </li>
                  <li>
                    <a href="#location">Besøksadresse</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-foreground text-base font-normal font-sans">
            Nettsiden er utviklet av Revene
          </p>
        </footer>
      </div>
    </main>
  );
}
