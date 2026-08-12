import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fbf8f4] px-6">
      <div className="max-w-lg text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#991031]">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Page not found.</h1>
        <Link
          href="/en"
          className="mt-8 inline-flex rounded-full border border-black/15 bg-white px-5 py-3 text-sm font-semibold"
        >
          Back to PRAXIS
        </Link>
      </div>
    </main>
  );
}
