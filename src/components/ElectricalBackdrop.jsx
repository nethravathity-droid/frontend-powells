import ElectricalCircuit from "./ElectricalCircuit";

export default function ElectricalBackdrop({ variant = "light", className = "" }) {
  return (
    <div className={`elec-backdrop elec-backdrop--${variant} ${className}`.trim()} aria-hidden="true">
      <ElectricalCircuit className="elec-circuit-svg" />
      <div className="elec-grid-bg" />
      <div className="elec-deco elec-deco-c1" />
      <div className="elec-deco elec-deco-c2" />
      <div className="elec-deco elec-deco-s1" />
      <div className="elec-deco elec-deco-s2" />
    </div>
  );
}
