import { cn } from "@/lib/utils";

export function Badge({ text, className }: { text: string; className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary-soft text-primary font-semibold text-sm mb-6",
        className
      )}
    >
      <span>{text}</span>
    </div>
  );
}
