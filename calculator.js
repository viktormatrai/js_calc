function reset() {
    document.getElementById("display").value = "";
}

function result(digit) {
    document.getElementById("display").value = digit;
}

function digit(digit) {
    document.getElementById("display").value += digit;
}

function percent() {
    result(eval(document.getElementById("display").value / 100))
}

function equalTo() {
    try {
        result(eval(document.getElementById("display").value))
    }
    catch (equalTo) {
        result('Error')
    }
}  