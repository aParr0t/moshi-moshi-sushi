import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <nav className="flex flex-row justify-between gap-4">
        {/* <Image src={Logo} alt="logo" className="w-32" /> */}
        <ul className="flex flex-row gap-4">
          <li>
            <a href="#">Om oss</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
        </ul>
      </nav>
      {/* Hero */}
      <section className="flex flex-row h-[90vh] w-full flex-1">
        <div className="w-full flex flex-col items-start gap-4 mt-[45vh] p-10 ml-auto">
          <h1 className="text-5xl font-serif font-light">
            Opplev Smaken av Fantastisk Sushi
          </h1>
          <p className="text-lg font-sans">
            Sushi som tar deg med på en smaksreise til Japan.
          </p>
          <Button>Bestill</Button>
        </div>
        <div className="w-full text-center relative">
          <span className="absolute top-[50%] left-[50%]">floating hand</span>
        </div>
      </section>
    </main>
  );
}
