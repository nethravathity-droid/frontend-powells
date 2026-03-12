import React, { useState } from "react";
import "./InfoTabs.css";

export default function InfoTabs() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="info-section">
      <h2 className="section-title">Product Information</h2>

      {/* BUTTONS */}
      <div className="tab-buttons">
        <button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>

        <button
          className={activeTab === "features" ? "active" : ""}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>

        <button
          className={activeTab === "specs" ? "active" : ""}
          onClick={() => setActiveTab("specs")}
        >
          Specifications
        </button>

        <button
          className={activeTab === "applications" ? "active" : ""}
          onClick={() => setActiveTab("applications")}
        >
          Applications
        </button>
      </div>

      {/* CONTENT AREA */}
      <div className="tab-content">
        {activeTab === "overview" && (
          <div>
            <h3>Overview</h3>
            <p>
              Automatic Transfer Switch ensures seamless switching between
              power sources for uninterrupted electrical supply.
            </p>
          </div>
        )}

        {activeTab === "features" && (
          <div>
            <h3>Features</h3>
            <ul>
              <li>Fast automatic switching</li>
              <li>High reliability</li>
              <li>Compact design</li>
              <li>Long operational life</li>
            </ul>
          </div>
        )}

        {activeTab === "specs" && (
          <div>
            <h3>Specifications</h3>
            <ul>
              <li>Voltage: 230V / 415V</li>
              <li>Frequency: 50Hz</li>
              <li>Current rating: 32A – 800A</li>
            </ul>
          </div>
        )}

        {activeTab === "applications" && (
          <div>
            <h3>Applications</h3>
            <ul>
              <li>Industrial plants</li>
              <li>Commercial buildings</li>
              <li>Hospitals</li>
              <li>Data centers</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
