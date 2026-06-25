import ElectricalBackdrop from "./ElectricalBackdrop";

export default function PageShell({ children, variant = "light", className = "" }) {
  return (
    <div className={`elec-page elec-page--${variant} ${className}`.trim()}>
      <ElectricalBackdrop variant={variant === "dark" ? "dark" : "light"} />
      <div className="elec-page-content">{children}</div>
    </div>
  );
}
