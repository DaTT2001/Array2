//bai1
function findMatchLetter(arr, inputChar) {
    const result = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].charAt(0) === inputChar) {
            result.push(arr[i])
        }
    }
    return result
}
console.log(findMatchLetter(["an", "angry", "cat"], "a"))
//bai2 
function compareString(input1, input2) {
    if(input1.toUpperCase()=== input2.toUpperCase()) {
        return true
    }
    return false
}
console.log(compareString("abc","ABC"))
//bai3
function findMatchLetter1(arr, inputChar) {
    const result = []
    inputChar = inputChar.toLowerCase()
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].charAt(0) === inputChar || arr[i].charAt(0).toLowerCase() === inputChar) {
            result.push(arr[i])
        }
    }
    return result
}
console.log(findMatchLetter1(["Abc","adf","ddd","aaa"],"a"))
// console.log("a".toLowerCase())
//bai4
function toCamelCase(inputString) {
    const arr = inputString.split(" ")
    const result = []
    result.push(arr[0].charAt(0).toLowerCase() + arr[0].slice(1))
    for(let i = 1; i < arr.length; i++) {
        result.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
    }
    return result.join("")
}
console.log(toCamelCase("An angry cat"))
//bai 5
function orderNumberFormat(num) {
    if(num <= 0) {
        return undefined
    }
    else {
        result = String(num)
        if(result.slice(result.length - 1) == 1) {
            return result + "st"
        }
        else if(result.slice(result.length - 1) == 2) {
            return result + "nd"
        }
        else if(result.slice(result.length - 1) == 3) {
            return result + "rd"
        }
        else {
            return result + "th"
        }
    }
}
console.log(orderNumberFormat(3))
//bai6
// abcdefffff 
function truncateText(textInput, numInput) {
    if(textInput.length <= numInput) {
        return textInput
    }
    else {
        return textInput.slice(0, numInput) + "..."
    }
}
console.log(truncateText("This is a long message", 16))
// console.log(86.length)