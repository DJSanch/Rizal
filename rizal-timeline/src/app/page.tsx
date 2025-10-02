import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import TimelineEmbed from "@/components/TimelineEmbed";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 w-full max-w-5xl">
        <Card>
          <CardHeader>
            <CardTitle>José Rizal Interactive Timeline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Explore the key moments of Rizal’s life—family background, education, travels, works, and legacy.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/references">References</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://timeline.knightlab.com/" target="_blank" rel="noreferrer">What powers this?</a>
              </Button>
            </div>
            <Separator />
            <TimelineEmbed url="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=YOUR_PUBLISHED_SHEET_URL&font=Default&lang=en&initial_zoom=2&height=650" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
