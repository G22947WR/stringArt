import {useRef, useEffect} from 'react'
import p5 from 'p5'

const P5Sketch: React.FC = () =>{

    const ref = useRef<HTMLDivElement>(null);


    useEffect(()=> {
        const sketch = (p :p5) => {
            p.setup = () =>{
                p.createCanvas(800, 800);
            }

            p.draw = () =>{
                const r =
                p.background(255);

                p.circle(400, 400, 100);


            }

        }

        const instance = new p5(sketch, ref.current!)
        return () =>{
            instance.remove();
        }
}, [])
}