import { Typography } from "@mui/material";

// 最大公約数（ユークリッドの互除法）
function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

// 最小公倍数
function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcd(a, b);
}

// n, p, q の最小公倍数
export function lcm3(n: number, p: number, q: number): number {
  return lcm(lcm(n, p), q);
}


export default function String({r,n,rstep}:any){ //n=釘の本数、step=ステップ

    const lines = [];
    const b = Math.floor(n/2);
    let sum = 0;
    const step=rstep.p/rstep.q;
    for (let i=0; i<lcm3(n,rstep.p, rstep.q); i++){
    //for (let i=0; i<20  ; i++){
        lines.push(<line x1={r+r*Math.cos(i*Math.PI*2/n)}
                        y1={r+r*Math.sin(i*Math.PI*2/n)}
                        x2={r+r*Math.cos(Math.floor(b+step*i)*Math.PI*2/n)}
                        y2={r+r*Math.sin(Math.floor(b+step*i)*Math.PI*2/n)}
                        stroke="skyblue" opacity="0.5" strokeWidth={0.5}></line>
        )
        lines.push(<line x1={r+r*Math.cos(Math.floor(b+step*i)*Math.PI*2/n)}
                        y1={r+r*Math.sin(Math.floor(b+step*i)*Math.PI*2/n)}
                        x2={r+r*Math.cos((i+1)*Math.PI*2/n)}
                        y2={r+r*Math.sin((i+1)*Math.PI*2/n)}
                        stroke="skyblue" opacity="0.5" strokeWidth={0.5}></line>
        )
        sum += Math.abs(Math.sin(Math.PI/n*(i-Math.floor(b+step*i))));
        sum += Math.abs(Math.sin(Math.PI/n*((i+1)-Math.floor(b+step*i))));
    }

    return(
        <div>
            <Typography>{sum}</Typography>
        <svg width={800} height={800}>
            <rect x={0} y={0} width={800} height={800} fill={"black"}></rect>
            <circle cx={400} cy={400} r={r}></circle>
            {lines}
        </svg>
        </div>
    )

}