import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000";
const clientId = "db564f6b4a1e41bab7cc3e8b4df55bf7";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=db564f6b4a1e41bab7cc3e8b4df55bf7&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-top-read%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20user-read-recently-played";
// const AUTH_URL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
//   "%20"
// )}&response_type=token&show_dialog=true`;
function Login() {
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const username = window.localStorage.getItem("usertoken");
    if (username === null) {
      navigate("/home");
    }
  }, []);
  // const getToken = () => {
  //     let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
  //     let token = urlParams.get('access_token');
  // }

  useEffect(() => {
    const hash = new URLSearchParams(window.location.search).get("code");

    let token = window.localStorage.getItem("token");

    // getToken()

    if (!token && hash) {
      token = hash;
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);
  return (
    <>
      {token ? (
        <Dashboard code={token} />
      ) : (
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <a className="btn btn-success btn-lg" href={AUTH_URL}>
            Login With Spotify
          </a>
        </Container>
      )}
    </>
  );
}
export default Login;
