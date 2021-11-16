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
import { fabClasses } from '@mui/material';
const Home = () => {
  const [show, setShow] = useState(false);
  const [nama,setNama] = useState("pasan");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // newly created states form one 1
  const[sex,setSex] = useState("");
  const[birthdate,setBirthdate]= useState(new Date());

  // newly created states form two 2 Admission Details
  const[proposed_Admission_DateTime,setProposed_Admission_DateTime]= useState(new Date());
  const[proposed_Procedure_DateTime,setProposed_Procedure_DateTime]= useState(new Date());
  const[type_Of_Admission,setType_Of_Admission]= useState("");
  const[postOp_HDU_Required,setPostOp_HDU_Required]= useState(false);
  const[postOp_ICU_Required,setPostOp_ICU_Required]=useState(true);
  const[pre_Admission_Clinic_Required,setPre_Admission_Clinic_Required]=useState(false);
  const[referrals_Required,setReferrals_Required]=useState(false);
  const[patient_BariatricEquipmentRequired,setPatient_BariatricEquipmentRequired]=useState(false);
  
  // newly created states form three 3  Specific pre operative instructions

  const[anaesthetic_Consultation_Required,setAnaesthetic_Consultation_Required]=useState(false);
  const[preadmission_assessment_Required,setPreadmission_assessment_Required]=useState(false);
  const[pathology_tests_Required,setPathology_tests_Required]=useState(false);
  const[investigations_Required,setInvestigations_Required]=useState(false);
  const[operating_theatre_advised_Reauired,setOperating_theatre_advised_Reauired]=useState(false);
  const[operating_theatre_advised_DateTime,setOperating_theatre_advised_DateTime]= useState(new Date());
  const[specific_equipment_required,setSpecific_equipment_required]= useState(false);
  const[mP_Sign_dateTime,setMP_Sign_dateTime]= useState(new Date());

  
  // form 4
  const[laterality,setLaterality]= useState("");
  const[mP_Signature_DateTime,setMP_Signature_DateTime]= useState(new Date());
  const[interpreter_Required,setInterpreter_Required]= useState(false);
  const[consent_To_Blood_Transfusion,setConsent_To_Blood_Transfusion]= useState(false);
  const[patient_Sign_DateTime,setPatient_Sign_DateTime]= useState(new Date());

  
  
  
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


  const [postdata, setpostdata] = useState({
    rfa_id: "",
    doctor_id: "",
    patient_id: "",
    patient_Surname: "",
    patient_GivenName: "",
    patient_Title: "",
    patient_DOB: new Date(),
    patient_Sex: "",
    patient_Address_Line_1: "",
    patient_Address_Line_2: "",
    patient_Suburb: "",
    patient_Postcode: "",
    patient_State: "",
    patient_Phone_Home: "",
    patient_Phone_Mobile: "",
    patient_Phone_Bussines: "",
    patient_Email: "",
    provisional_Diagnosis: "",
    proposed_Admission_DateTime: new Date(),
    proposed_Procedure_DateTime: new Date(),
    estimated_Days_of_Stay: "",
    type_Of_Admission: "",
    estimated_Operating_Hours: "",
    estimated_Operating_Minutes: "",
    postOp_HDU_Required: true,
    postOp_ICU_Required: true,
    anaesthesia_Type: "",
    pre_Admission_Clinic_Required: true,
    referrals_Required: true,
    referrals_Details: "",
    special_Admission_Instructions: "",
    patients_Past_History: "",
    patients_Allergies: "",
    patients_Current_Medications: "",
    patient_Weight: "",
    patient_Height: "",
    patient_BMI: "",
    patient_BariatricEquipmentRequired: true,
    anaesthetic_Consultation_Required: true,
    anaesthetic_Consultation_Details: "",
    preadmission_assessment_Required: true,
    preadmission_assessment_Details: "",
    pathology_tests_Required: true,
    pathology_tests_Details: "",
    investigations_Required: true,
    investigations_Details: "",
    operating_theatre_advised_Reauired: true,
    operating_theatre_advised_DateTime:  new Date(),
    drug_Orders_on_Admission: "string",
    specific_equipment_required: true,
    specific_equipment_Details: "",
    mP_Sign: "",
    mP_Sign_dateTime: new Date(),
    doctor_Name: "",
    agreed_Procedure_Description: "",
    mbS_Item_Numbers: "",
    laterality: "",
    specific_Instructions: "",
    mP_Name: "",
    mP_Signature: "",
    mP_Signature_DateTime: new Date(),
    interpreter_Required:true,
    interpreter_Language: "",
    interpreter_Name: "",
    interpreter_Sign: "",
    interpreter_Sign_DateTime: new Date(),
    consent_To_Blood_Transfusion: true,
    patient_Sign: "",
    patient_Sign_DateTime: new Date()
  
  })

  const onChange=(name)=>(e)=>{
      setpostdata({...postdata,[name]:e.target.value})
  }

  const submitform = () => {

  console.log(postdata);
  console.log(sex);
  console.log(birthdate);
  console.log(proposed_Admission_DateTime);
  console.log(proposed_Procedure_DateTime);
  console.log(type_Of_Admission);
  console.log(postOp_HDU_Required);
  console.log(postOp_ICU_Required);
  console.log(pre_Admission_Clinic_Required);
  console.log(referrals_Required);
  console.log(patient_BariatricEquipmentRequired);
  console.log(anaesthetic_Consultation_Required);
  console.log(preadmission_assessment_Required);
  console.log(pathology_tests_Required);
  console.log(investigations_Required);
  console.log(operating_theatre_advised_Reauired);
  console.log(operating_theatre_advised_DateTime);
  console.log(specific_equipment_required);
  console.log(mP_Sign_dateTime);
  

  } 

  
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

                      <Form.Select aria-label="Default select example" value={postdata.patient_Title} onChange={onChange("patient_Title")}>
                        <option>Select a value</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                      </Form.Select>

                    </Form.Group>

                    <Inputform name="patient_GivenName" Label="Firstname" type="text"  placeholder="Enter Value" value={postdata.patient_GivenName} onChange={onChange("patient_GivenName")}/>
                    <Inputform name="patient_Surname" Label="Surname" type="text" placeholder="Enter Value" value={postdata.patient_Surname} onChange={onChange("patient_Surname")}  />

                  </Row>

                  <Row className="mb-3">
                    <Inputform name="patient_Address_Line_1" Label="Address Line 1" type="text" placeholder="Enter Value" value={postdata.patient_Address_Line_1} onChange={onChange("patient_Address_Line_1")}/>
                  </Row>
                  <Row className="mb-3">
                    <Inputform name="patient_Address_Line_2" Label="Address Line 2" type="text" placeholder="Enter Value" value={postdata.patient_Address_Line_2} onChange={onChange("patient_Address_Line_2")} />
                  </Row>


                  <Row className="mb-3">

                    <Inputform name="patient_Suburb" Label="Subrub" type="text" placeholder="Enter Value" value={postdata.patient_Suburb} onChange={onChange("patient_Suburb")}/>
                    <Inputform name="patient_State" Label="State" type="text" placeholder="Enter Value" value={postdata.patient_State} onChange={onChange("patient_State")}/>
                    <Inputform name="patient_Postcode" Label="Postcode" type="text" placeholder="Enter Value" value={postdata.patient_Postcode} onChange={onChange("patient_Postcode")} />
                  </Row>

                  <Row className="mb-3">

                    <Form.Group as={Col} controlId="g"   >
                      <Form.Label as={Col} > Sex</Form.Label>
                      <Form.Check
                        inline
                        label="male"
                        name="inputgender"
                        value="male"
                        type="radio"
                        id="a"
                        onChange={(e) =>{ setSex(e.target.value)}}
                      />
                      <Form.Check
                        inline
                        label="Female"
                        name="inputgender"
                        value="female"
                        type="radio"
                        id="a"
                        onChange={(e) =>{ setSex(e.target.value)}}
                      />
                      <Form.Check
                        inline
                        label="Other"
                        name="inputgender"
                        value="other"
                        type="radio"
                        id="three"
                        onChange={(e) =>{ setSex(e.target.value)}}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Date of Birth</Form.Label>
                      <DateTimeForm Label="Date of Birth" type="date" name="birthdate" value={setBirthdate} />
                    </Form.Group>
                    <Inputform name="email" Label="Email" type="text" placeholder="Enter Value" value={postdata.patient_Email} onChange={onChange("patient_Email")} />

                  </Row>

                  <Row className="mb-3" style={{ paddingTop: "30px" }}>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------*/}
                    {/* Form two */}
                    <Form.Group as={Col} controlId="ddd">
                      <h4>Admission Details</h4>
                    </Form.Group>
                    <Inputform name="patient_Email" Label="Search Favourite Admission" type="text" placeholder="Enter Value"  />

                    <Form.Group as={Col} controlId="btn">

                      <Button variant="outlined" onClick={handleShow}>
                        Add To My Favourite
                      </Button>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Inputform name="provisionaldiagnosis" Label="Provisional Diagnosis" type="text" placeholder="Enter Value" value={postdata.patient_Email} onChange={onChange("patient_Email")}  />
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} >Proposed Admission Date Time</Form.Label>
                      <DateTimeForm Label="Date of Birth" type="datetime"  name="proposed_Admission_DateTime" value={setProposed_Admission_DateTime}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} >Proposed Procedure Date Time</Form.Label>
                      <DateTimeForm Label="Date of Birth" type="datetime" name="proposed_Procedure_DateTime" value={setProposed_Procedure_DateTime} />
                    </Form.Group>


                  </Row>

                  <Row className="mb-3">
                    <Inputform name="estimated_Days_of_Stay" Label="Estimated Length Of stay" type="text" placeholder="Enter Value" value={postdata.estimated_Days_of_Stay} onChange={onChange("estimated_Days_of_Stay")}/>

                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Type Of Admission</Form.Label>
                      <Form.Check
                        inline
                        label="Day Stay"
                        name="type_Of_Admission"
                        type="radio"
                        id="one"
                        value="DayStay"
                        onChange={(e) =>{ setType_Of_Admission(e.target.value)}}
                      />
                      <Form.Check
                        inline
                        label="Overnight"
                        name="type_Of_Admission"
                        type="radio"
                        value="Overnight"
                        id="two"
                        onChange={(e) =>{ setType_Of_Admission(e.target.value)}}
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
                        value="true"
                        onChange={(e) =>{setPostOp_HDU_Required(true)}}
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="No"
                        type="radio"
                        id="two"
                        value="false"
                        onChange={(e) =>{setPostOp_HDU_Required(false)}}
                      />
                    </Form.Group>

                    <Inputform name="estimated_Operating_Hours" Label="Estimated Operation Hours" type="text" placeholder="Enter Value" value={postdata.estimated_Operating_Hours} onChange={onChange("estimated_Operating_Hours")} />
                    <Inputform name="estimated_Operating_Minutes" Label="Estimated Operation Minutes" type="text" placeholder="Enter Value" value={postdata.estimated_Operating_Minutes} onChange={onChange("estimated_Operating_Minutes")}/>


                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > ICU required Post-Op?</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="icu"
                        type="radio"
                        id="one"
                        value="true"
                        onChange={(e) =>{postOp_ICU_Required(true)}}                       
                      />

                      <Form.Check
                        inline
                        label="No"
                        name="icu"
                        type="radio"
                        id="two"
                        value="false"
                        onChange={(e) =>{setPostOp_ICU_Required(false)}}
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
                        name="pre_Admission_Clinic_Required"
                        type="radio"
                        id="one"
                        value="true"
                        onChange={(e) =>{setPre_Admission_Clinic_Required(true)}}   
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="pre_Admission_Clinic_Required"
                        type="radio"
                        id="two"
                        value="false"
                        onChange={(e) =>{setPre_Admission_Clinic_Required(false)}}   
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
                        name="Referrals_Required"
                        type="radio"
                        id="one"
                        value="true"
                        onChange={(e) =>{setReferrals_Required(true)}}   
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="Referrals_Required"
                        type="radio"
                        id="two"
                        value="false"
                        onChange={(e) =>{setReferrals_Required(false)}}   
                      />

                    </Form.Group>
                    
              { referrals_Required?  <Inputform name="plaesespecify" Label="Please Specify" type="text" placeholder="Enter Value"
               value={postdata.referrals_Details} onChange={onChange("referrals_Details")}
              /> : "" }
                                     
                        <Form.Group as={Col} controlId="g">
                              </Form.Group>
             
                  </Row>

                  <Row className="mb-3">

                  
                    <Inputform name="specialadmininstructions" Label="Special Admission Instructions" type="text" placeholder="Enter Value"  value={postdata.special_Admission_Instructions} onChange={onChange("special_Admission_Instructions")}/>
                    <Inputform name="pasthistory" Label="Past History" type="text" placeholder="Enter Value"  value={postdata.patients_Past_History} onChange={onChange("patients_Past_History")} />

                  </Row>
                  <Row className="mb-3">


                    <Inputform name="allergies" Label="Allergies" type="text" placeholder="Enter Value" value={postdata.patients_Allergies} onChange={onChange("patients_Allergies")} />
                    <Inputform name="Currrntmedications" Label="Currrnt Medications" type="text" placeholder="Enter Value" value={postdata.patients_Current_Medications} onChange={onChange("patients_Current_Medications")} />

                  </Row>

                  <Row className="mb-3">

                    <Inputform name="weight" Label="Weight(kg)" type="text" placeholder="Enter Value" value={postdata.patient_Weight} onChange={onChange("patient_Weight")} />
                    <Inputform name="Height" Label="Height(cm)" type="text" placeholder="Enter Value" value={postdata.patient_Height} onChange={onChange("patient_Height")} />
                    <Inputform name="bmi" Label="BMI" type="text" placeholder="Enter Value" value={postdata.patient_BMI} onChange={onChange("patient_BMI")} />

                  </Row>
                  
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Does this patient require Bariatric Equipment (BMI Less than 35 or Weight les than 120kg)?</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="patient_BariatricEquipmentRequired"
                        type="radio"
                        id="one"
                        value="true"
                        onChange={(e) =>{setPatient_BariatricEquipmentRequired(true)}}   
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="patient_BariatricEquipmentRequired"
                        type="radio"
                        id="two"
                        value="false"
                        onChange={(e) =>{setPatient_BariatricEquipmentRequired(false)}}   
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
                        name="anaesthetic_Consultation_Required"
                        type="radio"
                        id="one"
                        value="true"
                        onChange={(e) =>{setAnaesthetic_Consultation_Required(true)}}   
                        
                      />

                      <Form.Check
                        inline
                        label="No"
                        name="anaesthetic_Consultation_Required"
                        type="radio"
                        id="two"
                        value="false"
                        onChange={(e) =>{setAnaesthetic_Consultation_Required(false)}}   
                      />

                    </Form.Group>

           
                    { anaesthetic_Consultation_Required?  <Inputform name="plaesespecify" Label="Please Specify" type="text" placeholder="Enter Value"
               value={postdata.anaesthetic_Consultation_Details} onChange={onChange("anaesthetic_Consultation_Details")}
              /> : "" }
                    
                    <Form.Group as={Col} controlId="g">
                    </Form.Group>

                  </Row>


                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Pre Admission Assessment</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="preadmission_assessment_Required"
                        type="radio"
                        id="one"
                        value="true"
                        onChange={(e) =>{setPreadmission_assessment_Required(true)}}  
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="preadmission_assessment_Required"
                        type="radio"
                        id="two"
                        value="false"
                        onChange={(e) =>{setPreadmission_assessment_Required(false)}}  
                      />
                    </Form.Group>

                    { preadmission_assessment_Required?  <Inputform name="preadmission_assessment_Details" Label="Please Specify" type="text" placeholder="Enter Value"
               value={postdata.preadmission_assessment_Details} onChange={onChange("preadmission_assessment_Details")}
              /> : "" }
                    
                    <Form.Group as={Col} controlId="g">
                    </Form.Group>

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Pathology Tests Required</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="pathology_tests_Required"
                        type="radio"
                        id="one"
                        value="true"
                        onChange={(e) =>{setPathology_tests_Required(true)}}  
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="pathology_tests_Required"
                        type="radio"
                        id="two"
                        value="false"
                        onChange={(e) =>{setPathology_tests_Required(false)}}  
                      />

                    </Form.Group>

                    { pathology_tests_Required?  <Inputform name="pathology_tests_Details" Label="Please Specify" type="text" placeholder="Enter Value"
               value={postdata.pathology_tests_Details} onChange={onChange("pathology_tests_Details")}
              /> : "" }
                      
                    <Form.Group as={Col} controlId="g">
                    </Form.Group>

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Investigations Required</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="investigations_Required"
                        type="radio"
                        id="one"
                        value="true"
                        onChange={(e) =>{setInvestigations_Required(true)}} 
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="investigations_Required"
                        type="radio"
                        id="two"
                        value="true"
                        onChange={(e) =>{setInvestigations_Required(false)}} 
                      />

                    </Form.Group>

                    
                    { investigations_Required?   <Inputform name="investigations_Details" Label="Please Specify" type="text" placeholder="Enter Value" 
               value={postdata.investigations_Details} onChange={onChange("investigations_Details")}
              /> : "" }

                   
                    <Form.Group as={Col} controlId="g">
                    </Form.Group>

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Operation theatre advised (If "add on" or "urgent case")</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="operating_theatre_advised_Reauired"
                        type="radio"
                        id="one"
                        value="true"
                        onChange={(e) =>{setOperating_theatre_advised_Reauired(true)}} 
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="operating_theatre_advised_Reauired"
                        type="radio"
                        id="two"
                        value="true"
                        onChange={(e) =>{setOperating_theatre_advised_Reauired(false)}} 
                      />

                    </Form.Group>
                        

                    { operating_theatre_advised_Reauired?   <> <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} >Adviced date/ Time</Form.Label>
                      <DateTimeForm Label="Date of Birth" type="datetime" name="operating_theatre_advised_DateTime" value={setOperating_theatre_advised_DateTime} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="g">
                    </Form.Group> </> : "" }

                   

                  </Row>

                  <Row className="mb-3">

                    <Inputform name="plaesespecify" Label="Drug Orders On Admission (If possible please attavh drug chart or detail below)" type="text" placeholder="Enter Value" value={postdata.drug_Orders_on_Admission} onChange={onChange("drug_Orders_on_Admission")} />
                    <Form.Group as={Col} controlId="g">
                    </Form.Group>

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Specific Equipment required?</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="specific_equipment_required"
                        type="radio"
                        id="one"
                        value="true"
                        onChange={(e) =>{setSpecific_equipment_required(true)}} 
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="specific_equipment_required"
                        type="radio"
                        id="two"
                        value="false"
                        onChange={(e) =>{setSpecific_equipment_required(false)}} 
                      />

                    </Form.Group>
                      
                    { specific_equipment_required?   <Inputform name="investigations_Details" Label="Please Specify" type="text" placeholder="Enter Value" 
               value={postdata.specific_equipment_Details} onChange={onChange("specific_equipment_Details")}
              /> : "" }



                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Medical practitioner Signature</Form.Label>
                      <div className="sign">    <SignaturePad options={{ minWidth: 5, maxWidth: 5, penColor: 'rgb(66, 133, 244)' }} /></div>


                    </Form.Group>
                    

                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} >Proposed Procedure Date Time</Form.Label>
                      <DateTimeForm Label="Date of Birth" type="datetime" name="mP_Sign_dateTime" value={setMP_Sign_dateTime} />
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
                  
                    <Inputform name="doctor_Name" type="text" placeholder="Enter value" value={postdata.doctor_Name} onChange={onChange("doctor_Name")} />
                    <p>Have disscussed with</p>

                    <p>the nature of his / her present condition, the various ways of treating the patient's present condition and have explained the nature, purpose, likely results and the material risks of the following recommended procedure / treatment(s)</p>

                    <Form.Group as={Col} controlId="g">
                    </Form.Group>

                  </Row>
                  <Row className="mb-3" >
                  
                    <Inputform name="Provisionaldiagnosis" Label="Provisional Diagnosis" type="text" placeholder="Enter value" value={postdata.provisional_Diagnosis} onChange={onChange("provisional_Diagnosis")}/>

                  </Row>

                  <Row className="mb-3" >
                  
                  <Inputform name="agreed_Procedure_Description" Label="The agreed operation/Procedure treatment is" type="text" placeholder="Enter value" value={postdata.agreed_Procedure_Description} onChange={onChange("agreed_Procedure_Description")}/>

                </Row>
                  <Row className="mb-3" >

                    <Inputform name="mbS_Item_Numbers" Label="MBS item numbers" type="text" placeholder="Enter value" value={postdata.mbS_Item_Numbers} onChange={onChange("mbS_Item_Numbers")} />

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Check
                        inline
                        label="Left Side"
                        name="laterality"
                        type="radio"
                        id="one"
                        value="Left side"
                        onChange={(e) =>{ setLaterality(e.target.value)}}
                      />
                      <Form.Check
                        inline
                        label="Right Side"
                        name="laterality"
                        type="radio"
                        id="two"
                        value="Right side"
                        onChange={(e) =>{ setLaterality(e.target.value)}}
                      />
                      <Form.Check
                        inline
                        label="Not Applicable"
                        name="laterality"
                        type="radio"
                        id="two"
                        value="Not Applicable side"
                        onChange={(e) =>{ setLaterality(e.target.value)}}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Inputform name="specific_Instructions" Label="Special Instructions" type="text" placeholder="Enter value" value={postdata.specific_Instructions} onChange={onChange("specific_Instructions")}  />
                  </Row>
                  <Row className="mb-3" >
                    <Inputform name="mP_Name" Label="Medical Practitioner Name" type="text" placeholder="Enter value" value={postdata.mP_Name} onChange={onChange("mP_Name")}  />
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} > Medical practitioner Signature</Form.Label>
                      <div className="sign">    <SignaturePad options={{ minWidth: 5, maxWidth: 5, penColor: 'rgb(66, 133, 244)' }} /></div>


                    </Form.Group>


                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} >Proposed Procedure Date Time</Form.Label>
                      <DateTimeForm Label="Date of Birth" type="datetime"  name="mP_Signature_DateTime" value={setMP_Signature_DateTime} />
                    </Form.Group>

                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="g">
                      <Form.Label as={Col} >Interpreter required?</Form.Label>
                      <Form.Check
                        inline
                        label="Yes"
                        name="interpreter_Required"
                        type="radio"
                        id="one"
                        value="true"
                        onChange={(e) =>{setInterpreter_Required(true)}}  
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="interpreter_Required"
                        type="radio"
                        id="two"
                        value="false"
                        onChange={(e) =>{setInterpreter_Required(false)}}  
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
                        name="consent_To_Blood_Transfusion"
                        type="radio"
                        id="one"
                        value="false"
                        onChange={(e) =>{setConsent_To_Blood_Transfusion(true)}}  
                      />
                      
                      <Form.Check
                        inline
                        label="No"
                        name="consent_To_Blood_Transfusion"
                        type="radio"
                        id="two"
                        value="false"
                        onChange={(e) =>{setConsent_To_Blood_Transfusion(false)}}  
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
                      <DateTimeForm Label="Date of Birth" type="datetime" name="patient_Sign_DateTime" value={setPatient_Sign_DateTime}/>
                    </Form.Group>

                  </Row>

                
                  <Button variant="contained"  onClick={submitform}>
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
