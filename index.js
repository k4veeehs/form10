function solveQuadratic() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Please enter valid numbers for a, b, and c.');
        return;
    }

    const discriminant = b * b - 4 * a * c;
    let result;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result = `The roots are <span class="number">${root1}</span> and <span class="number">${root2}</span>.`;
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        result = `The root is <span class="number">${root}</span>.`;
    } else {
        result = 'There are no real roots.';
    }

    document.getElementById('result').innerHTML = result;
}
