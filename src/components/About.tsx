"use client";

import FadeIn from "./FadeIn";
import { profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">关于</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-lg md:text-xl leading-relaxed text-ink-600 max-w-3xl">
            {profile.about}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
