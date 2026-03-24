"use client";

import FadeIn from "./FadeIn";
import { skills } from "@/data/content";

const categories = [
  { title: "编程语言", items: skills.programming },
  { title: "机器学习框架", items: skills.mlFrameworks },
  { title: "工具与平台", items: skills.tools },
  { title: "金融量化", items: skills.finance },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-cream-50">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">技能与证书</h2>
        </FadeIn>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {categories.map((cat, i) => (
            <FadeIn key={cat.title} delay={i * 0.1}>
              <h3 className="text-sm font-medium text-ink-400 uppercase tracking-wider mb-3">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm bg-white border border-cream-200 rounded-lg text-ink-700 hover:border-accent hover:text-accent transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Certificates */}
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-4">
            {skills.certificates.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-3 px-5 py-3 bg-white border border-cream-200 rounded-xl"
              >
                <span className="text-accent text-lg">🏅</span>
                <div>
                  <p className="text-sm font-medium text-ink-800">
                    {cert.name}
                  </p>
                  <p className="text-xs text-ink-400">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
