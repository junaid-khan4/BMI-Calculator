const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const btn = document.querySelector("#calculate");
const rslt = document.querySelector(".result");

btn.addEventListener("click", function() {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || height <=0 || isNaN(weight) || weight <=0) {
        rslt.textContent = "Please enter valid positive numbers for height and weight.";
        rslt.style.color = "red";
        return;
    }

    const bmi = weight / (height * height);
    const roundedBmi = bmi.toFixed(2);

    rslt.textContent = `Your BMI is ${roundedBmi}.`;

if (bmi < 18.5) {
    rslt.textContent += "you are underweight.";
} else if (bmi >=18.5 && bmi < 24.9) {
    rslt.textContent += "you have a normal Weight.";
} else if (bmi >= 25 && bmi < 29.9) {
    rslt.textContent += "you are overweight";
} else {
    rslt.textContent += "you Are obese.";
}
 rslt.style.color = "black";
});