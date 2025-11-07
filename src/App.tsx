import Button from '@mui/material/Button';
import ColorPicker from './ColorPicker';
import String from './components/String'
import { useState } from 'react';
import { Slider } from '@mui/material';

function App() {
  const [radius, setRadius] = useState(0);
  const [numString, setNumString] = useState(128);
  const [step, setStep] = useState(2);

  return (
    <>
      <Slider min={0} max={400} onChange={(e)=>setRadius(e.target.value)}></Slider>
      <Slider min={32} max={1024} step={1} onChange={(e)=>setNumString(e.target.value)}></Slider>
      <Slider aria-label="step" min={0.1} max={10} step={0.1} value={step} onChange={(_, v)=>setStep(v)}></Slider>

    <String r={radius} n={numString} step={step}/>
    <Button>テスト</Button>
    <ColorPicker>
    </ColorPicker>
    </>
  )
}

export default App
