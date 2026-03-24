export default function Footer() {
  return (
    <footer className="py-8 border-t border-cream-200">
      <div className="section-container text-center">
        <p className="text-xs text-ink-400">
          © {new Date().getFullYear()} 王思涵 · 用心设计，精益求精
        </p>
      </div>
    </footer>
  );
}
