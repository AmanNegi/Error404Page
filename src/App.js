import { useState } from "react";
import { ReactComponent as NotFound } from "./assets/sad.svg";

export default function ErrPage(props) {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        style={{
          visibility: visible ? "visible" : "hidden",
          position: "relative",
          height: "100vh",
          width: "100vw",
          backgroundImage: `url(${require("./assets/banner.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div
        style={{
          visibility: !visible ? "visible" : "hidden",
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",

          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          fontFamily: "Poppins",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "15px",
            bottom: "10px",
            margin: "0px",
          }}
        >
          <h2 style={{ margin: "0px" }}>GHW 2023 Feb</h2>
        </div>
        <NotFound style={{ height: "50%", width: "50%" }} />
        <h1 style={{ fontSize: "60px", marginBottom: "0px" }}>404</h1>
        <h2
          style={{ fontSize: "15px", marginTop: "0px", fontWeight: "normal" }}
        >
          Page Not Found
        </h2>
        <button
          onClick={() => {
            console.log("Pressed Go to Home Page!");
            setVisible(!visible);
          }}
          style={{
            padding: "10px 20px",
            backgroundColor: "#00BFA6",
            color: "white",
            border: "0px",
            borderRadius: "30px",
            fontFamily: "Poppins",
            fontWeight: "normal",
            fontSize: "20px",
          }}
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
}
