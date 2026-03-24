"use client";

import FadeIn from "./FadeIn";
import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-container text-center">
        <FadeIn>
          <h2 className="section-title">联系我</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-ink-500 mb-8 max-w-md mx-auto">
            欢迎通过以下方式联系我，期待与你交流。
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-ink-700 hover:text-accent transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {profile.email}
            </a>
            <span className="text-ink-200 hidden sm:inline">|</span>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-ink-700 hover:text-accent transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {profile.phone}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
