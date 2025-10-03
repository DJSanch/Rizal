"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="row-start-2 w-full max-w-6xl">
        <FadeIn>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight">Welcome to the Rizal Timeline</h1>
            <p className="text-lg text-muted-foreground">
              Explore José Rizal’s life, works, and legacy through a clear blog and timeline experience. Use the navigation
              above to read a detailed Blogpost or browse references. Start below to begin your journey.
            </p>
            <div className="flex gap-3">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  // slide out a bit for feedback then navigate
                  const section = document.querySelector('main');
                  if (section) {
                    section.classList.add('animate-slideUp');
                    setTimeout(() => {
                      window.location.assign('/blogpost');
                    }, 280);
                  } else {
                    window.location.assign('/blogpost');
                  }
                }}
                aria-label="Go to blogpost"
                title="Go to blogpost"
              >
                Read the Blogpost
              </Button>
              <Button variant="outline" asChild>
                <Link href="/references">References</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Jose_Rizal_full.jpg"
              alt="Portrait of José Rizal"
              className="w-full aspect-square rounded-lg border shadow-sm object-cover object-top"
            />
          </div>
        </section>
        </FadeIn>
      </main>
    </div>
  );
}
