import React from "react";
import CustDetailHeading from "./CustDetailHeading";
import CustomerDetails from "./CustomerDetails";
import Footer from "./Footer";
import Logo from "./Logo";

function App() {
  return (
    <div className="wrapper">
      <Logo />
      <article>
        <div className="cards">
          <table>
            <CustDetailHeading />
            <tbody id="customer-container">
              <CustomerDetails />
            </tbody>
          </table>
        </div>
      </article>
      <Footer />
    </div>
  );
}

export default App;
