import { cn } from "@/lib/utils";

export function Badge({ text, className }: { text: string; className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary-soft text-primary font-semibold text-xs sm:text-sm mb-6 break-words",
        className
      )}
    >
      <span className="text-center break-words">{text}</span>
    </div>
  );
}
