import React from "react";
import { Col, Row } from "react-bootstrap";

function Credits() {
  return (
    <div className={"main-content-div credits-page"}>
      <Row style={{ paddingTop: "35px" }}>
        <Col md={6} className={"offset-md-3"}>
          <h1
            className="resource-title"
            style={{
              textAlign: "center",
              fontSize: "2rem",
              letterSpacing: "0px",
              fontWeight: "800",
            }}
          >
            The archive of the arqive
          </h1>
          <div className="col-md-12 m-auto">
            <div className="card card-body resources-card">
              <h2 className="resource-title" style={{ textAlign: "center" }}>
                2019 Team
              </h2>
              <div>
                <p className="resource-contact-text">Art Director:</p>
                <p className="resource-text">Liz Sweeny</p>
              </div>
              <div>
                <p className="resource-contact-text">Art Designers:</p>
                <p className="resource-text">
                  Angie Strong, Laura Torres
                </p>
              </div>

              <p className="resource-contact-text">Faculty Advisor:</p>
              <p className="resource-text">
                John Hurley
              </p>
              <p className="resource-contact-text">Developers:</p>
              <p className="resource-text">
                Fadi Haddad, Klaudia Hernandez, Nathaniel Suarez, Tony Truong,
                Justine West
              </p>
              <p className="resource-contact-text">Public Relations Team:</p>
              <p className="resource-text">
                Andrea Estrada, Aliyah Johnson, Laytyn MacKinnon, Nicholas
                Ochoa, Pamela Sanchez, Maryah Rendon, Members of Zenith
                Experiential, Los Angeles (ZENX-LA)
              </p>
            </div>
          </div>
          <div className="col-md-12 m-auto">
            <div className="card card-body resources-card">
              <h2 className="resource-title" style={{ textAlign: "center" }}>
                2020 Team
              </h2>
              <p className="resource-contact-text">Faculty Advisor:</p>
              <p className="resource-text">
                John Hurley
              </p>
              <p className="resource-contact-text">Developers:</p>
              <p className="resource-text">
                Randy Arruda, Balarama Carter, Richard Cruz-Silva, Abram Flores,
                Carlos Larios-Solis, Khang Le, Brandon Lee, Casandra Pahed,
                Evelyn Ramirez
              </p>
              <p className="resource-contact-text">Public Relations Team:</p>
              <p className="resource-text">
                Marke Liimatainen, Ashanti McFarland, Melia Garcia, Kaxandra
                Terminel and a special thanks to Arlene Guzman!
              </p>
            </div>
          </div>
          <div className="col-md-12 m-auto">
            <div className="card card-body resources-card">
              <h2 className="resource-title" style={{ textAlign: "center" }}>
                2021 Team
              </h2>
              <p className="resource-contact-text">Faculty Advisor:</p>
              <p className="resource-text">
                John Hurley
              </p>
              <p className="resource-contact-text">Developers:</p>
              <p className="resource-text">
                Erica Santos, Leslie Segovia, Bryan Sosa, Daniel Lee, Erica
                Payne, Elio Vences, Matthew Frias, Jesus Gonzalez, Kevin
                Kazaryan, Stewart McKenzie.
              </p>
            </div>
          </div>
          <div className="col-md-12 m-auto">
            <div className="card card-body resources-card">
              <h2 className="resource-title" style={{ textAlign: "center" }}>
                2022 Team
              </h2>
              <p className="resource-contact-text">Art Designers:</p>
              <p className="resource-text">
                Dulce Villanueva
              </p>
              <p className="resource-contact-text">Faculty Advisor:</p>
              <p className="resource-text">
                John Hurley
              </p>
              <p className="resource-contact-text">Developers:</p>
              <p className="resource-text">
                Cesar Ayala, Songtao Bu, Alejandro Ceballos, Bryan Chan, Erik
                Donovan-Blood, Kennard Lim, Jorge Mata Jr, Kalvin Mateo, Misael
                Ortega, Jonathan Saldivar, Dustin Shin
              </p>
            </div>
          </div>
          <div className="col-md-12 m-auto">
            <div className="card card-body resources-card">
              <h2 className="resource-title" style={{ textAlign: "center" }}>
                2023 Team
              </h2>
              <div>
                <p className="resource-contact-text">Art Designers:</p>
                <p className="resource-text">
                  Fatima Rosales, Linda dela Torre, Diana Recinos, Giselle
                  Peredo
                </p>
              </div>
              <p className="resource-contact-text">Faculty Advisor:</p>
              <p className="resource-text">
                John Hurley
              </p>
              <p className="resource-contact-text">Lead Developer:</p>
              <p className="resource-text">
                Erik Donovan-Blood
              </p>
              <p className="resource-contact-text">Developers:</p>
              <p className="resource-text">
                Juan Alcobas, Hak Beak, Ryan Goshorn, Melissa Hernandez, Thien
                Ho, Channing Jou, Raul Martinez Sanchez, Daniel Rodas, Stephanie
                Tan
              </p>
              <p className="resource-contact-text">Public Relations Team:</p>
              <p className="resource-text">
                Jeffrey Gale, Sergio Terriquez, Edgar Soto, Paola Roa
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Credits;
