import React from 'react'
import Layout from '../../components/layout'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
 

import { Alert, Form, ButtonGroup, Navbar } from 'react-bootstrap';
import { borderRadius } from '@mui/system';


const Form = () => {


  return (
    <>
      <Layout />

      <Container style={{ paddingTop: "20px" }}>
        <Card>
          <CardContent>
            <Row>


              <Col>
                <h4> Form Details</h4>  <Alert variant="primary">
                  Personal Details!
                </Alert>
              </Col>
            </Row>
            <Row>
              <Row className="justify-content-md-center">
                <Form>
                  <Form.Group as={Row} className="mb-3 justify-content-md-center" controlId="formPlaintextEmail">
                    <Form.Label column sm="3">
                      Title:
                    </Form.Label>
                    <Col sm="7">
                      <Form.Select aria-label="Default select example">
                        <option>Select a value</option>
                        <option value="1">Mr</option>
                        <option value="2">Mrs</option>
                        <option value="3">Miss</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3 justify-content-md-center" controlId="formPlaintextEmail">
                    <Form.Label column sm="3">
                      First name:

                    </Form.Label>
                    <Col sm="7">
                      <Form.Control required type="text" placeholder="  Please provide details" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3 justify-content-md-center" controlId="formPlaintextEmail">
                    <Form.Label column sm="3">
                      Surname:
                    </Form.Label>
                    <Col sm="7">
                      <Form.Control type="text" placeholder="Please provide details" />

                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3 justify-content-md-center" controlId="formPlaintextEmail">
                    <Form.Label column sm="3">
                      Preferred name:

                    </Form.Label>
                    <Col sm="7">
                      <Form.Control type="text" placeholder="Please provide details" />

                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3 justify-content-md-center" controlId="formPlaintextEmail">
                    <Form.Label column sm="3">
                      Date of birth:

                    </Form.Label>
                    <Col sm="2">
                      <Form.Select aria-label="Default select example">
                        <option>Date</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </Form.Select>

                    </Col>
                    <Col sm="2">
                      <Form.Select aria-label="Default select example">
                        <option>Month</option>
                        <option value="1">JAN</option>
                        <option value="2">FEB</option>
                        <option value="3">MAR</option>
                        <option value="4">APR</option>
                      </Form.Select>


                    </Col>
                    <Col sm="3">
                      <Form.Select aria-label="Default select example">
                        <option>Year</option>
                        <option value="1">2021</option>
                        <option value="2">2020</option>
                        <option value="3">2019</option>
                        <option value="4">2018</option>
                        <option value="4">2017</option>
                      </Form.Select>

                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3 justify-content-md-center" controlId="formPlaintextEmail">
                    <Form.Label column sm="3">
                      Gender:

                    </Form.Label>
                    <Col sm="7">

                    <div  style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Button style={{ background: "#3c76d2" ,color:'white',width:'100%',borderRadius:'10px 0px 0px 10px'}}>Male</Button>
                        <Button  style={{ background: "#e2e2e2" ,width:'100%'}}>Female</Button>
                        <Button style={{ background: "#e2e2e2" ,width:'100%',borderRadius:'0px 10px 10px 0px'}}>Other</Button>

                      </div>


                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3 justify-content-md-center" controlId="formPlaintextEmail">
                    <Form.Label column sm="3">
                      Address:

                    </Form.Label>
                    <Col sm="7">
                      <Form.Control type="text" placeholder="Etner your address here" />

                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3 justify-content-md-center" controlId="formPlaintextEmail">
                    <Form.Label column sm="3">
                      Mobile number:

                    </Form.Label>
                    <Col sm="7">
                      <Form.Control type="text" placeholder="XX XXX XXX" />

                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3 justify-content-md-center" controlId="formPlaintextEmail">
                    <Form.Label column sm="3">
                      Phone number (H):

                    </Form.Label>
                    <Col sm="7">
                      <Form.Control type="text" placeholder="XX XXX XXX" />

                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3 justify-content-md-center" controlId="formPlaintextEmail">
                    <Form.Label column sm="3">
                      Phone number(W):

                    </Form.Label>
                    <Col sm="7">
                      <Form.Control type="text" placeholder="XX XXX XXX" />

                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3 justify-content-md-center" controlId="formPlaintextEmail">
                    <Form.Label column sm="3">
                      E-mail

                    </Form.Label>
                    <Col sm="7">
                      <Form.Control type="text" placeholder="myname@example.com" />

                    </Col>
                  </Form.Group>
                </Form>
              </Row>
            </Row>



          </CardContent>

        </Card>


      </Container>
      <Navbar fixed="bottom" expand="lg" variant="light" bg="light">
        <Container>
          <Button variant="contained" startIcon={<SaveIcon />}>Save</Button>
          <Button variant="contained" startIcon={<SaveIcon />}>Next</Button>
           
        </Container>
      </Navbar>

    </>
  )
}

export default Form
