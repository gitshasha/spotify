import React, { useState } from "react";

import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  const [username, setusername] = useState("");
  const [useremail, setuseremail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  function postdet() {
    if (username != "" && password != "") {
      axios
        .post("http://localhost:3001/api/auth/register", {
          email: useremail,
          username: username,
          password: password,
        })
        .then((data) => {
          console.log(data);
          window.localStorage.setItem("usertoken", data.data._id);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Username"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setuseremail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </Form.Group>

        <Button
          onClick={() => {
            postdet();
          }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
