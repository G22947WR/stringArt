export function nearestRational(x: number, maxQ: number) {
  let a: number[] = [];
  let y = x;
  for (let i = 0; i < 64; i++) {
    const ai = Math.floor(y);
    a.push(ai);
    const frac = y - ai;
    if (frac < 1e-12) break;
    y = 1 / frac;
  }

  let p_nm2 = 0, p_nm1 = 1, q_nm2 = 1, q_nm1 = 0;
  for (let i = 0; i < a.length; i++) {
    const p = a[i] * p_nm1 + p_nm2;
    const q = a[i] * q_nm1 + q_nm2;
    if (q > maxQ) {
      const k = Math.floor((maxQ - q_nm2) / q_nm1);
      const ps = k * p_nm1 + p_nm2;
      const qs = k * q_nm1 + q_nm2;
      return best(x, {p: ps, q: qs}, {p: p_nm1, q: q_nm1});
    }
    [p_nm2, p_nm1, q_nm2, q_nm1] = [p_nm1, p, q_nm1, q];
  }
  return { p: p_nm1, q: q_nm1 };
}

function best(x: number, a: {p:number,q:number}, b: {p:number,q:number}) {
  return Math.abs(x - a.p/a.q) < Math.abs(x - b.p/b.q) ? a : b;
}
