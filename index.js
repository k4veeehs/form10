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

// --------------------------------------------------------------------------------------

function calculateConcentration() {
    const moles = parseFloat(document.getElementById('moles').value);
    const volume = parseFloat(document.getElementById('volume').value);
    const molarity = parseFloat(document.getElementById('molarity').value);

    let resultText = '';

    if (!isNaN(moles) && !isNaN(volume) && isNaN(molarity)) {
        const calculatedMolarity = moles / volume;
        resultText = `Molarity: <span class="number">${calculatedMolarity.toFixed(2)}</span> M`;
    } else if (!isNaN(moles) && isNaN(volume) && !isNaN(molarity)) {
        const calculatedVolume = moles / molarity;
        resultText = `Volume: <span class="number">${calculatedVolume.toFixed(2)}</span> L`;
    } else if (isNaN(moles) && !isNaN(volume) && !isNaN(molarity)) {
        const calculatedMoles = molarity * volume;
        resultText = `Moles of Solute: <span class="number">${calculatedMoles.toFixed(2)}</span> mol`;
    } else {
        resultText = 'Please provide exactly two values to calculate the third.';
    }

    document.getElementById('result1').innerHTML = resultText;
}