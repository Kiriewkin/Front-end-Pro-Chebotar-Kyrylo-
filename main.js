let str = prompt("Write: 'Hello world'");
let arr = ['l', 'd'];

function eraseFromStr(str, arrayToDelete) {
    let newStrArray = [];
    let strArray = str.split('');

    for (let i = 0; i < strArray.length; i++) {
        let char = strArray[i];
        if (!arrayToDelete.includes(char)) {
            newStrArray.push(char);
        }
    }
    return newStrArray.join('');
}

let result = eraseFromStr(str, arr);
console.log(result);
