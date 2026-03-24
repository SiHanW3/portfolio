import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "王思涵 · 数据科学 · 金融工程",
  description:
    "香港中文大学（深圳）金融工程硕士在读，专注于机器学习与金融量化研究。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="bg-cream-100 text-ink-900 antialiased">{children}</body>
    </html>
  );
}
