const input = document.getElementById("inputValue");
const inputUnit = document.getElementById("inputUnit");
const output = document.getElementById("outputValue");
const outputUnit = document.getElementById("outputUnit");
const convertButton = document.getElementById("convertButton");

convertButton.addEventListener("click", () => {
    const inputValue = input.value;
    const inputUnitValue = inputUnit.value;
    const outputUnitValue = outputUnit.value;

    const conversionFactors = {
        cm: {
            in: 0.393701,
            m: 0.01,
            ft: 0.0328084
        },
        in: {
            cm: 2.54,
            m: 0.0254,
            ft: 0.0833333
        },
        m: {
            cm: 100,
            in: 39.3701,
            ft: 3.28084
        },
        ft: {
            cm: 30.48,
            in: 12,
            m: 0.3048
        }
    };

    const convertedValue = inputValue * conversionFactors[inputUnitValue][outputUnitValue];
    output.value = convertedValue.toFixed(2);
});
