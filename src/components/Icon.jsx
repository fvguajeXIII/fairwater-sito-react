import RawSvg from "./RawSvg.jsx";

const s = (body, width = 2.4, extra = "") =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra}>${body}</svg>`;

const ICONS = {
  arrow: s('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  down: s('<path d="M12 5v14M6 13l6 6 6-6"/>'),
  menu: s('<path d="M4 8h16M4 16h16"/>'),
  phone: s('<rect x="6" y="2.5" width="12" height="19" rx="3"/><path d="M10.5 18.5h3"/>', 2),
  play: s('<path d="M6 3.8v16.4a1 1 0 0 0 1.5.9l13-8.2a1 1 0 0 0 0-1.8l-13-8.2A1 1 0 0 0 6 3.8Z"/>', 2),
  door: s('<path d="M3 21h18M6 21V4h9v17M15 6h3v15M12 12.5v.01"/>', 2),
  coin: s(
    '<circle cx="12" cy="12" r="8.5"/><path d="M14.8 9.2c-.6-.8-1.6-1.2-2.8-1.2-1.7 0-2.8.9-2.8 2s1 1.7 2.8 2 2.8.9 2.8 2.1-1.2 2-2.8 2c-1.3 0-2.3-.5-2.9-1.3M12 6.5V8M12 16v1.5"/>',
    2
  ),
  pin: s('<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.3"/>', 2),
  shield: s('<path d="M12 3 5 6v5.5c0 4.4 3 8 7 9.5 4-1.5 7-5.1 7-9.5V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>', 2),
};

export default function Icon({ name }) {
  return <RawSvg source={ICONS[name]} />;
}
