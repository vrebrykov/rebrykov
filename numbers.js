for (let i = 1; i <= 100; i++ ) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + ' the number is divisible by 3 by 5');
    } else if (i % 5 == 0) {
        console.log(i + ' the number is divisible by 5');
    } else if (i % 3 == 0) {
        console.log(i + ' the number is divisible by 3');
    }
}