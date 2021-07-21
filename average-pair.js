// add whatever parameters you deem necessary
function averagePair(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;

    while (left < right) {
        let avg = (sortedArr[left] + sortedArr[right]) / 2;

        if (avg === target) return true;
        else if (avg > target) right--;
        else left++;
    }

    return false;
}
