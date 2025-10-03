interface SeparatorProps {
  className?: string;
}

export default function Separator({ className = "" }: SeparatorProps) {
  return <div className={`w-full h-px bg-white/20 my-12 ${className}`} />;
}
