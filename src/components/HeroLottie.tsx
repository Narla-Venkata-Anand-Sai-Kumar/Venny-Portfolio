"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

/**
 * Decorative Lottie animation for the /about hero.
 *
 * To swap the animation:
 * 1. Go to https://lottiefiles.com, pick an animation you like.
 * 2. Either:
 *    a. Click "Public Embed" → "Copy .lottie URL" and paste it as `src` below, OR
 *    b. Download the .lottie file and drop it into /public/lottie/hero.lottie
 */
export function HeroLottie() {
  return (
    <div className="relative aspect-square w-full overflow-hidden">
      <DotLottieReact
        src="/lottie/hero.json"
        loop
        autoplay
        className="h-full w-full"
      />
    </div>
  );
}
