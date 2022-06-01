function validateInput () {
    let message;
    let a;
    message = document.getElementById("p1");
    message.innerHTML = "";
    a = document.getElementById("window").value;
    try {
        if(a == "") throw "Вы не ввели число";
        if(isNaN(a)) throw "Вы ввели не число";
        a = Number(a);
        if(a < 5) throw "Число меньше 5"
        if(a > 10) throw "Число больше 10"
    }
    catch(err) {
        message.innerHTML = err;
    }
}
