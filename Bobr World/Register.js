function validatePassword() {
    var parolone = document.getElementById('parolone');
    var paroltwo = document.getElementById('paroltwo');
    if (parolone !== paroltwo){
        alert("Введите одинаковый пароль!!!");
        return false;
    }
    return true;
}