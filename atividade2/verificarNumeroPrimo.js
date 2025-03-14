function verificarNumeroPrimo(n) {
    if (n <= 1) {
        console.log(n + " não é primo.");
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log(n + " não é primo.");
            return false;
        }
    }
    console.log(n + " é primo.");
    return true;
}
