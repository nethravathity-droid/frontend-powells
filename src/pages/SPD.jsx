import "./SPDSection.css";

import React from "react";


const SPD = () => {
  return (
    <section className="spd-section">

      {/* SPD 1 */}
      <div className="spd-container">
        <div className="spd-image">
          <img src="/image/spd.jpg" alt="SPD Type 1" />
        </div>

        <div className="spd-text">
          <h2>Surge Protection Device - 2 Pole</h2>
          <p>
            Designed for installation at the main distribution board.
            Protects electrical systems from direct lightning strikes
            and high surge currents.
          </p>

          <div className="spd-details">
            <span>⚡ Uc: DC600V & Uc: AC385V</span>
            <span>⚡ Imax:(80/20s) 40kA & Imax:(80/20s) 60kA</span>
            <span>⚡ In:(80/20s) 20kA & In:(80/20s) 30kA</span>
            <span>⚡ Up:less than or equal 2.8kV & Up:less than or equal 2.0kV</span>
          </div>
        </div>
      </div>


      {/* SPD 2 */}
      <div className="spd-container reverse">
        <div className="spd-image">
          <img src="/image/spd1.jpg" alt="SPD Type 2" />
        </div>

        <div className="spd-text">
          <h2>Surge Protection Device - 3 Pole</h2>
          <p>
            Installed in sub distribution panels to protect equipment
            from switching surges and indirect lightning effects.
          </p>

          <div className="spd-details">
            <span>⚡ Uc: DC1000V & Uc: AC385V</span>
            <span>⚡ Imax:(80/20s) 40kA & Imax:(80/20s) 60kA</span>
            <span>⚡ In:(80/20s) 3.6kV & In:(80/20s) 30kA</span>
            <span>⚡ Up:less than or equal 3.6kV & Up:less than or equal 2.0kV</span>
          </div>
        </div>
      </div>


      {/* SPD 3 */}
      <div className="spd-container">
        <div className="spd-image">
          <img src="/image/spd4.jpg" alt="SPD Type 3" />
        </div>

        <div className="spd-text">
          <h2>Surge Protection Device - 4 Pole</h2>
          <p>
            Final protection stage placed close to sensitive equipment
            like computers, automation systems and electronics.
          </p>

          <div className="spd-details">
            <span>⚡ Uc: DC1400V & Uc: AC385V</span>
            <span>⚡ Imax:(80/20s) 40kA & Imax:(80/20s) 60kA</span>
            <span>⚡ In:(80/20s) 3.6kV & In:(80/20s) 30kA</span>
            <span>⚡ Up:less than or equal 3.6kV & Up:less than or equal 2.0kV</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SPD;

/*export default function SPDSection() {
  return (
    <section className="spd-section">
      {/* LEFT CONTENT */
      /*<div className="spd-left">
        <h1 className="spd-title">
          Surge Protective Devices <span>(SPD)</span>
        </h1>

        <div className="spec-heading">Technical Specifications</div>

        <div className="spec-grid">
          {/* DC Cards */
          /*<div className="spec-card">
            <h3>SPD DC</h3>
            <p>Model: CMT-40</p>
            <p>Uc: DC600V</p>
            <p>Imax: 40kA</p>
            <p>In: 20kA</p>
            <p>Up: ≤2.8kV</p>
            <p>Type: T2</p>
            <p>IEC/EN61643-11</p>
          </div>

          <div className="spec-card">
            <h3>SPD DC</h3>
            <p>Model: CMT-40</p>
            <p>Uc: DC1000V</p>
            <p>Imax: 40kA</p>
            <p>In: 20kA</p>
            <p>Up: ≤3.6kV</p>
            <p>Type: T2</p>
            <p>IEC/EN61643-11</p>
          </div>

          <div className="spec-card">
            <h3>SPD DC</h3>
            <p>Model: CMT-40</p>
            <p>Uc: DC1400V</p>
            <p>Imax: 40kA</p>
            <p>In: 20kA</p>
            <p>Up: ≤3.6kV</p>
            <p>Type: T2</p>
            <p>IEC/EN61643-11</p>
          </div>

          {/* AC Cards */
          /*<div className="spec-card">
            <h3>SPD AC</h3>
            <p>Model: CMT-60</p>
            <p>Uc: AC385V</p>
            <p>Imax: 60kA</p>
            <p>In: 30kA</p>
            <p>Up: ≤2.0kV</p>
            <p>Type: T2</p>
            <p>IEC/EN61643-11</p>
          </div>

          <div className="spec-card">
            <h3>SPD AC</h3>
            <p>Model: CMT-60</p>
            <p>Uc: AC385V</p>
            <p>Imax: 60kA</p>
            <p>In: 30kA</p>
            <p>Up: ≤2.0kV</p>
            <p>Type: T2</p>
            <p>IEC/EN61643-11</p>
          </div>

          <div className="spec-card">
            <h3>SPD AC</h3>
            <p>Model: CMT-60</p>
            <p>Uc: AC385V</p>
            <p>Imax: 60kA</p>
            <p>In: 30kA</p>
            <p>Up: ≤2.0kV</p>
            <p>Type: T2</p>
            <p>IEC/EN61643-11</p>
          </div>
        </div>
      </div>

      {/* RIGHT PRODUCT IMAGES */
     /* <div className="spd-right">
        <img src="/image/spd1.png" alt="SPD Device" />
        <img src="/image/spd1.png" alt="SPD Device" />
        <img src="/image/spd1.png" alt="SPD Device" />
        <a
  href="/catalogues/powells-product-catalogue.pdf"
  download
  className="catalogue-btn"
  style={{ marginRight: '15px' }} // Adds space
>
  Download Catalogue
</a>
<a
  href="/contact"
  className="catalogue-btn"
>
  Get a Quote
</a>
      </div>
    </section>
  );
}*/