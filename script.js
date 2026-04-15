const convertButton = document.getElementById('convertButton');
const inputValue = document.getElementById('inputValue');
const result = document.getElementById('result');
const entradaValor = document.getElementById('entradaValor');
const saidaValor = document.getElementById('saidaValor');
const flagEntrada = document.getElementById('flagEntrada');
const flagSaida = document.getElementById('flagSaida');
const moedaName1 = document.querySelector('.moeda1')
const moedaName2 = document.querySelector('.moeda2')
const valor = document.getElementById('Valor');



convertButton.addEventListener('click', async () => {
    
    const moedas = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL')
        .then(response => response.json())

        console.log(moedas);
        
        const ValueInDolar = moedas.USDBRL.high;
        const ValueInEuro = moedas.EURBRL.high;
        const ValueInBitcoin = moedas.BTCBRL.high;
        const ValueInLibra = moedas.GBPBRL.high;

    const value = inputValue.value;


    
    if (entradaValor.value == 'BRL' && saidaValor.value == 'USD') {
        valor.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
        flagEntrada.src = './img/real.png';
        flagEntrada.alt = 'logo-real';
        moedaName1.innerHTML = 'Real';
        result.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value / ValueInDolar);
        flagSaida.src = './img/dolar.png';
        flagSaida.alt = 'logo-dolar';
        moedaName2.innerHTML = 'Dólar';
    } else if (entradaValor.value === 'BRL' && saidaValor.value === 'EUR') {
        valor.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
        flagEntrada.src = './img/real.png';
        flagEntrada.alt = 'logo-real';
        moedaName1.innerHTML = 'Real';
        result.innerHTML = Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value / ValueInEuro);
        flagSaida.src = './img/euro.png';
        flagSaida.alt = 'logo-euro';
        moedaName2.innerHTML = 'Euro';
    } else if (entradaValor.value === 'BRL' && saidaValor.value === 'BTC') {
        valor.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
        flagEntrada.src = './img/real.png';
        flagEntrada.alt = 'logo-real';
        moedaName1.innerHTML = 'Real';
        result.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(value / ValueInBitcoin);
        flagSaida.src = './img/bitcoin.png';
        flagSaida.alt = 'logo-bitcoin';
        moedaName2.innerHTML = 'Bitcoin';
    } else if (entradaValor.value === 'BRL' && saidaValor.value === 'LIBRA') {
        valor.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
        flagEntrada.src = './img/real.png';
        flagEntrada.alt = 'logo-real';
        moedaName1.innerHTML = 'Real';
        result.innerHTML = Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(value / ValueInLibra);
        flagSaida.src = './img/libra.png';
        flagSaida.alt = 'logo-libra';
        moedaName2.innerHTML = 'Libra';
    } else if (entradaValor.value === 'USD' && saidaValor.value === 'BRL') {
        valor.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
        flagEntrada.src = './img/dolar.png';
        flagEntrada.alt = 'logo-dolar';
        moedaName1.innerHTML = 'Dólar';
        result.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value * ValueInDolar);
        flagSaida.src = './img/real.png';
        flagSaida.alt = 'logo-real';
        moedaName2.innerHTML = 'Real';
    } else if (entradaValor.value === 'USD' && saidaValor.value === 'EUR') {
        valor.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
        flagEntrada.src = './img/dolar.png';
        flagEntrada.alt = 'logo-dolar';
        moedaName1.innerHTML = 'Dólar';
        result.innerHTML = Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value * ValueInDolar / ValueInEuro);
        flagSaida.src = './img/euro.png';
        flagSaida.alt = 'logo-euro';
        moedaName2.innerHTML = 'Euro';
    } else if (entradaValor.value === 'USD' && saidaValor.value === 'BTC') {
        valor.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
        flagEntrada.src = './img/dolar.png';
        flagEntrada.alt = 'logo-dolar';
        moedaName1.innerHTML = 'Dólar';
        result.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(value * ValueInDolar / ValueInBitcoin);
        flagSaida.src = './img/bitcoin.png';
        flagSaida.alt = 'logo-bitcoin';
        moedaName2.innerHTML = 'Bitcoin';
    } else if (entradaValor.value === 'USD' && saidaValor.value === 'LIBRA') {
        valor.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
        flagEntrada.src = './img/dolar.png';
        flagEntrada.alt = 'logo-dolar';
        moedaName1.innerHTML = 'Dólar';
        result.innerHTML = Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(value * ValueInDolar / ValueInLibra);
        flagSaida.src = './img/libra.png';
        flagSaida.alt = 'logo-libra';
        moedaName2.innerHTML = 'Libra';
    } else if (entradaValor.value === 'EUR' && saidaValor.value === 'BRL') {
        valor.innerHTML = Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value);
        flagEntrada.src = './img/euro.png';
        flagEntrada.alt = 'logo-euro';
        moedaName1.innerHTML = 'Euro';
        result.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value * ValueInEuro);
        flagSaida.src = './img/real.png';
        flagSaida.alt = 'logo-real';
        moedaName2.innerHTML = 'Real';
    } else if (entradaValor.value === 'EUR' && saidaValor.value === 'USD') {
        valor.innerHTML = Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value);
        flagEntrada.src = './img/euro.png';
        flagEntrada.alt = 'logo-euro';
        moedaName1.innerHTML = 'Euro';
        result.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value * ValueInEuro / ValueInDolar);
        flagSaida.src = './img/dolar.png';
        flagSaida.alt = 'logo-dolar';
        moedaName2.innerHTML = 'Dólar';
    } else if (entradaValor.value === 'EUR' && saidaValor.value === 'BTC') {
        valor.innerHTML = Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value);
        flagEntrada.src = './img/euro.png';
        flagEntrada.alt = 'logo-euro';
        moedaName1.innerHTML = 'Euro';
        result.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(value * ValueInEuro / ValueInBitcoin);
        flagSaida.src = './img/bitcoin.png';
        flagSaida.alt = 'logo-bitcoin';
        moedaName2.innerHTML = 'Bitcoin';
    } else if (entradaValor.value === 'EUR' && saidaValor.value === 'LIBRA') {
        valor.innerHTML = Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value);
        flagEntrada.src = './img/euro.png';
        flagEntrada.alt = 'logo-euro';
        moedaName1.innerHTML = 'Euro';
        result.innerHTML = Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(value * ValueInEuro / ValueInLibra);
        flagSaida.src = './img/libra.png';
        flagSaida.alt = 'logo-libra';
        moedaName2.innerHTML = 'Libra';
    } else if (entradaValor.value === 'BTC' && saidaValor.value === 'BRL') {
        valor.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(value);
        flagEntrada.src = './img/bitcoin.png';
        flagEntrada.alt = 'logo-bitcoin';
        moedaName1.innerHTML = 'Bitcoin';
        result.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value * ValueInBitcoin);
        flagSaida.src = './img/real.png';
        flagSaida.alt = 'logo-real';
        moedaName2.innerHTML = 'Real';
    } else if (entradaValor.value === 'BTC' && saidaValor.value === 'USD') {
        valor.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(value);
        flagEntrada.src = './img/bitcoin.png';
        flagEntrada.alt = 'logo-bitcoin';
        moedaName1.innerHTML = 'Bitcoin';
        result.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value * ValueInBitcoin / ValueInDolar);
        flagSaida.src = './img/dolar.png';
        flagSaida.alt = 'logo-dolar';
        moedaName2.innerHTML = 'Dólar';
    } else if (entradaValor.value === 'BTC' && saidaValor.value === 'EUR') {
        valor.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(value);
        flagEntrada.src = './img/bitcoin.png';
        flagEntrada.alt = 'logo-bitcoin';
        moedaName1.innerHTML = 'Bitcoin';
        result.innerHTML = Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value * ValueInBitcoin / ValueInEuro);
        flagSaida.src = './img/euro.png';
        flagSaida.alt = 'logo-euro';
        moedaName2.innerHTML = 'Euro';
    } else if (entradaValor.value === 'BTC' && saidaValor.value === 'LIBRA') {
        valor.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(value);
        flagEntrada.src = './img/bitcoin.png';
        flagEntrada.alt = 'logo-bitcoin';
        moedaName1.innerHTML = 'Bitcoin';
        result.innerHTML = Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(value * ValueInBitcoin / ValueInLibra);
        flagSaida.src = './img/libra.png';
        flagSaida.alt = 'logo-libra';
        moedaName2.innerHTML = 'Libra';
    } else if (entradaValor.value === 'LIBRA' && saidaValor.value === 'BRL') {
        valor.innerHTML = Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(value);
        flagEntrada.src = './img/libra.png';
        flagEntrada.alt = 'logo-libra';
        moedaName1.innerHTML = 'Libra';
        result.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value * ValueInLibra);
        flagSaida.src = './img/real.png';
        flagSaida.alt = 'logo-real';
        moedaName2.innerHTML = 'Real';
    } else if (entradaValor.value === 'LIBRA' && saidaValor.value === 'USD') {
        valor.innerHTML = Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(value);
        flagEntrada.src = './img/libra.png';
        flagEntrada.alt = 'logo-libra';
        moedaName1.innerHTML = 'Libra';
        result.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value * ValueInLibra / ValueInDolar);
        flagSaida.src = './img/dolar.png';
        flagSaida.alt = 'logo-dolar';
        moedaName2.innerHTML = 'Dólar';
    } else if (entradaValor.value === 'LIBRA' && saidaValor.value === 'EUR') {
        valor.innerHTML = Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(value);
        flagEntrada.src = './img/libra.png';
        flagEntrada.alt = 'logo-libra';
        moedaName1.innerHTML = 'Libra';
        result.innerHTML = Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value * ValueInLibra / ValueInEuro);
        flagSaida.src = './img/euro.png';
        flagSaida.alt = 'logo-euro';
        moedaName2.innerHTML = 'Euro';
    } else if (entradaValor.value === 'LIBRA' && saidaValor.value === 'BTC') {
        valor.innerHTML = Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(value);
        flagEntrada.src = './img/libra.png';
        flagEntrada.alt = 'logo-libra';
        moedaName1.innerHTML = 'Libra';
        result.innerHTML = Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(value * ValueInLibra / ValueInBitcoin);
        flagSaida.src = './img/bitcoin.png';
        flagSaida.alt = 'logo-bitcoin';
        moedaName2.innerHTML = 'Bitcoin';
    } else if (entradaValor.value === saidaValor.value) {
        alert('Por favor, selecione moedas diferentes para conversão.');
        valor.innerHTML = '';
        result.innerHTML = '';
        flagEntrada.src = '';
        flagEntrada.alt = '';
        flagSaida.src = '';
        flagSaida.alt = '';
        moedaName1.innerHTML = '';
        moedaName2.innerHTML = '';
    } 

    try {
        if (isNaN(value) || value <= 0) {
            throw new Error('Por favor, insira um valor numérico positivo.');
        }
    } catch (error) {
        alert(error.message);
        valor.innerHTML = '';
        result.innerHTML = '';
        flagEntrada.src = '';
        flagSaida.src = '';
        moedaName1.innerHTML = '';
        moedaName2.innerHTML = '';
    }
});