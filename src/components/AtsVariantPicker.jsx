import { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import "./AtsVariantPicker.css";

export default function AtsVariantPicker({ items, path = "/pages/Ats" }) {
  const [selectedId, setSelectedId] = useState(items[0]?.id ?? "");

  if (!items?.length) return null;

  const selected =
    items.find((item) => item.id === selectedId) ?? items[0];

  return (
    <div className="ats-variant-picker">
      <p className="ats-variant-picker__label">Select rating</p>
      <div className="ats-variant-picker__amps" role="listbox" aria-label="Select ATS rating">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="option"
            aria-selected={selectedId === item.id}
            className={`ats-variant-picker__amp${
              selectedId === item.id ? " is-selected" : ""
            }`}
            onClick={() => setSelectedId(item.id)}
          >
            {item.amp}
          </button>
        ))}
      </div>
      <div className="ats-variant-picker__cart">
        <span className="ats-variant-picker__selected">{selected.name}</span>
        <AddToCartButton
          product={{ ...selected, path }}
          variant="primary"
        />
      </div>
    </div>
  );
}
