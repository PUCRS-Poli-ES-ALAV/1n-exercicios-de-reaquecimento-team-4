// 1 multiplicar dois numeros naturais sucessivamente com recursividade
const multiplicar = (a, b) => {
    if (b === 0) {
        return 0;
    }
    return a + multiplicar(a, b - 1);
    }
    //console.log(multiplicar(5, 5));
    //console.log(multiplicar(1, 7)); 

// 2 Soma de dois números naturais, através de incrementos sucessivos (Ex.: 3 + 2 = 5)
const somar = (a, b) => {
    if (b === 0) {
        return a;
    }
    return 1 + somar(a, b - 1);
    }

    console.log(somar(3, 2));
    console.log(somar(1, 7));
// 3 Cálculo de 1 + 1/2 + 1/3 + 1/4 + ... + 1/N.

const calculow = (n) => {
    if (n === 0) {
        return 0;
    }
    return 1 / n + calculow(n - 1);
    }

    console.log(calculow(5));

// 4 inversão de uma string
const inverter = (str) => {
    if (str === '') {
        return '';
    }
    return inverter(str.substr(1)) + str[0];
    }
    console.log(inverter('123456')); 

// 8 Verifique se uma palavra é palíndromo (Ex.: “ovo”, “Ame a ema”, “A sogra má e amargosa”)

const palindromo = (str) => {
    str = str.replace(/\s/g, '').toLowerCase();
    if (str === '') {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return palindromo(str.substr(1, str.length - 2));
    }
    console.log(palindromo('ovo'));
    console.log(palindromo('Ame a ema'));
