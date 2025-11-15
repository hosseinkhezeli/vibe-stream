// features/player/player-bar.tsx
"use client";

import { useState } from "react";
import {
  Heart,
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";
import Image from "next/image";
import { clsx } from "clsx";

type Track = {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  durationSeconds: number;
};

const fakeCurrentTrack: Track = {
  id: "track-1",
  title: "Cold Nights (Goosh Edit)",
  artist: "Various Artists",
  imageUrl: "/images/tracks/cold-nights.jpg",
  durationSeconds: 245, // 4:05
};

function formatTime(sec: number) {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function PlayerBar() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [volume, setVolume] = useState<number>(70);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  const currentTimeSeconds = Math.round(
    (progress / 100) * fakeCurrentTrack.durationSeconds
  );

  return (
    <footer
      className="
        border-t border-white/10
        bg-bg
        px-2 md:px-4
        h-[72px] md:h-[88px]
        flex items-center
      "
      aria-label="پخش‌کننده"
    >
      {/* LEFT: track info */}
      <div className="flex-1 min-w-0 flex items-center gap-3 md:gap-4">
        <div className="relative h-12 w-12 md:h-14 md:w-14 overflow-hidden rounded-sm bg-bg-elevated shadow-soft">
          <Image
            src={fakeCurrentTrack.imageUrl}
            alt={fakeCurrentTrack.title}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium truncate text-start">
              {fakeCurrentTrack.title}
            </p>
          </div>
          <p className="text-xs text-muted truncate text-start">
            {fakeCurrentTrack.artist}
          </p>
        </div>

        <button
          type="button"
          className="
            hidden sm:inline-flex
            h-8 w-8 items-center justify-center
            rounded-full text-muted
            hover:text-accent
            transition-colors
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-accent/60
          "
          aria-label="افزودن به علاقه‌مندی‌ها"
        >
          <Heart size={16} />
        </button>
      </div>

      {/* CENTER: controls + timeline */}
      <div className="flex-[1.4] min-w-0 flex flex-col items-center gap-1 px-2">
        {/* Controls */}
        <div className="flex items-center justify-center gap-4 md:gap-5">
          <button
            type="button"
            className="hidden md:inline-flex text-muted hover:text-white transition-colors"
            aria-label="پخش تصادفی"
          >
            <Shuffle size={18} />
          </button>

          <button
            type="button"
            className="
              inline-flex items-center justify-center
              text-muted hover:text-white transition-colors
            "
            aria-label="قبلی"
          >
            <SkipBack size={20} />
          </button>

          <button
            type="button"
            onClick={togglePlay}
            className="
              inline-flex items-center justify-center
              h-10 w-10 md:h-11 md:w-11
              rounded-full
              bg-white
              text-bg
              hover:scale-105 active:scale-95
              transition-transform
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent/60
            "
            aria-label={isPlaying ? "مکث" : "پخش"}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <button
            type="button"
            className="
              inline-flex items-center justify-center
              text-muted hover:text-white transition-colors
            "
            aria-label="بعدی"
          >
            <SkipForward size={20} />
          </button>

          <button
            type="button"
            className="hidden md:inline-flex text-muted hover:text-white transition-colors"
            aria-label="تکرار"
          >
            <Repeat size={18} />
          </button>
        </div>

        {/* Timeline */}
        <div className="hidden sm:flex items-center gap-2 w-full">
          <span className="text-[0.65rem] text-muted tabular-nums">
            {formatTime(currentTimeSeconds)}
          </span>
          <input
            type="range"
            min={0}
            max={100}
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="
              flex-1
              h-1
              cursor-pointer
              accent-accent
            "
            aria-label="پیشرفت آهنگ"
          />
          <span className="text-[0.65rem] text-muted tabular-nums">
            {formatTime(fakeCurrentTrack.durationSeconds)}
          </span>
        </div>
      </div>

      {/* RIGHT: volume + extra */}
      <div className="flex-1 min-w-0 hidden sm:flex items-center justify-end gap-3 md:gap-4">
        {/* Volume */}
        <div className="flex items-center gap-2 w-[120px] md:w-[160px]">
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center text-muted hover:text-white transition-colors"
            aria-label={volume === 0 ? "افزایش صدا" : "قطع صدا"}
            onClick={() => setVolume((v) => (v === 0 ? 70 : 0))}
          >
            {volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="flex-1 h-1 cursor-pointer accent-accent"
            aria-label="تنظیم صدا"
          />
        </div>
      </div>
    </footer>
  );
}
