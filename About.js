import React from "react";
import person from "./images/person.png";
import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.jpeg";
import logo4 from "./images/logo4.png";
import logo5 from "./images/logo5.jpg";
import logo6 from "./images/logo6.png";
import Navbar from "./Navbar.js";
import { MDBBtn } from 'mdb-react-ui-kit';

export default function About() {
  return (
    <>
      <div
        className="outer-container"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="about-container" id="aboutUs">
          <div
            className="about-cards-container mx-auto"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="about-card">
              <div className="custom-card">
                <div className="text-center fs-3 fw-bold card-green">
                  BJP
                </div>
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <img
                      src={logo1}
                      alt="Founder "
                      className="card-img-top rounded-circle profile"
                      style={{
                        width: "90px",
                        height: "90px",
                        objectFit: "cover",
                        borderRadius: "100%",
                      }}
                    />
                  </div>
                  <div className="card-green about-name">
                    <strong>Bharatiya Janata Party</strong>
                  </div>
                 
                </div>
                <div className="text-muted text-center">
                  <div className="social-icons fs-5">
                   {/* Button */}
                   <div style={{ margin: '10px' }}>
                    <MDBBtn size="sm">
                        Cast Vote
                    </MDBBtn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-card">
              <div className="custom-card">
                <div className="text-center fs-3 fw-bold card-green">
                  Congress
                </div>
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <img
                      src={logo2}
                      alt="Founder "
                      className="card-img-top rounded-circle profile"
                      style={{
                        width: "90px",
                        height: "90px",
                        objectFit: "cover",
                        borderRadius: "100%",
                      }}
                    />
                  </div>
                  <div className="card-green about-name">
                    <strong>Congress</strong>
                  </div>
                 
                </div>
                <div className="text-muted text-center">
                  <div className="social-icons fs-5">
                    {/* Button */}
                    <div style={{ margin: '10px' }}>
                    <MDBBtn size="sm">
                        Cast Vote
                    </MDBBtn>
                    </div>
                 
                  </div>
                </div>
              </div>
            </div>
            <div className="about-card">
              <div className="custom-card">
                <div className="text-center fs-4 fw-bold card-green">
                  DMK
                </div>
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <img
                      src={logo3}
                      alt="Founder "
                      className="card-img-top rounded-circle profile"
                      style={{
                        width: "90px",
                        height: "90px",
                        objectFit: "cover",
                        borderRadius: "100%",
                      }}
                    />
                  </div>
                  <div className="card-green about-name">
                    <strong>Dravida Munnetra Kazhagam</strong>
                  </div>
                 
                </div>
                <div className="text-muted text-center">
                  <div className="social-icons fs-5">
                {/* Button */}
                <div style={{ margin: '10px' }}>
                    <MDBBtn size="sm">
                        Cast Vote
                    </MDBBtn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-card">
              <div className="custom-card">
                <div className="text-center fs-3 fw-bold card-green">
                  ADMK
                </div>
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <img
                      src={logo4}
                      alt="Founder "
                      className="card-img-top rounded-circle profile"
                      style={{
                        width: "90px",
                        height: "90px",
                        objectFit: "cover",
                        borderRadius: "100%",
                      }}
                    />
                  </div>
                  <div className="card-green about-name">
                    <strong>Anna Dravida Munnetra Kazhagam</strong>
                  </div>
                 
                </div>
                <div className="text-muted text-center">
                  <div className="social-icons fs-5">
                   
                    {/* Button */}
                    <div style={{ margin: '10px' }}>
                    <MDBBtn size="sm">
                        Cast Vote
                    </MDBBtn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-card">
              <div className="custom-card">
                <div className="text-center fs-4 fw-bold card-green">
                  AAP
                </div>
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <img
                      src={logo5}
                      alt="Founder "
                      className="card-img-top rounded-circle profile"
                      style={{
                        width: "90px",
                        height: "90px",
                        objectFit: "cover",
                        borderRadius: "100%",
                      }}
                    />
                  </div>
                  <div className="card-green about-name">
                    <strong>Aam Aadmi Party</strong>
                  </div>
              
                </div>
                <div className="text-muted text-center">
                  <div className="social-icons fs-5">
                  {/* Button */}
                  <div style={{ margin: '10px' }}>
                    <MDBBtn size="sm">
                        Cast Vote
                    </MDBBtn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-card">
              <div className="custom-card">
                <div className="text-center fs-4 fw-bold card-green">
                  CPI
                </div>
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <img
                      src={logo6}
                      alt="Founder "
                      className="card-img-top rounded-circle profile"
                      style={{
                        width: "90px",
                        height: "90px",
                        objectFit: "cover",
                        borderRadius: "100%",
                      }}
                    />
                  </div>
                  <div className="card-green about-name">
                    <strong>Communist Party India</strong>
                  </div>
                 
                </div>
                <div className="text-muted text-center">
                  <div className="social-icons fs-5">
                   {/* Button */}
                   <div style={{ margin: '10px' }}>
                    <MDBBtn size="sm">
                        Cast Vote
                    </MDBBtn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
