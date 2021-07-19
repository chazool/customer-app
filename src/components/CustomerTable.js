import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import axios from "axios";

const deleteCustomer = (id) => {
  axios
    .delete(`http://localhost:9988/services/customers/${id}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const editCustomer = () => {
  axios
    .put(`http://localhost:9988/services/customers/`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const CustomerTable = () => {
  const [customerData, setCustomerData] = useState([]);
   const [value, setValue] = useState(1);
  const [editable, setEditalble] = useState(false);

  const loadCustomer = () => {
    axios
      .get("http://localhost:9988/services/customers")
      .then(function (response) {
        // handle success
        var customers = [];
        console.log(response.data.data);
        //   customers.concat(response.data)
        //setCustomerData(response.data.data)
        //console.log('This is customer data : ' + customerData)
        customers = customers.concat(response.data.data);
        setCustomerData(customers);

        //console.log(customerData);
        //  customerData.forEach(element => console.log(element));
        //customers.forEach(element => console.log(element));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  loadCustomer();

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customerData &&
            customerData.map((customer) => (
              <tr>
                <td>{customer.id}</td>
                <td>
                  <Form.Control value={customer.firstName} />
                </td>
                <td>
                  <Form.Control value={customer.lastName} />
                </td>
                <td>
                  <Form.Control value={customer.phoneNo} />
                </td>
                <td>
                  <Form.Control value={customer.email} />
                </td>

                <td>
                  <Button variant="warning">Edit</Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteCustomer(customer.id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default CustomerTable;
