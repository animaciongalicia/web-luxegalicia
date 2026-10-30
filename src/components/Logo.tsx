import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["600"], display: "swap" });

// Wordmark: same letterform as the brand logo (Cinzel), flat and sharp at any size.
export default function Logo({ tone = "dark", size = "md" }: { tone?: "dark" | "light"; size?: "md" | "lg" }) {
  const top = size === "lg" ? "text-[26px]" : "text-[21px]";
  const bottom = size === "lg" ? "text-[16px]" : "text-[13px]";
  return (
    <span className={`${cinzel.className} inline-flex flex-col items-center leading-none`} aria-label="Luxe Galicia">
      <span className={`${top} pl-[0.32em] tracking-[0.32em] ${tone === "dark" ? "text-gray-900" : "text-white"}`}>LUXE</span>
      <span aria-hidden="true" className="my-1 h-px w-full bg-gradient-to-r from-transparent via-[#b8913a] to-transparent" />
      <span className={`${bottom} pl-[0.38em] tracking-[0.38em] ${tone === "dark" ? "text-gray-900" : "text-[#d6b56a]"}`}>GALICIA</span>
    </span>
  );
}
