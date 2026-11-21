import type { SiteCopy } from "@/data/copy";

type Labels = SiteCopy["engineers"]["diagram_labels"];

// Hand-drawn request-flow diagram. Reader-facing labels on top, the tech nouns as sublabels.
// Rendered at full column width so labels stay at 12px or more; scrolls sideways on small screens.
export default function SystemDiagram({ labels }: { labels: Labels }) {
  return (
    <svg
      viewBox="0 0 520 300"
      role="img"
      aria-label="System diagram: a request travels from the customer's browser through the server to the app, which reads and writes the database and cache"
      className="w-full h-auto min-w-[520px]"
    >
      {/* request path: client -> server -> app */}
      <path className="diagram-path" d="M 116 64 L 176 64" />
      <path className="diagram-path" d="M 292 64 L 330 64 L 330 128" />
      {/* app -> database */}
      <path className="diagram-path" d="M 330 204 L 330 240" />
      {/* app -> cache */}
      <path className="diagram-path" d="M 398 166 L 436 166" />

      <g>
        <rect className="diagram-box" x="12" y="40" width="104" height="48" rx="4" />
        <text className="diagram-label" x="64" y="61" textAnchor="middle">
          {labels.client}
        </text>
        <text className="diagram-sublabel" x="64" y="77" textAnchor="middle">
          {labels.client_sub}
        </text>
      </g>

      <g>
        <rect className="diagram-box" x="176" y="40" width="116" height="48" rx="4" />
        <text className="diagram-label" x="234" y="61" textAnchor="middle">
          {labels.server}
        </text>
        <text className="diagram-sublabel" x="234" y="77" textAnchor="middle">
          {labels.server_sub}
        </text>
      </g>

      <g>
        <rect className="diagram-box" x="262" y="128" width="136" height="76" rx="4" />
        <text className="diagram-label" x="330" y="160" textAnchor="middle">
          {labels.app}
        </text>
        <text className="diagram-sublabel" x="330" y="178" textAnchor="middle">
          {labels.app_sub}
        </text>
      </g>

      <g>
        <rect className="diagram-box" x="262" y="240" width="136" height="48" rx="4" />
        <text className="diagram-label" x="330" y="261" textAnchor="middle">
          {labels.db}
        </text>
        <text className="diagram-sublabel" x="330" y="277" textAnchor="middle">
          {labels.db_sub}
        </text>
      </g>

      <g>
        <rect className="diagram-box" x="436" y="142" width="72" height="48" rx="4" />
        <text className="diagram-label" x="472" y="163" textAnchor="middle">
          {labels.cache}
        </text>
        <text className="diagram-sublabel" x="472" y="179" textAnchor="middle">
          {labels.cache_sub}
        </text>
      </g>

      <text className="diagram-note" x="12" y="24">
        {labels.note}
      </text>

      {/* Request dot: client, server, app, database and back. Animated in CSS rather than
          SMIL so the checkbox beneath the diagram can pause it. */}
      <circle className="diagram-dot" r="3.5" />
    </svg>
  );
}
