value = ""
let isFloat = false
function add(startValue) {
    let operators = [];
    let numbers = [];
    if (typeof startValue == "number") {
        value += startValue;
        document.querySelector(".out").innerHTML = value;
    }else{
        console.log(startValue)
        switch (startValue) {
            case "clear":
                value = "";
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
    if (isFloat == true){
        for (let index = 0; index < nums.length; index++) {
            nums[i] = parseFloat(nums[index]);
        }
    }
    value = nums[0]
    for (let i = 1; i < nums.length; i++) {
        switch (ops[i-1]) {
            case "+":
                value += nums[i];
                break
            case "-":
                value -= nums[i];
                break;
            case "*":
                value *= nums[i];
                break;
            case "/":
                value /= nums[i];
                break;
            default:
                break;
        }
    }
    console.log(value)
    document.querySelector(".out").innerHTML = value;
}
