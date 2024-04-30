    const somar = (a, b) => {
        return a + b;
    }

    const subtrair = (a, b) => {
        return a - b;
    }

    const multiplicar = (a, b) => {
        return a * b;
    }

    const dividir = (a, b) => {
        if(b === 0){
            return "error: número não pode ser dividido por zero";
        }else{
            return a / b; 
        }
    }

    module.exports = {
        somar,
        subtrair,
        multiplicar,
        dividir
    };
