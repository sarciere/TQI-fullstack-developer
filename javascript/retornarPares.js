function RetornarNumerosPares(array){
    let arraytemporario = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 === 0 ) {
            arraytemporario.push(array[index]);
        }    
    }
    console.log(arraytemporario);
}

let ArrayTeste = [1,2,3,4,5,6,7,8,9,12];

RetornarNumerosPares(ArrayTeste);