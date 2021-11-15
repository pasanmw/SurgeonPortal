
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import React,{useState} from "react"
import { Form,Col,Row } from "react-bootstrap"

export default function DateTimeForm(props) {

    const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
      setValue(newValue);
    };
  
    return (
      
           
                     <LocalizationProvider dateAdapter={DateAdapter}>

         
<Stack spacing={3}>
{props.type==='date' && 
  <DesktopDatePicker
  label="select date"
  inputFormat="MM/dd/yyyy"
  value={value}
  onChange={handleChange}
  renderInput={(params) => <TextField {...params} />}
/>
  }

{props.type==='mobile' && 
 <MobileDatePicker
 label="select date"
 inputFormat="MM/dd/yyyy"
 value={value}
 onChange={handleChange}
 renderInput={(params) => <TextField {...params} />}
/>
  }


{props.type==='time' && 
  <TimePicker
  label="select Time"
  value={value}
  onChange={handleChange}
  renderInput={(params) => <TextField {...params} />}
/>
  }
  
  {props.type==='datetime' && 
  <DateTimePicker
  label="select Date Time"
  value={value}
  onChange={handleChange}
  renderInput={(params) => <TextField {...params} />}
/>
  }
  
</Stack>
</LocalizationProvider>
                   
           

    );
}
