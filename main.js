function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

const array = [1, 3, 4, 6, 2, 5, 7];
console.log(removeElement(array, 5));

