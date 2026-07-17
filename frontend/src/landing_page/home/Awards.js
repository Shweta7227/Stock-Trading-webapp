import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* Left Side */}
        <div className="col-md-6 p-5">
          <img
            src="media/images/largestBroker.svg"
            alt="Award"
            className="img-fluid"
          />
        </div>

        {/* Right Side */}
        <div className="col-md-6 p-5 mt-3">

          <h1>Largest Stock broker in India</h1>

          <p className="mb-5">
            2+ million Zerodha clients contribute over 15% of all retail order
            volume in India daily by trading and investing in:
          </p>

          <div className="row">

            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
            
          </div>
            <img src="media/images/pressLogos.png" alt="Press Logo" className="img-fluid mt-3" style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  );
}
export default Awards;