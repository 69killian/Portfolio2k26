import Image from "next/image";

interface MarqueeTextProps {
  className?: string;
}

export default function MarqueeText({ className = "" }: MarqueeTextProps) {
  const images = [
    "/icons/nextjs.svg",
    "/icons/tailwindcss-wordmark.svg",
    "/icons/supabase-wordmark.svg",
    "/icons/stripe (1).svg",
    "/icons/logo-github-16.svg",
    "/icons/nextjs.svg",
    "/icons/tailwindcss-wordmark.svg",
    "/icons/supabase-wordmark.svg",
    "/icons/stripe (1).svg",
    "/icons/logo-github-16.svg",
    "/icons/nextjs.svg",
    "/icons/tailwindcss-wordmark.svg",
    "/icons/supabase-wordmark.svg",
    "/icons/stripe (1).svg",
    "/icons/logo-github-16.svg",
  ];

  return (
    <div className={`overflow-hidden relative w-full ${className}`}>
      <div className="flex animate-[marquee_12s_linear_infinite] whitespace-nowrap">
        {/* Premier groupe d'images */}
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt="Technology Icon"
            width={
              src.includes("stripe") || src.includes("github")
                ? 70
                : src.includes("tailwindcss") || src.includes("supabase")
                ? 130
                : 100
            }
            height={
              src.includes("stripe") || src.includes("github")
                ? 70
                : src.includes("tailwindcss") || src.includes("supabase")
                ? 130
                : 100
            }
            className="mx-6 opacity-50"
          />
        ))}
        {/* Deuxième groupe d'images (copie exacte) */}
        {images.map((src, i) => (
          <Image
            key={`copy-${i}`}
            src={src}
            alt="Technology Icon"
            width={
              src.includes("stripe") || src.includes("github")
                ? 70
                : src.includes("tailwindcss") || src.includes("supabase")
                ? 130
                : 100
            }
            height={
              src.includes("stripe") || src.includes("github")
                ? 70
                : src.includes("tailwindcss") || src.includes("supabase")
                ? 130
                : 100
            }
            className="mx-6 opacity-50"
          />
        ))}
      </div>
    </div>
  );
}
