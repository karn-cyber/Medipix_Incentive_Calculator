import React, { useState } from 'react';
import './App.css';
import logo from './assets/Medipix_logo.jpg';

function App() {
  const [form, setForm] = useState({
    secondarySales: '',
    superjointGM: '',
    superjointPlus: '',
    pixicoxib: '',
    cytovita: '',
    pixiproti: '',
    doctorCalls: '',
    superCore: '',
    dvl: '',
    daysWorked: '',
  });

  const [totalIncentive, setTotalIncentive] = useState(null);

  const decimalFields = ['doctorCalls', 'superCore', 'dvl'];

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (value === '') {
      setForm({ ...form, [id]: '' });
      return;
    }

    const isDecimal = decimalFields.includes(id);
    const regex = isDecimal ? /^\d*\.?\d*$/ : /^\d+$/;

    if (regex.test(value)) {
      setForm({ ...form, [id]: value });
    }
  };

  const parse = (val) => parseFloat(val) || 0;

  const calculateIncentive = () => {
    const s = parse(form.secondarySales);
    let secondaryIncentive = 0;
    if (s >= 70000 && s <= 100000) secondaryIncentive = s * 0.015;
    else if (s > 100000 && s <= 120000) secondaryIncentive = s * 0.025;
    else if (s > 120000 && s <= 150000) secondaryIncentive = s * 0.035;
    else if (s > 150000 && s <= 200000) secondaryIncentive = s * 0.045;
    else if (s > 500000) secondaryIncentive = s * 0.055;

    const brandIncentive = (id, val) => {
      if (["superjointGM", "pixicoxib"].includes(id)) {
        if (val >= 100 && val <= 200) return 500;
        else if (val > 200 && val <= 300) return 1000;
        else if (val > 300) return 1500;
      }
      if (["superjointPlus", "cytovita"].includes(id)) {
        if (val >= 50 && val <= 100) return 500;
        else if (val > 100 && val <= 150) return 1000;
        else if (val > 150) return 1500;
      }
      return 0;
    };

    const brandTotal =
      brandIncentive("superjointGM", parse(form.superjointGM)) +
      brandIncentive("superjointPlus", parse(form.superjointPlus)) +
      brandIncentive("pixicoxib", parse(form.pixicoxib)) +
      brandIncentive("cytovita", parse(form.cytovita));

    const pixiprotiUnits = parse(form.pixiproti);
    const pixiprotiIncentive = pixiprotiUnits > 50 ? pixiprotiUnits * 10 : 0;

    const doctorCalls = parse(form.doctorCalls);
    const superCore = parse(form.superCore);
    const dvl = parse(form.dvl);
    const daysWorked = parse(form.daysWorked);

    const field =
      doctorCalls > 11 &&
      superCore > 95 &&
      dvl > 90 &&
      daysWorked >= 21
        ? 500
        : 0;

    const total =
      secondaryIncentive + brandTotal + pixiprotiIncentive + field;

    setTotalIncentive(total);
  };

  return (
    <div className="container">
      <header className="app-header">
        <img src={logo} alt="Medipix Logo" className="logo" />
        <h1>Medipix Incentive Calculator</h1>
      </header>

      <main>
        <section className="calculator-section">
          <h2 className="section-heading">Secondary Sales Incentive</h2>
          <div className="form-grid">
            <div>
              <label htmlFor="secondarySales">Secondary Sales (₹)</label>
              <input id="secondarySales" value={form.secondarySales} onChange={handleChange} placeholder="Enter amount" />
            </div>
          </div>

          <h2 className="section-heading">Brand Incentive</h2>
          <div className="form-grid">
            {[
              { id: "superjointGM", label: "Superjoint GM" },
              { id: "superjointPlus", label: "Superjoint Plus" },
              { id: "pixicoxib", label: "Pixicoxib" },
              { id: "cytovita", label: "Cytovita Q-10" }
            ].map(({ id, label }) => (
              <div key={id}>
                <label htmlFor={id}>{label}</label>
                <input id={id} value={form[id]} onChange={handleChange} placeholder="Strips sold" />
              </div>
            ))}
          </div>

          <h2 className="section-heading">Special POB Incentive</h2>
          <div className="form-grid">
            <div>
              <label htmlFor="pixiproti">Pixiproti Powder (POB Units)</label>
              <input id="pixiproti" value={form.pixiproti} onChange={handleChange} placeholder="Units sold" />
            </div>
          </div>

          <h2 className="section-heading">Field Performance Incentive</h2>
          <div className="form-grid">
            <div>
              <label htmlFor="doctorCalls">Doctor Call Average</label>
              <input id="doctorCalls" value={form.doctorCalls} onChange={handleChange} placeholder="Enter value" />
            </div>
            <div>
              <label htmlFor="superCore">Super Core Doctor Coverage (%)</label>
              <input id="superCore" value={form.superCore} onChange={handleChange} placeholder="Enter value" />
            </div>
            <div>
              <label htmlFor="dvl">DVL</label>
              <input id="dvl" value={form.dvl} onChange={handleChange} placeholder="Enter value" />
            </div>
            <div>
              <label htmlFor="daysWorked">Days Worked</label>
              <input id="daysWorked" value={form.daysWorked} onChange={handleChange} placeholder="Enter value" />
            </div>
          </div>

          <button className="calculate-btn" onClick={calculateIncentive}>
            Calculate Incentive
          </button>

          {totalIncentive !== null && (
            <div className="result-section">
              Total Incentive: ₹{Math.round(totalIncentive)}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
