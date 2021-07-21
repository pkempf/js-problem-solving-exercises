// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] < 0) {
            if (arr[right] > 0) {
                [arr[left], arr[right]] = [arr[right], arr[left]];
            } else right--;
        } else left++;
    }

    return arr;

}
