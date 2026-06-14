import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center gap-12">
        <Image
          src="/varta-logo.png"
          alt="VARTA"
          width={200}
          height={72}
          priority
        />

        <div className="h-px w-20 bg-gold" />

        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl tracking-[0.25em] text-foreground sm:text-5xl md:text-6xl">
            COMING SOON
          </h1>
          <p className="text-xs tracking-[0.2em] text-foreground/50 sm:text-sm">
            SOMETHING EXTRAORDINARY IS ON THE HORIZON
          </p>
        </div>

        <div className="h-px w-20 bg-gold" />

        <p className="text-[10px] tracking-[0.15em] text-foreground/30">
          &copy; {new Date().getFullYear()} VARTA. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
}
