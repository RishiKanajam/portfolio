import Link from "next/link";

export default function NotFound() {
  return <main id="main" className="detail">
    <header id="top"><h1>Page not found</h1></header>
    <p className="not-found-copy">There’s nothing at this address. <Link prefetch={false} href="/">Go to the home page</Link>.</p>
  </main>;
}
