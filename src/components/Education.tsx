"use client";

import FadeIn from "./FadeIn";
import { education } from "@/data/content";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-cream-50">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">教育背景</h2>
        </FadeIn>

        <div className="space-y-12">
          {education.map((edu, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="relative pl-8 border-l-2 border-cream-300">
                {/* Dot */}
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-accent" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-serif font-medium text-ink-900">
                      {edu.school}
                    </h3>
                    <p className="text-sm text-ink-400">{edu.schoolEn}</p>
                  </div>
                  <span className="text-sm text-accent font-medium whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>

                <p className="text-ink-600 mb-1">
                  {edu.department} · {edu.degree}
                </p>
                <p className="text-sm text-ink-500 mb-2">
                  GPA: {edu.gpa}
                  {"rank" in edu && ` · ${edu.rank}`}
                </p>

                {"scholarship" in edu && (
                  <p className="text-sm text-accent mb-2">
                    🏆 {edu.scholarship}
                  </p>
                )}

                {"honors" in edu && edu.honors && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {edu.honors.map((h) => (
                      <span key={h} className="tag">
                        {h}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mt-2">
                  {edu.courses.map((c) => (
                    <span
                      key={c}
                      className="text-xs px-2 py-0.5 rounded bg-cream-200/60 text-ink-500"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
