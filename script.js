value = ""
let isFloat = false
let operators = [];
let numbers = [];
function add(startValue) {
    if (typeof startValue == "number") {
        value += startValue;
        document.querySelector(".out").innerHTML = value;
    }else{
        console.log(startValue)
        switch (startValue) {
            case "clear":
                value = "";
                numbers = []
                document.querySelector(".out").innerHTML = value;
                break;
            case ".":
                console.log("xDDDD")
                isFloat = true;
                value += ".";
                document.querySelector(".out").innerHTML = value;
                break;
            case "=":
                numbers.push(value);
                calculate(numbers, operators)
                numbers = []
                operators = []
                break;
            default:
                numbers.push(value);
                value = "";
                document.querySelector(".out").innerHTML = value;
                operators.push(startValue)
                break;
        }
    }
}
function calculate(nums, ops) {
    let val = Number(nums[0])
    if (isFloat) {
        val = parseFloat(val)
    }
    console.log(nums)
    for (let i = 1; i < nums.length; i++) {
        switch (ops[i-1]) {
            case "+":
                val += Number(nums[i]);
                break
            case "-":
                val -= Number(nums[i]);
                break;
            case "*":
                val *= Number(nums[i]);
                break;
            case "/":
                val /= Number(nums[i]);
                break;
            default:
                break;
        }
    }
    value = val
    document.querySelector(".out").innerHTML = val
}
