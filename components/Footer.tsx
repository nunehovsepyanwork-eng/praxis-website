import type { Dictionary } from "@/lib/i18n";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-white/8 bg-[#111111] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 py-9 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
        <div>
          <div className="text-[15px] font-bold tracking-[-0.03em]">PRAXIS</div>
          <p className="mt-2 text-[12px] text-white/38">{dict.footer.descriptor}</p>
        </div>

        <p className="text-[11px] text-white/28">
          © 2026 PRAXIS. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
