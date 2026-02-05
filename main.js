const empty = [];


for (let i = 0; i < 6; i++) {
    const serial_number = Number(prompt('inserisci un numero'))
    if (serial_number % 2 === 0) { 
        console.log('nope');
        } else {
            empty.push(serial_number)
        }
}

console.log(empty);
