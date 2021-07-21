// add whatever parameters you deem necessary
function countPairs(arr, target) {
    let map = {};
    let rawCount = 0;

    for (let num of arr) {
        if (num in map) {
            map[num] += 1;
        } else map[num] = 1;
    }

    for (let num of arr) {
        if ((target - num) in map) {
            rawCount += map[target-num];
        }
        if (target - num === num) rawCount--;
    }

    return rawCount/2;
}
