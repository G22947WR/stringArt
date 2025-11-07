export default function String({r,n,step}){ //n=釘の本数、step=ステップ

    const lines = [];
    const b = Math.floor(n/2);
    for (let i=0; i<n; i++){
        lines.push(<line x1={r+r*Math.cos(i*Math.PI*2/n)}
                        y1={r+r*Math.sin(i*Math.PI*2/n)}
                        x2={r+r*Math.cos((b+step*i)*Math.PI*2/n)}
                        y2={r+r*Math.sin((b+step*i)*Math.PI*2/n)}
                        stroke="skyblue"></line>
    )
    }

    return(
        <svg width={800} height={800}>
            <rect x={0} y={0} width={800} height={800} fill={"black"}></rect>
            <circle cx={400} cy={400} r={r}></circle>
            {lines}
        </svg>
    )

}