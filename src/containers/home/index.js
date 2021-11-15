import React, { useState } from 'react'
import Layout from '../../components/layout'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import './styles.css'
import CreateIcon from '@mui/icons-material/Create';
import { Alert, Form, ButtonGroup, Navbar, Modal } from 'react-bootstrap';
import { borderRadius } from '@mui/system';
import Inputform from '../../components/form/Inputform';
import Table from 'react-bootstrap/Table';
import SignaturePad from 'react-signature-pad-wrapper'
import DateTimeForm from '../../components/form/DateTimeForm'
const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = {
    patients: [
      {
        fname: "Project title 1",
        lname: "frontend development",
        username: "ddf",
        four: "Project tit",
        five: "Project tit",
        six: "Project titl",
        seven: "Project tit",
        eight: "Project tit",
        nine: "Project titl",
        ten: "dsdd"

      },
      {
        fname: "Project title 2",
        lname: "frontend development",
        username: "dfd",
        four: "Project tit",
        five: "Project tit",
        six: "Project titl",
        seven: "Project tit",
        eight: "Project tit",
        nine: "Project titl",
        ten: "dsdd"

      }
    ]
  };

  return (
    <>
      <Layout />

      <Container style={{ paddingTop: "30px" }}>
        <Card>
          <CardContent>

            <Row>

              <Col>
                <h4> eRFA and Consent</h4> <p className="emailtext">pomojiy434@bioharta.com</p>
              </Col>
            </Row>
            <Row>
              <Table striped bordered hover size="sm" responsive="sm">
                <thead className="tablehead">
                  <tr>
                    <th>Name</th>
                    <th>Patient DOB</th>
                    <th>Surgon</th>
                    <th>Sex</th>
                    <th>Patient Mobile</th>
                    <th>Provision Diagnosis</th>
                    <th>Proposed Admission Date Time</th>
                    <th>Doctor Name</th>
                    <th>Procedure Discription</th>
                    <th>Doctor Signature</th>
                    <th>Patient Signature</th>
                  </tr>
                </thead>
                <tbody>
                  {data.patients.map((data, index) => {
                    return (
                      <tr>

                        <td>{data.fname}</td>
                        <td>{data.lname}</td>
                        <td>{data.username}</td>
                        <td>{data.four}</td>
                        <td>{data.five}</td>
                        <td>{data.six}</td>
                        <td>{data.seven}</td>
                        <td>{data.eight}</td>
                        <td>{data.nine}</td>
                        <td>{data.ten}</td>
                        <td>{++index}</td>
                      </tr>
                    )
                  })
                  }

                </tbody>
              </Table>
            </Row>

          </CardContent>

        </Card>

        <Card style={{ marginTop: "5%" }}>
          <CardContent>
            <Row>

              {/* ------------------------------------------------------------------------------------------------------------------------------------------*/}
              {/* Form one */}
              <Col>
                <h4>    <CreateIcon /> eRFA and Consent info</h4>
                <Alert variant="primary">
                  Request For Admission

                </Alert>
              </Col>
            </Row>
            <Card>
              <CardContent>
                <Form>
                 
                  <Row className="mb-3">
                  
                    <Inputform name="firstname" Label="Search Patient by name " type="text" placeholder="Search by name " />
                    <Form.Group as={Col} controlId="g">
                     
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">

                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Title</Form.Label>

                      <Form.Select aria-label="Default select example">
                        <option>Select a value</option>
                        <option value="1">Mr</option>
                        <option value="2">Mrs</option>
                        <option value="3">Miss</option>
                      </Form.Select>

                    </Form.Group>

                    <Inputform name="firstname" Label="Firstname" type="text" placeholder="Enter Value" />
                    <Inputform name="surname" Label="Surname" type="text" placeholder="Enter Value" />

                  </Row>

                  <Row className="mb-3">
                    <Inputform name="Addressline1" Label="Address Line 1" type="text" placeholder="Enter Value" />
                  </Row>
                  <Row className="mb-3">
                    <Inputform name="Addressline2" Label="Address Line 2" type="text" placeholder="Enter Value" />
                  </Row>


                  <Row className="mb-3">

                    <Inputform name="subrub" Label="Subrub" type="text" placeholder="Enter Value" />
                    <Inputform name="state" Label="State" type="text" placeholder="Enter Value" />
                    <Inputform name="postcode" Label="Postcode" type="text" placeholder="Enter Value" />
                  </Row>

                  <Row className="mb-3">

                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Sex</Form.Label>
                      <Form.Check
                        inline
                        label="male"
                        name="male"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="Female"
                        name="female"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="Other"
                        name="Other"
                        type="radio"
                        id="one"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Date of Birth</Form.Label>
                      <DateTimeForm Label="Date of Birth" type="date" />
                    </Form.Group>
                    <Inputform name="email" Label="Email" type="text" placeholder="Enter Value" />

                  </Row>

                  <Row className="mb-3" style={{ paddingTop: "30px" }}>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------*/}
                    {/* Form two */}
                    <Form.Group as={Col} controlId="ddd">
                      <h4>Admission Details</h4>
                    </Form.Group>
                    <Inputform name="email" Label="Search Favourite Admission" type="text" placeholder="Enter Value" />

                    <Form.Group as={Col} controlId="btn">

                      <Button variant="outlined" onClick={handleShow}>
                        Add To My Favourite
                      </Button>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Inputform name="provisionaldiagnosis" Label="Provisional Diagnosis" type="text" placeholder="Enter Value" />
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} >Proposed Admission Date Time</Form.Label>
                      <DateTimeForm Label="Date of Birth" type="datetime" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} >Proposed Procedure Date Time</Form.Label>
                      <DateTimeForm Label="Date of Birth" type="datetime" />
                    </Form.Group>


                  </Row>

                  <Row className="mb-3">
                    <Inputform name="Estimated Length Of stay" Label="Estimated Length Of stay" type="text" placeholder="Enter Value" />

                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Type Of Admission</Form.Label>
                      <Form.Check
                        inline
                        label="Day Stay"
                        name="daystay"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="Overnight"
                        name="Overnight"
                        type="radio"
                        id="two"
                      />

                    </Form.Group>

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > HDU required Post-Op?</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="Yes"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="No"
                        type="radio"
                        id="two"
                      />

                    </Form.Group>


                    <Inputform name="Estimated Operation Hours" Label="Estimated Operation Hours" type="text" placeholder="Enter Value" />
                    <Inputform name="Estimated Operation Minutes" Label="Estimated Operation Minutes" type="text" placeholder="Enter Value" />


                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > ICU required Post-Op?</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="Yes"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="No"
                        type="radio"
                        id="two"
                      />

                    </Form.Group>

                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Type of Anaesthetic</Form.Label>
                      <Form.Check
                        inline
                        label="LA"
                        name="LA"
                        type="checkbox"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="GA"
                        name="GA"
                        type="checkbox"
                        id="two"
                      />

                    </Form.Group>
                    <Form.Group as={Col} controlId="g">
                    </Form.Group>
                  </Row>


                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Pre Admission Clinic?</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="Yes"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="No"
                        type="radio"
                        id="two"
                      />

                    </Form.Group>
                    <Form.Group as={Col} controlId="g">
                      <Alert variant="primary">
                        *If the service is provided by the hospital

                      </Alert>
                    </Form.Group>
                    <Form.Group as={Col} controlId="g">
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Referrals Required?</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="Yes"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="No"
                        type="radio"
                        id="two"
                      />

                    </Form.Group>

                    <Inputform name="plaesespecify" Label="Please Specify" type="text" placeholder="Enter Value" />
                    <Form.Group as={Col} controlId="g">
                    </Form.Group>

                  </Row>

                  <Row className="mb-3">


                    <Inputform name="specialadmininstructions" Label="Special Admission Instructions" type="text" placeholder="Enter Value" />
                    <Inputform name="pasthistory" Label="Past History" type="text" placeholder="Enter Value" />

                  </Row>
                  <Row className="mb-3">


                    <Inputform name="allergies" Label="Allergies" type="text" placeholder="Enter Value" />
                    <Inputform name="Currrntmedications" Label="Currrnt Medications" type="text" placeholder="Enter Value" />

                  </Row>

                  <Row className="mb-3">

                    <Inputform name="weight" Label="Weight(kg)" type="text" placeholder="Enter Value" />
                    <Inputform name="Height" Label="Height(cm)" type="text" placeholder="Enter Value" />
                    <Inputform name="bmi" Label="BMI" type="text" placeholder="Enter Value" />

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Does this patient require Bariatric Equipment (BMI Less than 35 or Weight les than 120kg)?</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="Yes"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="No"
                        type="radio"
                        id="two"
                      />

                    </Form.Group>



                  </Row>

                  {/* ------------------------------------------------------------------------------------------------------------------------------------------*/}
                  {/* Form three */}

                  <Row className="mb-3" style={{ paddingTop: "30px" }}>


                    <Form.Group as={Col} controlId="ddd">
                      <h4>Specific Pre-Operative Instructions</h4>
                    </Form.Group>

                    <Inputform name="Favouritepodetails" Label="Favourite Pre-operative Details" type="text" placeholder="Enter Value" />
                    <Form.Group as={Col} controlId="btn">
                      <Button variant="outlined" type="submit">
                        Add To My Favourite
                      </Button>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Anaesthetic Consultation Required?</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="Yes"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="No"
                        type="radio"
                        id="two"
                      />

                    </Form.Group>

                    <Inputform name="plaesespecify" Label="Please Specify" type="text" placeholder="Enter Value" />
                    <Form.Group as={Col} controlId="g">
                    </Form.Group>

                  </Row>


                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Pre Admission Assessment</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="Yes"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="No"
                        type="radio"
                        id="two"
                      />
                    </Form.Group>

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Pathology Tests Required</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="Yes"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="No"
                        type="radio"
                        id="two"
                      />

                    </Form.Group>

                    <Inputform name="plaesespecify" Label="Please Specify" type="text" placeholder="Enter Value" />
                    <Form.Group as={Col} controlId="g">
                    </Form.Group>

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Investigations Required</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="Yes"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="No"
                        type="radio"
                        id="two"
                      />

                    </Form.Group>

                    <Inputform name="plaesespecify" Label="Please Specify" type="text" placeholder="Enter Value" />
                    <Form.Group as={Col} controlId="g">
                    </Form.Group>

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Operation theatre advised (If "add on" or "urgent case")</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="Yes"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="No"
                        type="radio"
                        id="two"
                      />

                    </Form.Group>

                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} >Adviced date/ Time</Form.Label>
                      <DateTimeForm Label="Date of Birth" type="datetime" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="g">
                    </Form.Group>

                  </Row>

                  <Row className="mb-3">

                    <Inputform name="plaesespecify" Label="Drug Orders On Admission (If possible please attavh drug chart or detail below)" type="text" placeholder="Enter Value" />
                    <Form.Group as={Col} controlId="g">
                    </Form.Group>

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Specific Equipment required?</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="Yes"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="No"
                        type="radio"
                        id="two"
                      />

                    </Form.Group>

                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Medical practitioner Signature</Form.Label>
                      <div className="sign">    <SignaturePad options={{ minWidth: 5, maxWidth: 5, penColor: 'rgb(66, 133, 244)' }} /></div>


                    </Form.Group>


                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} >Proposed Procedure Date Time</Form.Label>
                      <DateTimeForm Label="Date of Birth" type="datetime" />
                    </Form.Group>
                  </Row>


                  {/* ------------------------------------------------------------------------------------------------------------------------------------------*/}
                  {/* Form 4 */}
                  <Row className="mb-3" style={{ paddingTop: "30px" }}>

                    <Form.Group as={Col} controlId="ddd">
                      <h4>Consent For Medical And/ Or Surgical Treatment</h4>
                      <p>PART A: PROVISION OF INFORMATION TO PATIENT (To be completed by Medical Practitioner)</p>
                      <p>I,Doctor</p>

                    </Form.Group>


                  </Row>
                  <Row className="mb-3" >

                    <Inputform name="docname" type="text" placeholder="Enter value" />
                    <p>Have disscussed with</p>

                    <p>the nature of his / her present condition, the various ways of treating the patient's present condition and have explained the nature, purpose, likely results and the material risks of the following recommended procedure / treatment(s)</p>

                    <Form.Group as={Col} controlId="g">
                    </Form.Group>

                  </Row>
                  <Row className="mb-3" >

                    <Inputform name="Provisionaldiagnosis" Label="Provisional Diagnosis" type="text" placeholder="Enter value" />

                  </Row>
                  <Row className="mb-3" >

                    <Inputform name="mbsitemnumbers" Label="MBS item numbers" type="text" placeholder="Enter value" />

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Check
                        inline
                        label="Left Side"
                        name="left"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="Right Side"
                        name="right"
                        type="radio"
                        id="two"
                      />
                      <Form.Check
                        inline
                        label="Not Applicable"
                        name="not"
                        type="radio"
                        id="two"
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Inputform name="Provisionaldiagnosis" Label="Special Instructions" type="text" placeholder="Enter value" />
                  </Row>
                  <Row className="mb-3" >
                    <Inputform name="mbsitemnumbers" Label="Medical Practitioner Name" type="text" placeholder="Enter value" />
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Medical practitioner Signature</Form.Label>
                      <div className="sign">    <SignaturePad options={{ minWidth: 5, maxWidth: 5, penColor: 'rgb(66, 133, 244)' }} /></div>


                    </Form.Group>


                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} >Proposed Procedure Date Time</Form.Label>
                      <DateTimeForm Label="Date of Birth" type="datetime" />
                    </Form.Group>

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} >Interpreter required?</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="left"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="right"
                        type="radio"
                        id="two"
                      />

                    </Form.Group>
                  </Row>

                  <Row className="mb-3" >

                    <p>PART B: PATIENT CONSENT (To be completed by patient) Patient or subsitute decision maker if patient lacks capacity</p>
                    <p>The doctor whose name appears in Part A above and I have discussed my/patient's present condition and the various alternative ways in which it might be treated, including the above procedure or treatment. The doctor has told me that: </p>

                    <Form.Group as={Col} controlId="g">
                      <ul>
                        <li>The procedure/treatment carries some risks and that complications may occur and has provided details of those potential risks and complications.</li>
                        <li>The administration of an anaesthetic, medicines and/or blood transfusions may be needed in association with this admission/procedure treatment(s) and that these carry risks.</li>
                        <li>Additional procedures or treatments may be required in an emergency or if something unexpected is found requiring immediate management, and I agree to these additional procedures/treatments being carried out in these circumstances provided that they are related to the primary procedure set out in Part A.</li>
                        <li>The procedure/treatment may not give the expected result even though the procedure/treatment is carried out with all due professional care. <p>I acknowledge that:</p></li>
                        <li>I have been given the opportunity to ask questions of the doctor whose name appears in Part A and I understand the explanation that the doctor gave me as to the need, benefits, risks and complications related to this procedure/treatment(s). </li>
                        <li>I have been advised of the material risks associated with this procedure/treatment(s) and the risks and benefits of any alternative treatments / procedures, including having no treatment.</li>
                        <li>I have had an opportunity to ask questions and these have been answered in a way I understand by the doctor above. I am satisfied with the answers and the explanations to my questions.</li>
                        <li>I understand that I have privately engaged my doctor and that my doctor is not an employee of the hospital.</li>
                        <li>I understand that I may withdraw my consent at any time before the procedure/treatment(s).</li>
                        <li>I acknowledge that the procedure/treatment may involve the removal of some body tissue which may be required for the diagnosis and management of my / patient's condition. I understand the tissue being removed is for the purposes of diagnosis or management of my / patient's condition. I understand that consent only extends to tissue, which is removed for tha purposes of the above procedure recorded in Part A. </li>
                        <li>If a staff member is exposed to my blood or other bodily fluids, I consent to a sample of blood being collected and tested for infectious diseases. I understand that I will be informed if the sample is tested, and that I will be given the results of the tests.</li>
                      </ul>
                    </Form.Group>

                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} >Do you consent to a blood transfusion if needed?</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="left"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="right"
                        type="radio"
                        id="two"
                      />

                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Signature of Patient/Parent/Guardian</Form.Label>
                      <div className="sign">    <SignaturePad options={{ minWidth: 5, maxWidth: 5, penColor: 'rgb(66, 133, 244)' }} /></div>


                    </Form.Group>


                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} >Proposed Procedure Date Time</Form.Label>
                      <DateTimeForm Label="Date of Birth" type="datetime" />
                    </Form.Group>

                  </Row>


                  <Button variant="contained" type="submit">
                    Save
                  </Button>
                </Form>



              </CardContent>

            </Card>



          </CardContent>

        </Card>





        <Modal show={show} size="lg" onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Testing Model</Modal.Title>
          </Modal.Header>
          <Modal.Body> <Row className="mb-3">
                    <Inputform name="provisionaldiagnosis" Label="Provisional Diagnosis" type="text" placeholder="Enter Value" />
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} >Proposed Admission Date Time</Form.Label>
                      <DateTimeForm Label="Date of Birth" type="datetime" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} >Proposed Procedure Date Time</Form.Label>
                      <DateTimeForm Label="Date of Birth" type="datetime" />
                    </Form.Group>


                  </Row>

                  <Row className="mb-3">
                    <Inputform name="Estimated Length Of stay" Label="Estimated Length Of stay" type="text" placeholder="Enter Value" />

                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Type Of Admission</Form.Label>
                      <Form.Check
                        inline
                        label="Day Stay"
                        name="daystay"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="Overnight"
                        name="Overnight"
                        type="radio"
                        id="two"
                      />

                    </Form.Group>

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > HDU required Post-Op?</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="Yes"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="No"
                        type="radio"
                        id="two"
                      />

                    </Form.Group>


                    <Inputform name="Estimated Operation Hours" Label="Estimated Operation Hours" type="text" placeholder="Enter Value" />
                    <Inputform name="Estimated Operation Minutes" Label="Estimated Operation Minutes" type="text" placeholder="Enter Value" />


                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > ICU required Post-Op?</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="Yes"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="No"
                        type="radio"
                        id="two"
                      />

                    </Form.Group>

                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Type of Anaesthetic</Form.Label>
                      <Form.Check
                        inline
                        label="LA"
                        name="LA"
                        type="checkbox"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="GA"
                        name="GA"
                        type="checkbox"
                        id="two"
                      />

                    </Form.Group>
                    <Form.Group as={Col} controlId="g">
                    </Form.Group>
                  </Row>


                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Pre Admission Clinic?</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="Yes"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="No"
                        type="radio"
                        id="two"
                      />

                    </Form.Group>
                    <Form.Group as={Col} controlId="g">
                      <Alert variant="primary">
                        *If the service is provided by the hospital

                      </Alert>
                    </Form.Group>
                    <Form.Group as={Col} controlId="g">
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Referrals Required?</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="Yes"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="No"
                        type="radio"
                        id="two"
                      />

                    </Form.Group>

                    <Inputform name="plaesespecify" Label="Please Specify" type="text" placeholder="Enter Value" />
                    <Form.Group as={Col} controlId="g">
                    </Form.Group>

                  </Row>

                  <Row className="mb-3">


                    <Inputform name="specialadmininstructions" Label="Special Admission Instructions" type="text" placeholder="Enter Value" />
                    <Inputform name="pasthistory" Label="Past History" type="text" placeholder="Enter Value" />

                  </Row>
                  <Row className="mb-3">


                    <Inputform name="allergies" Label="Allergies" type="text" placeholder="Enter Value" />
                    <Inputform name="Currrntmedications" Label="Currrnt Medications" type="text" placeholder="Enter Value" />

                  </Row>

                  <Row className="mb-3">

                    <Inputform name="weight" Label="Weight(kg)" type="text" placeholder="Enter Value" />
                    <Inputform name="Height" Label="Height(cm)" type="text" placeholder="Enter Value" />
                    <Inputform name="bmi" Label="BMI" type="text" placeholder="Enter Value" />

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Does this patient require Bariatric Equipment (BMI Less than 35 or Weight les than 120kg)?</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="Yes"
                        type="radio"
                        id="one"
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="No"
                        type="radio"
                        id="two"
                      />

                    </Form.Group>



                  </Row></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container >


    </>
  )
}

export default Home
