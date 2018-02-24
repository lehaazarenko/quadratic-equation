module.exports = function solveEquation(equation) {
  // your implementation
  let n = equation.indexOf(' * x^2');
  let m = equation.indexOf(' * x ');
  let str1 = equation.slice(0, n).replace(/ /i, '');
  let str2 = equation.slice(n + 7, m).replace(/ /i, '');
  let str3 = equation.slice(m + 5, equation.length).replace(/ /i, '');
  a = Number(str1);
  b = Number(str2);
  c = Number(str3);
  let d = Math.round((b * b) - (4 * a * c));
  if (d > 0) {
  	const x1 = Math.round(((-b) - Math.sqrt(d))/(2 * a));
    const x2 = Math.round(((-b) + Math.sqrt(d))/(2 * a));
    if (x1 > x2) {
    	return [x2, x1];
    } else {
    	return [x1, x2];
    }
  } else if (d === 0) {
    return ((-b) / (2 * a));
  }
}