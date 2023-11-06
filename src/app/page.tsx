import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center max-w-[1500px] mx-auto relative">
      <nav className="flex flex-row gap-4 justify-between items-center w-full px-10 py-2 sticky top-0 left-0 z-50 bg-background">
        <Image
          src="/static/images/logo.svg"
          alt="logo"
          height={71}
          width={101}
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
        <section className="flex flex-row min-h-[80vh] w-full flex-1">
          <div className="w-full flex flex-col items-start gap-4 my-auto translate-y-10 px-10 ml-auto">
            <h1 className="text-5xl font-serif font-light">
              Opplev Smaken av Fantastisk Sushi
            </h1>
            <p className="text-lg font-sans ">
              Sushi som tar deg med på en smaksreise til Japan.
            </p>
            <Button>Bestill</Button>
          </div>
          <div className="w-full text-center relative">
            <span className="absolute top-[50%]">floating hand</span>
          </div>
        </section>
        {/* Menu */}
        <section className="w-full px-[70px] pb-[50px] flex-col justify-start items-start inline-flex">
          <h2 className="self-stretch text-center text-stone-950 text-3xl font-bold font-['Cormorant Garamond']">
            Menu
          </h2>
          <div className="self-stretch pt-4 justify-center items-center gap-[30px] inline-flex">
            {["Maki", "Nigiri", "Sashimi", "Småretter", "Mix meny"].map(
              (item) => (
                <Button variant={"outline"} key={item}>
                  {item}
                </Button>
              )
            )}
          </div>
          <div className="self-stretch pt-[15px] flex-col justify-start items-start gap-[30px] flex">
            {["Makimono", "Futomaki & spesial maki"].map((item, index) => (
              <div
                key={index}
                className="self-stretch flex-col justify-start items-start gap-2.5 flex"
              >
                <h3 className="text-2xl font-bold">{item}</h3>
                <div className="overflow-x-scroll self-stretch justify-start items-center gap-[50px] inline-flex">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
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
                      <div className="text-foreground text-base font-bold font-sans">
                        Sushi maki
                      </div>
                      <div className="justify-start items-center inline-flex">
                        <div className="text-foreground text-base font-bold font-sans">
                          89
                        </div>
                        <div className="text-foreground text-base font-bold font-sans">
                          kr
                        </div>
                      </div>
                      <div className="self-stretch text-foreground text-base font-normal font-sans">
                        3 laks, 1 tunfisk, 1 surimi, 1 scrampi + 4 laks maki
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* About us */}
        <section className="w-full px-[72px] py-[68px] justify-center items-start gap-[65px] inline-flex">
          <Image
            src="/static/images/kitchen.png"
            alt="Om oss"
            className="rounded-xl"
            width={377}
            height={331}
          />
          <div className="flex-col justify-start items-start gap-[15px] inline-flex">
            <div className="text-foreground text-3xl font-bold font-serif">
              Om oss
            </div>
            <div className="self-stretch text-foreground text-opacity-90 text-base font-normal font-sans">
              Velkommen til Moshi Moshi Sushi i hjertet av Lillestrøm! Vi er
              stolte av å presentere vår lidenskap for sushi gjennom hver deilig
              bit vi serverer. Våre dyktige kokker deler en dyp kjærlighet for
              sitt håndverk, og det gjenspeiles i hvert rull eller nigiri de
              lager. Vårt mål er å tilby den beste sushi-opplevelsen i
              Lillestrøm, og vi ser frem til å servere deg sushi.
            </div>
          </div>
        </section>
        {/* Working hours */}
        <section className="w-full px-[72px] pt-5 pb-[50px] flex-col justify-start items-center gap-4 inline-flex">
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
        <section className="w-full px-[72px] pt-5 pb-[50px] flex-col justify-start items-center gap-4 inline-flex">
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
      </div>
    </main>
  );
}
