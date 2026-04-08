export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[13px] text-text-4">
          © {new Date().getFullYear()} Rishi Kanajam
        </p>
        <p className="text-[13px] text-text-4">
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-2 transition-colors"
          >
            Next.js
          </a>
        </p>
      </div>
    </footer>
  );
}
