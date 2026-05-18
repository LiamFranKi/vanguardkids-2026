import Image from "next/image";
import Link from "next/link";
import { brand, brandAssets } from "@/lib/site";

const sizeMap = {
  sm: { box: "h-9 w-9", px: 36, name: "text-sm font-bold" },
  md: { box: "h-12 w-12 sm:h-14 sm:w-14", px: 56, name: "text-lg font-extrabold sm:text-xl" },
  header: {
    box: "h-14 w-14 sm:h-16 sm:w-16",
    px: 64,
    name: "text-xl font-extrabold tracking-tight sm:text-2xl md:text-[1.65rem]",
  },
  lg: { box: "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]", px: 72, name: "text-2xl font-extrabold" },
} as const;

type BrandLogoProps = {
  size?: keyof typeof sizeMap;
  showName?: boolean;
  href?: string;
  className?: string;
};

export function BrandLogo({
  size = "md",
  showName = false,
  href = "/",
  className = "",
}: BrandLogoProps) {
  const s = sizeMap[size];

  const content = (
    <>
      <span
        className={`relative shrink-0 overflow-hidden rounded-full shadow-md shadow-ink/15 ring-2 ring-white/90 dark:ring-white/20 ${s.box}`}
      >
        <Image
          src={brandAssets.logo}
          alt={brand.name}
          width={s.px}
          height={s.px}
          className="h-full w-full object-cover"
          priority={size === "header" || size === "md" || size === "lg"}
          unoptimized
        />
      </span>
      {showName && (
        <span
          className={`whitespace-nowrap font-display leading-none text-ink ${s.name}`}
        >
          {brand.name}
        </span>
      )}
    </>
  );

  if (!href) {
    return (
      <span className={`inline-flex items-center gap-3 sm:gap-3.5 ${className}`}>
        {content}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 shrink-0 items-center gap-3 transition hover:opacity-95 active:scale-[0.98] sm:gap-3.5 ${className}`}
    >
      {content}
    </Link>
  );
}
