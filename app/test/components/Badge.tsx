interface BadgeProps {
  number: number;
  className?: string; // Optional: für Custom Styles
}
export default function Badge({ number, className = '' }: BadgeProps) {
  return <div className={`bg-stone-800 text-stone-400 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold ${className}`}>{number}</div>;
}
