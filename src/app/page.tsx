import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <nav className="flex flex-row gap-4 justify-between items-center w-full px-10 py-2 absolute z-50">
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
      {/* Hero */}
      <section className="flex flex-row h-[80vh] w-full flex-1">
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
    </main>
  );
}
