const convertButton = document.getElementById('convertButton');
const inputValue = document.getElementById('inputValue');
const result = document.getElementById('result');
const entradaValor = document.getElementById('entradaValor');
const dolar = 5.19;
const euro = 6.00;
const saidaValor = document.getElementById('saidaValor');
const flagEntrada = document.getElementById('flagEntrada');
const flagSaida = document.getElementById('flagSaida');
const moedaName1 = document.querySelector('.moeda1')
const moedaName2 = document.querySelector('.moeda2')
const valor = document.getElementById('Valor');

convertButton.addEventListener('click', () => {
    const value = inputValue.value;
    const valueInDolar = value / dolar;
    const valueInEuro = value / euro;
    const valueInBitcoin = value / 100000;
    const valueInLibra = value / 7.00;

    if (entradaValor.value == 'BRL' && saidaValor.value == 'USD') {
        valor.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
        flagEntrada.src = './img/real.png';
        flagEntrada.alt = 'logo-real';
        moedaName1.innerHTML = 'Real';
        result.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value / dolar);
        flagSaida.src = './img/dolar.png';
        flagSaida.alt = 'logo-dolar';
        moedaName2.innerHTML = 'Dólar';
    } else if (entradaValor.value === 'BRL' && saidaValor.value === 'EUR') {
        valor.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
        flagEntrada.src = './img/real.png';
        flagEntrada.alt = 'logo-real';
        moedaName1.innerHTML = 'Real';
        result.innerHTML = Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value / euro);
        flagSaida.src = './img/euro.png';
        flagSaida.alt = 'logo-euro';
        moedaName2.innerHTML = 'Euro';
    } else if (entradaValor.value === 'BRL' && saidaValor.value === 'BTC') {
        valor.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
        flagEntrada.src = './img/real.png';
        flagEntrada.alt = 'logo-real';
        moedaName1.innerHTML = 'Real';
        result.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(value / 100000);
        flagSaida.src = './img/bitcoin.png';
        flagSaida.alt = 'logo-bitcoin';
        moedaName2.innerHTML = 'Bitcoin';
    } else if (entradaValor.value === 'BRL' && saidaValor.value === 'LIBRA') {
        valor.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
        flagEntrada.src = './img/real.png';
        flagEntrada.alt = 'logo-real';
        moedaName1.innerHTML = 'Real';
        result.innerHTML = Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(value / 7.00);
        flagSaida.src = './img/libra.png';
        flagSaida.alt = 'logo-libra';
        moedaName2.innerHTML = 'Libra';
    } else if (entradaValor.value === 'USD' && saidaValor.value === 'BRL') {
        valor.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valueInDolar);
        flagEntrada.src = './img/dolar.png';
        flagEntrada.alt = 'logo-dolar';
        moedaName1.innerHTML = 'Dólar';
        result.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valueInDolar * dolar);
        flagSaida.src = './img/real.png';
        flagSaida.alt = 'logo-real';
        moedaName2.innerHTML = 'Real';
    } else if (entradaValor.value === 'USD' && saidaValor.value === 'EUR') {
        valor.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valueInDolar);
        flagEntrada.src = './img/dolar.png';
        flagEntrada.alt = 'logo-dolar';
        moedaName1.innerHTML = 'Dólar';
        result.innerHTML = Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(valueInDolar * dolar / euro);
        flagSaida.src = './img/euro.png';
        flagSaida.alt = 'logo-euro';
        moedaName2.innerHTML = 'Euro';
    } else if (entradaValor.value === 'USD' && saidaValor.value === 'BTC') {
        valor.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valueInDolar);
        flagEntrada.src = './img/dolar.png';
        flagEntrada.alt = 'logo-dolar';
        moedaName1.innerHTML = 'Dólar';
        result.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(valueInDolar * dolar / 100000);
        flagSaida.src = './img/bitcoin.png';
        flagSaida.alt = 'logo-bitcoin';
        moedaName2.innerHTML = 'Bitcoin';
    } else if (entradaValor.value === 'USD' && saidaValor.value === 'LIBRA') {
        valor.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valueInDolar);
        flagEntrada.src = './img/dolar.png';
        flagEntrada.alt = 'logo-dolar';
        moedaName1.innerHTML = 'Dólar';
        result.innerHTML = Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(valueInDolar * dolar / 7.00);
        flagSaida.src = './img/libra.png';
        flagSaida.alt = 'logo-libra';
        moedaName2.innerHTML = 'Libra';
    } else if (entradaValor.value === 'EUR' && saidaValor.value === 'BRL') {
        valor.innerHTML = Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(valueInEuro);
        flagEntrada.src = './img/euro.png';
        flagEntrada.alt = 'logo-euro';
        moedaName1.innerHTML = 'Euro';
        result.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valueInEuro * euro);
        flagSaida.src = './img/real.png';
        flagSaida.alt = 'logo-real';
        moedaName2.innerHTML = 'Real';
    } else if (entradaValor.value === 'EUR' && saidaValor.value === 'USD') {
        valor.innerHTML = Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(valueInEuro);
        flagEntrada.src = './img/euro.png';
        flagEntrada.alt = 'logo-euro';
        moedaName1.innerHTML = 'Euro';
        result.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valueInEuro * euro / dolar);
        flagSaida.src = './img/dolar.png';
        flagSaida.alt = 'logo-dolar';
        moedaName2.innerHTML = 'Dólar';
    } else if (entradaValor.value === 'EUR' && saidaValor.value === 'BTC') {
        valor.innerHTML = Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(valueInEuro);
        flagEntrada.src = './img/euro.png';
        flagEntrada.alt = 'logo-euro';
        moedaName1.innerHTML = 'Euro';
        result.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(valueInEuro * euro / 100000);
        flagSaida.src = './img/bitcoin.png';
        flagSaida.alt = 'logo-bitcoin';
        moedaName2.innerHTML = 'Bitcoin';
    } else if (entradaValor.value === 'EUR' && saidaValor.value === 'LIBRA') {
        valor.innerHTML = Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(valueInEuro);
        flagEntrada.src = './img/euro.png';
        flagEntrada.alt = 'logo-euro';
        moedaName1.innerHTML = 'Euro';
        result.innerHTML = Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(valueInEuro * euro / 7.00);
        flagSaida.src = './img/libra.png';
        flagSaida.alt = 'logo-libra';
        moedaName2.innerHTML = 'Libra';
    } else if (entradaValor.value === 'BTC' && saidaValor.value === 'BRL') {
        valor.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(valueInBitcoin);
        flagEntrada.src = './img/bitcoin.png';
        flagEntrada.alt = 'logo-bitcoin';
        moedaName1.innerHTML = 'Bitcoin';
        result.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valueInBitcoin * 100000);
        flagSaida.src = './img/real.png';
        flagSaida.alt = 'logo-real';
        moedaName2.innerHTML = 'Real';
    } else if (entradaValor.value === 'BTC' && saidaValor.value === 'USD') {
        valor.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(valueInBitcoin);
        flagEntrada.src = './img/bitcoin.png';
        flagEntrada.alt = 'logo-bitcoin';
        moedaName1.innerHTML = 'Bitcoin';
        result.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valueInBitcoin * 100000 / dolar);
        flagSaida.src = './img/dolar.png';
        flagSaida.alt = 'logo-dolar';
        moedaName2.innerHTML = 'Dólar';
    } else if (entradaValor.value === 'BTC' && saidaValor.value === 'EUR') {
        valor.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(valueInBitcoin);
        flagEntrada.src = './img/bitcoin.png';
        flagEntrada.alt = 'logo-bitcoin';
        moedaName1.innerHTML = 'Bitcoin';
        result.innerHTML = Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(valueInBitcoin * 100000 / euro);
        flagSaida.src = './img/euro.png';
        flagSaida.alt = 'logo-euro';
        moedaName2.innerHTML = 'Euro';
    } else if (entradaValor.value === 'BTC' && saidaValor.value === 'LIBRA') {
        valor.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(valueInBitcoin);
        flagEntrada.src = './img/bitcoin.png';
        flagEntrada.alt = 'logo-bitcoin';
        moedaName1.innerHTML = 'Bitcoin';
        result.innerHTML = Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(valueInBitcoin * 100000 / 7.00);
        flagSaida.src = './img/libra.png';
        flagSaida.alt = 'logo-libra';
        moedaName2.innerHTML = 'Libra';
    } else if (entradaValor.value === 'LIBRA' && saidaValor.value === 'BRL') {
        valor.innerHTML = Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(valueInLibra);
        flagEntrada.src = './img/libra.png';
        flagEntrada.alt = 'logo-libra';
        moedaName1.innerHTML = 'Libra';
        result.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valueInLibra * 7.00);
        flagSaida.src = './img/real.png';
        flagSaida.alt = 'logo-real';
        moedaName2.innerHTML = 'Real';
    } else if (entradaValor.value === 'LIBRA' && saidaValor.value === 'USD') {    
        valor.innerHTML = Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(valueInLibra);
        flagEntrada.src = './img/libra.png';
        flagEntrada.alt = 'logo-libra';
        moedaName1.innerHTML = 'Libra';
        result.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valueInLibra * 7.00 / dolar);
        flagSaida.src = './img/dolar.png';
        flagSaida.alt = 'logo-dolar';
        moedaName2.innerHTML = 'Dólar';
    } else if (entradaValor.value === 'LIBRA' && saidaValor.value === 'EUR') {
        valor.innerHTML = Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(valueInLibra);
        flagEntrada.src = './img/libra.png';
        flagEntrada.alt = 'logo-libra';
        moedaName1.innerHTML = 'Libra';
        result.innerHTML = Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(valueInLibra * 7.00 / euro);
        flagSaida.src = './img/euro.png';
        flagSaida.alt = 'logo-euro';
        moedaName2.innerHTML = 'Euro';
    } else if (entradaValor.value === 'LIBRA' && saidaValor.value === 'BTC') {
        valor.innerHTML = Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(valueInLibra);
        flagEntrada.src = './img/libra.png';
        flagEntrada.alt = 'logo-libra';
        moedaName1.innerHTML = 'Libra';
        result.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(valueInLibra * 7.00 / 100000);
        flagSaida.src = './img/bitcoin.png';
        flagSaida.alt = 'logo-bitcoin';
        moedaName2.innerHTML = 'Bitcoin';
    }
});