import React ,{useState} from 'react'
import Layout from '../../components/layout'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import moment from 'moment'

import './styles.css'
import CreateIcon from '@mui/icons-material/Create';
import { Alert, Form } from 'react-bootstrap';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Inputform from '../../components/form/Inputform'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';

import { useNavigate } from "react-router-dom";
const Login = () => {

  const date = new Date();

  const navigate = useNavigate();

  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');

  const handleRoute = () =>{ 

    navigate("/");
  }


  return (
    <>

      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static"  >
          <Toolbar>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img width="80px" src="https://www.dayhospitalsaustralia.net.au/wp-content/uploads/2016/11/LOGO-Medical-Wizard.png" /> Hospital EMR



            </Typography>


          </Toolbar>
        </AppBar>


      </Box>



      <Container style={{ paddingTop: "5%" }}>
        <Row className="justify-content-md-center">
          <Col xs={6} md={5}>
            <Card>
              <CardContent>
                <Row >

                  <Col>
                    <h2  >    <LoginIcon fontSize="large" /> Sign In</h2>
                    <Alert variant="primary">
                      <div> <h4>{moment(date).format('LL')} </h4></div>

                    </Alert>
                  </Col>
                </Row>
                <Card>
                  <CardContent>
                    <Form>
                      <Row className="mb-3">

                        <Inputform name="email" Label="User Name" type="text" placeholder="Enter User Name" value={userName} />

                      </Row>
                      <Row className="mb-3">
                        <Inputform name="password" Label="Password" type="password" placeholder="Enter Password" value={password}  />
                      </Row>
                      <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                      </Row>


                      <Row className="mb-3">
                        <Button    onClick={handleRoute} variant="contained" type="submit">
                          <h2> <LockOpenIcon fontSize="large" /> Sign In</h2>
                        </Button>
                      </Row>
                      <Row className="mb-3">
                        <a>Forgot Password!</a>
                      </Row>

                    </Form>



                  </CardContent>

                </Card>



              </CardContent>

            </Card>
          </Col>
        </Row >

      </Container>


    </>
  )
}

export default Login
