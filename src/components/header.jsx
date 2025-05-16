import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-1 intro-text">
                <h1 style={{ color: "#003366" }}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  //href="https://calendly.com/sabieeugeneosei177/45min"
                  href="https://contact-foot-clinic-podiatry.uk2.cliniko.com/bookings#service"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Book an appointment
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
