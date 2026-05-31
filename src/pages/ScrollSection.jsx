import React, { useState } from "react";
import "./ScrollSection.css";

import img1 from "/image/ats8.png";
import img2 from "/image/ats8.png";
import img3 from "/image/ats8.png";

const products = [
  {
    id: 1,
    image: img1,
    amps: "63A",
    ratio: "4 Pole",
    enclosure: "Metal Enclosure",
  },
  {
    id: 2,
    image: img2,
    amps: "125A",
    ratio: "2 Pole",
    enclosure: "Powder Coated Enclosure",
  },
  {
    id: 3,
    image: img3,
    amps: "250A",
    ratio: "4 Pole",
    enclosure: "Compact Industrial Enclosure",
  },
];

const Variants = () => {
  const [showVariants, setShowVariants] = useState(false);

  return (
    <section className="variants-section">
      <div className="variants-header">
        <h2>Our ATS Variants</h2>
        <button onClick={() => setShowVariants(!showVariants)}>
          {showVariants ? "Hide Variants" : "View Variants"}
        </button>
      </div>

      {showVariants && (
        <div className="variants-grid">
          {products.map((product) => (
            <div className="variant-card" key={product.id}>
              <img src={product.image} alt="ATS Variant" />

              <div className="variant-info">
                <h3>{product.amps}</h3>
                <p><strong>Ratio:</strong> {product.ratio}</p>
                <p><strong>Enclosure:</strong> {product.enclosure}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Variants;