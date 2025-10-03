'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { events as data, TimelineEvent } from '@/data/events';

function formatDate(e: TimelineEvent) {
  if (!e.month && !e.day) return `${e.year}`;
  const d = new Date(e.year, (e.month || 1) - 1, e.day || 1);
  return d.toLocaleDateString(undefined, {
    year: 'numeric', month: 'long', day: e.day ? 'numeric' : undefined,
  } as any);
}

export default function Timeline() {
  const sorted = [...data].sort((a, b) => (a.year - b.year) || ((a.month||0)-(b.month||0)) || ((a.day||0)-(b.day||0)));
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border" aria-hidden />
      <div className="space-y-6">
        {sorted.map((e, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="mt-6 h-3 w-3 rounded-full bg-primary relative left-[-1px]" aria-hidden />
            <Card className="flex-1">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="text-base sm:text-lg">{e.headline}</CardTitle>
                  {e.group ? <Badge variant="secondary">{e.group}</Badge> : null}
                </div>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div className="text-muted-foreground">{formatDate(e)}{e.location ? ` · ${e.location}` : ''}</div>
                <p>{e.text}</p>
                {e.media?.url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={e.media.url} alt={e.media.caption || e.headline} className="rounded-md border" />
                ) : null}
                {e.media?.caption ? (
                  <div className="text-xs text-muted-foreground">{e.media.caption}{e.media.credit ? ` — ${e.media.credit}` : ''}</div>
                ) : null}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}


