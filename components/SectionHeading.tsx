type Props = {
  title: string;
  path: string;
  method?: "GET" | "POST";
  note?: string;
};

// Plain-English heading first; the endpoint motif survives as a small mono caption.
export default function SectionHeading({ title, path, method = "GET", note }: Props) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-8">
      <h2 className="display text-2xl sm:text-3xl">{title}</h2>
      <span className="path-caption" aria-hidden="true">
        <span className={`method ${method === "GET" ? "method-get" : "method-post"}`}>
          {method}
        </span>
        {path}
      </span>
      {note && (
        <p className="mono-data text-xs text-ink-soft ml-auto hidden sm:block">{note}</p>
      )}
    </div>
  );
}
