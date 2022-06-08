import React from "react";

import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
function Loginuser() {
  const navigate = useNavigate();
  return (
    <div>
      {/* <Button
        onClick={() => {
          navigate("userlogin");
        }}
      >
        Login
      </Button> */}
      <Button
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </Button>

      {/* <div>
        <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
      </div> */}

      <div className="optionoutlet">
        <Outlet />
      </div>
    </div>
  );
}

export default Loginuser;
