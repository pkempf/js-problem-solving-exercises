// add whatever parameters you deem necessary
function constructNote(message, letters) {
    if (message === "") return true;

    let lettersMap = {};

    for (let char of letters) {
        if (char in lettersMap) {
            lettersMap[char] += 1;
        } else {
            lettersMap[char] = 1;
        }
    }

    for (let char of message) {
        if (char in lettersMap) {
            if (lettersMap[char] === 0) return false;
            else lettersMap[char]--;
        } else return false;
    }

    return true;
}
