import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios";

const CustomerForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
//  const [addOk, setAddOk] = useState(false);

  const save = (e) => {
    e.preventDefault();
    console.log("Name :" + firstName + " " + lastName);
    console.log("phone : " + phone);
    console.log("email :" + email);

    axios
      .post("http://localhost:9988/services/customers", {
        firstName: firstName,
        lastName: lastName,
        phoneNo: phone,
        email: email,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.action === true) {
          alert("Customer Save Success.!")
        } else {
          alert("Fail.!")
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("Error..!.!")
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDireaction: "column",
        justifyContent: "center",
      }}
    >
     
      <Form className="mb-3">
        <Row className="mb-3">
          <Col>
            <Form.Control
              placeholder="First name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Last name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control
              placeholder="Phone Number"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control
              type="email"
              placeholder="Email Address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Button variant="primary" onClick={save} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CustomerForm;
