'use client';
import React from 'react';

interface TimelineEmbedProps {
  url: string;
  height?: number;
}

export default function TimelineEmbed({ url, height = 720 }: TimelineEmbedProps) {
  return (
    <div className="w-full rounded-md overflow-hidden border">
      <iframe
        src={url}
        width="100%"
        height={height}
        allowFullScreen
        className="border-0"
      />
    </div>
  );
}
