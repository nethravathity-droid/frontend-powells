export default function ElectricalCircuit({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <path d="M0 120 H200 V80 H400 V160 H600 V100 H800" />
      <path d="M100 0 V200 M300 40 V280 M500 0 V240 M700 60 V300" />
      <path d="M0 380 H180 V340 H420 V420 H640 V360 H800" />
      <circle cx="200" cy="120" r="6" />
      <circle cx="400" cy="160" r="6" />
      <circle cx="600" cy="100" r="6" />
      <circle cx="180" cy="380" r="5" />
      <circle cx="420" cy="420" r="5" />
      <rect x="180" y="260" width="40" height="40" rx="4" />
      <rect x="420" y="320" width="36" height="36" rx="4" />
      <rect x="560" y="180" width="32" height="32" rx="4" />
      <circle cx="320" cy="400" r="28" fill="none" strokeWidth="2" />
      <circle cx="520" cy="440" r="18" fill="none" strokeWidth="2" />
    </svg>
  );
}
