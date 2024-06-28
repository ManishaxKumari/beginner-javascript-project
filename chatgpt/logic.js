function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (height > 0 && weight > 0) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        
        let status = '';
        if (bmi < 18.5) {
            status = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            status = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            status = 'Overweight';
        } else {
            status = 'Obesity';
        }

        document.getElementById('result').innerText = `Your BMI is ${bmi} (${status})`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid height and weight.';
    }
}
