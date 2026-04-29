import React from "react";

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <nav className="sidebar">
        <a href="#">Dashboard</a>
        <a href="#">Loans</a>
        <a href="#">Payments</a>
        <a href="#">History</a>
        <a href="#">Support</a>
      </nav>

      {/* Main Content */}
      <main className="main">
        {/* Header */}
        <header className="topbar">
          <h1>Welcome Back 👋</h1>
          <div className="profile">Derinsola</div>
        </header>

        <section className="stats">
          <div className="card">
            <p>Loan Balance</p>
            <h2>₦350,000</h2>
          </div>

          <div className="card">
            <p>Next Payment</p>
            <h2>May 15</h2>
          </div>

          <div className="card">
            <p>Paid</p>
            <h2>₦140,000</h2>
          </div>

          <div className="card">
            <p>Eligible</p>
            <h2>₦500,000</h2>
          </div>
        </section>
      </main>
    </div>
  );
}
