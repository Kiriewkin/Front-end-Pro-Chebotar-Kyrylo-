let N = parseInt(prompt("Введіть ціле число N:"), 10);

for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        console.log(i);
    }
}