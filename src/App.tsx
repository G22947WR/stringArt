import Button from '@mui/material/Button';
//import ColorPicker from './ColorPicker';
import String from './components/String'
import { useState } from 'react';
import { Slider, Typography } from '@mui/material';
import { lcm3 } from './components/String';
import { nearestRational } from './nearestRational';

function App() {
  const [radius, setRadius] = useState(400);
  const [numString, setNumString] = useState(128);
  const [step, setStep] = useState({p:2,q:1});

  return (
    <>
      <Slider min={32} max={256} step={1} value={numString} onChange={(e:any)=>setNumString(parseFloat(e?.target?.value))}></Slider>
      <Typography>{numString}</Typography>
      <Slider aria-label="step" min={0.1} max={10} step={0.1} value={step.p/step.q} 
      onChange={(e:any)=>setStep(nearestRational(e.target.value,5))}></Slider>
      <Typography>{"step:{p:" + step.p + ", q:" + step.q + "} " + " 周期:" + lcm3(numString,step.p,step.q)}</Typography>

    <String r={radius} n={numString} rstep={step}/>
    <Button>テスト</Button>

    </>
  )
}

export default App
