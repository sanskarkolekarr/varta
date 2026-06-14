import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_60%)]" />

      <div className="relative z-10 flex flex-col items-center gap-8 text-center">
        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-gold/5 blur-3xl" />
          <Image
            src="/varta-logo.png"
            alt="VARTA"
            width={220}
            height={80}
            priority
            className="relative drop-shadow-[0_0_30px_rgba(212,175,55,0.15)]"
          />
        </div>

        <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div>
          <h1 className="text-5xl tracking-[0.3em] text-foreground sm:text-6xl md:text-7xl">
            COMING SOON
          </h1>
          <p className="mt-4 max-w-md text-sm tracking-[0.15em] text-foreground/60 sm:text-base">
            SOMETHING EXTRAORDINARY IS ON THE HORIZON
          </p>
        </div>

        <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <p className="text-xs tracking-[0.2em] text-foreground/40">
          &copy; {new Date().getFullYear()} VARTA. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
}
