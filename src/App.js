import React, { useState } from "react";
import "./App.css";
import person from './person.jpg'
function App() {
  const [showIndividual, setShowIndividual] = useState(true);
  return (
    <div>

      <div className="individual-container">

        <div className="toggle-buttons">
          <button
            onClick={() => setShowIndividual(true)}
            className={showIndividual ? "active" : ""}
          >
            Individual
          </button>
          <button
            onClick={() => setShowIndividual(false)}
            className={!showIndividual ? "active" : ""}
          >
            Family
          </button>
        </div>

        <div className="box-wrapper">
          {showIndividual ? (
            <form className="individual">
              <h2>Individual</h2>
              <div className="upper">
                <p className="advance">
                  Advanced <span className="specified">Best Value</span>
                </p>
                <p className="price">
                  <b>$84.99</b>
                  <span>
                    /yr<sup>*</sup>
                  </span>
                </p>
                <p className="price2">
                  <s>$199.99</s> <small>save $115.00</small>
                </p>
              </div>
              <div className="lower">
                <p className="ultimate">Ultimate </p>
                <p className="price3"><b>$184.99</b> <span>/yr<sup>*</sup>
                </span></p>
                <p className="price4"> <s>$279.99</s> <small>save $90.00</small></p>
              </div>
              <div className="box">
                <p>&#10003;Identity Monitoring</p>
                <p>&#10003;Identity Monitoring</p>
                <p>&#10003;Identity Monitoring</p>
                <p>&#10003;Identity Monitoring</p>
              </div>
              <div className="box1">
                <p>
                  &#10003;<span className="new">New</span> Identity Monitoring
                </p>
                <p>
                  &#10003;<span className="new">New</span> Identity Monitoring
                </p>
                <p>
                  &#10003;<span className="new">New</span> Identity Monitoring
                </p>
                <p>
                  &#10003;<span className="new">New</span> Identity Monitoring
                </p>
              </div>
              <button className="btn" type="submit">Get protection now</button>
              <p className="a1"><a href="#">See more plans below</a></p>
            </form>
          ) : (
            <form className="family">
              <h2>Family</h2>
              <div className="upper">
                <p className="advance">
                  Advanced <span className="specified">Best Value</span>
                </p>
                <p className="price">
                  <b>$113.99</b>{" "}
                  <span>
                    /yr<sup>*</sup>
                  </span>
                </p>
                <p className="price2">
                  <s>$269.99</s> <small>save $156.00</small>
                </p>
              </div>
              <div className="lower">
                <p className="ultimate">Ultimate </p>
                <p className="price3"><b>$236.99</b> <span>/yr<sup>*</sup>
                </span></p>
                <p className="price4"> <s>$424.99</s> <small>save $188.00</small></p>
              </div>
              <div className="box">
                <p>&#10003;Identity Monitoring</p>
                <p>&#10003;Identity Monitoring</p>
                <p>&#10003;Identity Monitoring</p>
                <p>&#10003;Identity Monitoring</p>
              </div>
              <div className="box1">
                <p>
                  &#10003;<span className="new">New</span> Identity Monitoring
                </p>
                <p>
                  &#10003;<span className="new">New</span> Identity Monitoring
                </p>
                <p>
                  &#10003;<span className="new">New</span> Identity Monitoring
                </p>
                <p>
                  &#10003; $1M ID theft coverage
                </p>
              </div>
              <button className="btn" type="submit">Get protection now</button>
              <p className="a1"><a href="#">See more plans below</a></p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;
