import Checkout from "./components/Checkout";
import CustomerForm from "./components/CustomerForm";
import CustomerTable from "./components/CustomerTable";

import { Container, Row, Navbar } from "react-bootstrap";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container className="mb-3">
          <Navbar.Brand href="#">
           
            Customer App
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container fluid="md mt-5" >
        <Row>
          <CustomerForm />
        </Row>
        <Row>
           <CustomerTable />
        </Row>
      </Container>
    </div>
  );
}

export default App;
