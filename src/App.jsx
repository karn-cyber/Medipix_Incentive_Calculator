import React from "react";
import "./App.css";
import MedipixLogo from "./assets/Medipix_logo.jpg"; // Adjust path if needed

function App() {
  return (
    <div className="container">
      <header className="app-header">
        <img src={MedipixLogo} alt="Medipix Logo" className="logo" />
        <h1>Medipix Employee Incentive Calculator</h1>
      </header>

      <main>
        <section className="calculator-section">
          <h2>Secondary Sales</h2>
          <input type="number" placeholder="Enter Secondary Sales (₹)" />
        </section>

        <section className="calculator-section">
          <h2>Brand Sales</h2>
          <label>SuperJoint GM</label>
          <input type="number" placeholder="Strips sold" />

          <label>SuperJoint Plus</label>
          <input type="number" placeholder="Strips sold" />

          <label>Pixicoxib</label>
          <input type="number" placeholder="Strips sold" />

          <label>Cytovita-Q10</label>
          <input type="number" placeholder="Strips sold" />
        </section>

        <section className="calculator-section">
          <h2>POB Incentives</h2>
          <label>Pixiproti Powder</label>
          <input type="number" placeholder="Units sold" />
        </section>

        <section className="calculator-section">
          <h2>Field Performance</h2>
          <label>Doctor Calls</label>
          <input type="number" placeholder="Calls made" />

          <label>Super Core Coverage (%)</label>
          <input type="number" placeholder="%" />

          <label>DVL Coverage (%)</label>
          <input type="number" placeholder="%" />

          <label>Days in Field</label>
          <input type="number" placeholder="Days worked" />
        </section>

        <button className="calculate-btn">Calculate Incentive</button>

        <div className="result-section">
          <h3>Estimated Incentive: ₹0.00</h3> {/* Placeholder for dynamic result */}
        </div>
      </main>
    </div>
  );
}

export default App;
