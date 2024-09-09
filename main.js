let numOrStr = prompt('input number or string');
console.log(numOrStr);

let inputType;

if (numOrStr === null) {
    inputType = 'cancelled';
} else if (numOrStr.trim() === '') {
    inputType = 'empty';
} else if (isNaN(+numOrStr)) {
    inputType = 'nan';
} else {
    inputType = 'ok';
}

switch (inputType) {
    case 'cancelled':
        console.log('ви скасували');
        break;
    case 'empty':
        console.log('Empty String');
        break;
    case 'nan':
        console.log('number is Ba_NaN');
        break;
    case 'ok':
        console.log('OK!');
        break;
    default:
        console.log('Unknown case');
}