import Link from "next/link";
import { Fragment } from "react";

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

// Renders inline links written as [anchor text](/path) inside content strings.
export function rich(text: string) {
  const out: React.ReactNode[] = [];
  let last = 0;
  const re = new RegExp(LINK.source, "g");
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    const i = m.index;
    if (i > last) out.push(text.slice(last, i));
    const [, label, href] = m;
    out.push(
      href.startsWith("/") ? (
        <Link key={i} href={href} className="font-medium text-luxe-700 underline decoration-luxe-300 underline-offset-2 transition-colors hover:decoration-luxe-700">
          {label}
        </Link>
      ) : (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-luxe-700 underline decoration-luxe-300 underline-offset-2 hover:decoration-luxe-700">
          {label}
        </a>
      )
    );
    last = i + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.map((n, k) => <Fragment key={k}>{n}</Fragment>);
}

// Same text without link markup, for meta tags, JSON-LD and other plain contexts.
export function plain(text: string) {
  return text.replace(LINK, "$1");
}
