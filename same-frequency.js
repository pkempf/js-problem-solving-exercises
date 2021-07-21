// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let numMap1 = {};

    let numStr1 = num1 + "";
    let numStr2 = num2 + "";

    for (let char of numStr1) {
        if (char in numMap1) {
            numMap1[char] += 1;
        } else numMap1[char] = 1;
    }

    for (let char of numStr2) {
        if (char in numMap1) {
            if (numMap1[char] === 0) return false;
            else numMap1[char]--;
        } else return false;
    }

    for (let key in numMap1) {
        if (numMap1[key] !== 0) return false; 
    }

    return true;

}
