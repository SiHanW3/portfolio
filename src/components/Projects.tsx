"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import { projects, Project } from "@/data/content";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const hasResources = project.pdfFile || project.feishuLinks;

  return (
    <FadeIn delay={index * 0.08}>
      <div
        className="group border border-cream-200 rounded-2xl p-6 md:p-8 bg-white/60 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer relative"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Resource indicator - subtle icon on hover */}
        {hasResources && (
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-1">
            {project.pdfFile ? (
              <svg className="w-5 h-5 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            )}
          </div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg md:text-xl font-serif font-medium text-ink-900 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-ink-400 whitespace-nowrap mt-1">
            {project.period}
          </span>
        </div>

        <p className="text-sm text-accent mb-3">{project.role}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Summary */}
        <p className="text-ink-600 text-sm leading-relaxed">
          {project.summary}
        </p>

        {/* Expanded details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-cream-200">
                {/* Highlights */}
                <h4 className="text-sm font-medium text-ink-700 mb-2">
                  核心亮点
                </h4>
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-sm text-ink-500 flex items-start gap-2"
                    >
                      <span className="text-accent mt-1">·</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* PDF Download */}
                {project.pdfFile && (
                  <div className="mb-3">
                    <a
                      href={project.pdfFile}
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-cream-200 hover:bg-cream-300 text-ink-700 rounded-lg transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      下载项目报告 PDF
                    </a>
                  </div>
                )}

                {/* Feishu Links */}
                {project.feishuLinks && (
                  <div className="flex flex-wrap gap-2">
                    {project.feishuLinks.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-cream-300 hover:border-accent hover:text-accent text-ink-600 rounded-lg transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand hint */}
        <div className="mt-3 flex items-center gap-1 text-xs text-ink-300">
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ▾
          </motion.span>
          <span>{expanded ? "收起" : "展开详情"}</span>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">项目经历</h2>
        </FadeIn>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
