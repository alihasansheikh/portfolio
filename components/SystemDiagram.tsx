export default function SystemDiagram() {
  return (
    <svg
      viewBox="0 0 460 300"
      role="img"
      aria-label="System diagram: a request travels from the client through Nginx to the API, which talks to MySQL and Redis"
      className="w-full h-auto"
    >
      {/* request path: client -> nginx -> api */}
      <path className="diagram-path" d="M 88 62 L 168 62" />
      <path className="diagram-path" d="M 292 62 L 292 128" />
      {/* api -> mysql */}
      <path className="diagram-path" d="M 292 200 L 292 236" />
      {/* api -> redis */}
      <path className="diagram-path" d="M 356 164 L 404 164" />

      {/* CLIENT */}
      <g>
        <rect className="diagram-box" x="16" y="40" width="72" height="44" rx="4" />
        <text className="diagram-label" x="52" y="59" textAnchor="middle">
          CLIENT
        </text>
        <text className="diagram-sublabel" x="52" y="73" textAnchor="middle">
          browser / app
        </text>
      </g>

      {/* NGINX */}
      <g>
        <rect className="diagram-box" x="168" y="40" width="80" height="44" rx="4" />
        <text className="diagram-label" x="208" y="59" textAnchor="middle">
          NGINX
        </text>
        <text className="diagram-sublabel" x="208" y="73" textAnchor="middle">
          linux vps
        </text>
        <path className="diagram-path" d="M 248 62 L 292 62 L 292 62" />
      </g>

      {/* API */}
      <g>
        <rect className="diagram-box" x="228" y="128" width="128" height="72" rx="4" />
        <text className="diagram-label" x="292" y="152" textAnchor="middle">
          API
        </text>
        <text className="diagram-sublabel" x="292" y="168" textAnchor="middle">
          spring boot · laravel
        </text>
        <text className="diagram-sublabel" x="292" y="182" textAnchor="middle">
          auth · rbac · webhooks
        </text>
      </g>

      {/* MYSQL */}
      <g>
        <rect className="diagram-box" x="240" y="236" width="104" height="44" rx="4" />
        <text className="diagram-label" x="292" y="255" textAnchor="middle">
          MYSQL
        </text>
        <text className="diagram-sublabel" x="292" y="269" textAnchor="middle">
          115+ migrations
        </text>
      </g>

      {/* REDIS */}
      <g>
        <rect className="diagram-box" x="404" y="142" width="48" height="44" rx="4" />
        <text className="diagram-label" x="428" y="161" textAnchor="middle">
          REDIS
        </text>
        <text className="diagram-sublabel" x="428" y="175" textAnchor="middle">
          cache
        </text>
      </g>

      {/* annotation */}
      <text className="diagram-note" x="16" y="24">
        200 OK — the part users never see
      </text>

      {/* animated request dot: client -> nginx -> api -> mysql and back */}
      <circle className="diagram-dot" r="3.5">
        <animateMotion
          dur="5s"
          repeatCount="indefinite"
          path="M 88 62 L 292 62 L 292 164 L 292 258 L 292 164 L 292 62 L 88 62"
          keyPoints="0;0.5;0.5;1"
          keyTimes="0;0.45;0.55;1"
          calcMode="linear"
        />
      </circle>
    </svg>
  );
}
