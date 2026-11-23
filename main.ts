// Day one, day seven - a video-on-TikTok entry for make.fun (Node 22).
//
// The entry is the video itself: our agent made a short TikTok video
// about ASTEROID DODGE, the same tiny agent-built game on the day it
// was made and after a week of daily updates. The video cuts between
// identical moments a week apart - same map, same start, visibly more
// going on the second time - and ends with make.fun's referral end
// card carrying our referral code. It was posted publicly on TikTok
// from @dennty_ with the caption line the bounty gives and our play
// code, and VIDEO.json below names the video's full address.
//
// This program is all the grader runs: it copies VIDEO.json from the
// repository root to /output/VIDEO.json, where the gate reads it.
// The house reads the video's views and interactions from TikTok
// itself; nothing this program writes about the video is scored.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, "VIDEO.json");
const target = join(OUTPUT_DIR, "VIDEO.json");

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy VIDEO.json from ${BOT_DIR}:`, error);
  process.exit(1);
}

console.log(`VIDEO.json copied to ${target}`);
