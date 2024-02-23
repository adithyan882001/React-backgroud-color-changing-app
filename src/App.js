import './App.css';
import {useState} from 'react'
import { Button,Stack,TextField} from '@mui/material';

function App() {
  const [background,setChangeBackground] = useState('')
  const [customColor,setCustomColor] = useState('')

  const changeColor = (color) => {
    setChangeBackground(color)
  }

  const handleChange= (value) => {
    setCustomColor(value)
  }

  const customChange = () => {
    setChangeBackground(customColor)
  }

  return (
    <div className="display" style={{background}}>

      <Stack direction={'row'} spacing={2}>
      <Button onClick = {()=>changeColor('green')} variant="contained" color="success">
        Green
      </Button>
      <Button onClick = {()=>changeColor('blue')} variant="contained" color="primary">
        Blue
      </Button>
      <Button onClick = {()=>changeColor('red')} variant="contained" color="error">
        Red
      </Button>
      <Button onClick = {()=>changeColor('violet')} variant="contained" color="secondary">
        Violet
      </Button>
      </Stack>

      <div className='inpt-div'>
        <TextField onChange={(e)=>handleChange(e.target.value)} id="standard-basic" label="Custom Color" variant="standard" />
        <Button onClick={customChange} variant="outlined" color="error">
          Change
        </Button>
      </div>
    </div>
  );
}

export default App;
