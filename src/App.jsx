import React from "react";
import "./App.css";
import MedipixLogo from "./assets/Medipix_logo.jpg"; // Ensure correct path

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
          <input
            type="number"
            min="0"
            placeholder="Enter Secondary Sales (₹)"
            onInput={(e) => (e.target.value = Math.max(0, e.target.value))}
          />
        </section>

        <section className="calculator-section">
          <h2>Brand Sales</h2>
          <div className="form-grid">
            <div>
              <label>SuperJoint GM</label>
              <input
                type="number"
                min="0"
                placeholder="Strips sold"
                onInput={(e) => (e.target.value = Math.max(0, e.target.value))}
              />
            </div>
            <div>
              <label>SuperJoint Plus</label>
              <input
                type="number"
                min="0"
                placeholder="Strips sold"
                onInput={(e) => (e.target.value = Math.max(0, e.target.value))}
              />
            </div>
            <div>
              <label>Pixicoxib</label>
              <input
                type="number"
                min="0"
                placeholder="Strips sold"
                onInput={(e) => (e.target.value = Math.max(0, e.target.value))}
              />
            </div>
            <div>
              <label>Cytovita-Q10</label>
              <input
                type="number"
                min="0"
                placeholder="Strips sold"
                onInput={(e) => (e.target.value = Math.max(0, e.target.value))}
              />
            </div>
          </div>
        </section>

        <section className="calculator-section">
          <h2>POB Incentives</h2>
          <label>Pixiproti Powder</label>
          <input
            type="number"
            min="0"
            placeholder="Units sold"
            onInput={(e) => (e.target.value = Math.max(0, e.target.value))}
          />
        </section>

        <section className="calculator-section">
          <h2>Field Performance</h2>
          <div className="form-grid">
            <div>
              <label>Doctor Calls</label>
              <input
                type="number"
                min="0"
                placeholder="Calls made"
                onInput={(e) => (e.target.value = Math.max(0, e.target.value))}
              />
            </div>
            <div>
              <label>Super Core Coverage (%)</label>
              <input
                type="number"
                min="0"
                placeholder="Enter %"
                onInput={(e) => (e.target.value = Math.max(0, e.target.value))}
              />
            </div>
            <div>
              <label>DVL Coverage (%)</label>
              <input
                type="number"
                min="0"
                placeholder="Enter %"
                onInput={(e) => (e.target.value = Math.max(0, e.target.value))}
              />
            </div>
            <div>
              <label>Days in Field</label>
              <input
                type="number"
                min="0"
                placeholder="Days worked"
                onInput={(e) => (e.target.value = Math.max(0, e.target.value))}
              />
            </div>
          </div>
        </section>

        <button className="calculate-btn">Calculate Incentive</button>

        <div className="result-section">
          <h3>Estimated Incentive: ₹0.00</h3>
        </div>
      </main>
    </div>
  );
}

export default App;
