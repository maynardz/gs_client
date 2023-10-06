import React from "react";
import "./BecomeAPatient.scss";
import Appbar from "../../Appbar/Appbar";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import tag_icon from "../../../../assets/GreeneStreet_Icon_Accessories2_RGB_White.png";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const BecomeAPatient = (props) => {
  return (
    <div>
      <Appbar colorMode={props.colorMode} theme={props.theme} />
      <div className="header">
        <div style={{ position: "absolute", top: 100, left: 30 }}>
          <ArrowBackIosIcon
            style={{ color: "#425030", fontSize: "30px" }}
            onClick={() => window.history.back()}
          />
        </div>
        <h1>Become a Patient</h1>
      </div>
      <br />
      <br />
      <br />
      <div className="schedule-info">
        <Card sx={{ maxWidth: 750, marginBottom: "2em" }}>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "domainLight" }}
              >
                Schedule an Appointment
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p style={{ fontFamily: "untitledSans_regular" }}>
                  For information regarding appointment availability at our
                  weekly certification events contact <a href="tel:304-306-0679" style={{textDecoration: 'none', color: '#425030'}}>304-306-0679</a> or email <a href="mailto:bri.moore@dreamgreene.com" style={{textDecoration: 'none', color: '#425030'}}>bri.moore@dreamgreene.com</a>.
                </p>
                <p style={{ fontFamily: "untitledSans_regular" }}>
                  To get your certification at home visit{" "}
                  <a href="https://www.nuggmd.com/" style={{textDecoration: 'none', color: '#425030'}}>NuggMD</a> or
                  <a href="https://greenhealthdocs.com/" style={{textDecoration: 'none', color: '#425030'}}>GreenHealthDocs</a> to
                  schedule an appointment. Use our discount codes below to
                  receive a discount on your appointment:
                </p>
                <div
                  style={{
                    backgroundColor: "#425030",
                    borderRadius: "25px",
                    padding: "2em",
                    width: "80%",
                    margin: "0 auto",
                    marginTop: "1em",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={tag_icon}
                      style={{ height: "75px", width: "auto" }}
                    />
                  </div>
                  <p style={{ textAlign: "center", color: "white" }}>
                    <span style={{ color: "#ffff78" }}>
                      <b>grst20 </b>
                    </span>
                    - NuggMD
                  </p>
                  <p style={{ textAlign: "center", color: "white" }}>
                    <span style={{ color: "#ffff78" }}>
                      <b>gstreet50 </b>
                    </span>
                    - GreenHealthDocs
                  </p>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 750, marginBottom: "2em" }}>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "domainLight" }}
              >
                After Approval
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p style={{ fontFamily: "untitledSans_regular" }}>
                  After approval from a doctor, register with the state using{" "}
                  <a href="https://wv-public.mycomplia.com/#!/signin" style={{textDecoration: 'none', color: '#425030'}}>
                    MyComplia
                  </a>
                  . There you will create an application and provide all
                  necessary information. Relevant documents you may need are a
                  driver’s license or state ID, proof of residency, and a
                  passport style photo of yourself.
                </p>
                <p style={{ fontFamily: "untitledSans_regular" }}>
                  West Virginia requires a state application fee of $50 received
                  through check or money order. Individuals may apply for a
                  financial hardship waiver with proof of the financial
                  hardship.
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 750 }}>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "domainLight" }}
              >
                Wait Time
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p style={{ fontFamily: "untitledSans_regular" }}>
                  The West Virginia Office of Medical Cannabis must approve your
                  state application before you receive a medical cannabis card.
                  The estimated wait time for a medical cannabis card can be up
                  to 30 days and will be digitally uploaded to your MyComplia
                  account.
                </p>
                <p style={{ fontFamily: "untitledSans_regular" }}>
                  For further questions on obtaining a medical cannabis card,
                  visit <a href="https://omc.wv.gov/Pages/default.aspx" style={{textDecoration: 'none', color: '#425030'}}>omc.wv.gov</a> or contact their office at <a href="tel:304-356-5090" style={{textDecoration: 'none', color: '#425030'}}>304-356-5090</a>.
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className="patientSignup-info-container"></div>
    </div>
  );
};

export default BecomeAPatient;
