let fields = document.getElementsByClassName('field');
for (let i = 0; i < fields.length; i++) {
    fields[i].value = '';
}

function calculateBMI() {
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;
  const calculatedResult = document.getElementById('result');

  if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      let bmiCategory;

      if (bmi < 18.5) {
          bmiCategory = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
          bmiCategory = 'Normal weight';
      } else if (bmi >= 25 && bmi < 29.9) {
          bmiCategory = 'Overweight';
      } else {
          bmiCategory = 'Obesse';
      }

      calculatedResult.innerHTML = 'Your BMI is '+ parseFloat(bmi).toFixed(2) + '. You are '+bmiCategory;
  } else {
      resultDiv.innerHTML = 'Please enter valid weight and height.';
  }
}
