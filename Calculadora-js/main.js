let resultado = document.getElementById('resultado')
var num_str1 = ''
var num_str2 = ''
var num1 = 0
var num2 = 0
var res = 0
var oper = []
var num = []

function entrada(value) {
    if (oper.includes('+') || oper.includes('-') || oper.includes('x') || oper.includes('/')) {
        resultado.innerText += ' ' + value
        num_str2 += '' + value
        num2 = Number(num_str2)
        num.push(num2)
    } else {
        resultado.innerText += value
        num_str1 += '' + value
        num1 = Number(num_str1)
        num.push(num1)
    }
}

function zera() {
    resultado.innerText = ""
    num_str1 = num_str2 = ''
    num1 = num2 = 0
    res = 0
    oper = []
}

function apaga() {

}

function virgula() {
    resultado.innerText += '.'
    num_str1 += '.'
}

function operação(value) {
    oper.push(value)
    if (oper.length > 1) {
        window.alert('Faça uma operação por vez!') 
    } else {
        resultado.innerText += ' ' + value + " "
    }
}

function result() {
    if (oper.includes("+")) {
        if (res == 0) {
            res = num1 + num2   
            num_str2 = ''
        } else {
            res += num2
            num_str2 = ''
        }
        resultado.innerText = res
        num1 = num2 = 0
    }
    if (oper.includes("-")) {
        if (res == 0) {
            res = num1 - num2   
            num_str2 = ''
        } else {
            res -= num2
            num_str2 = ''
        }
        resultado.innerText = res
        num1 = num2 = 0
    }
    if (oper.includes("x")) {
        if (res == 0) {
            res = num1 * num2   
            num_str2 = ''
        } else {
            res *= num2
            num_str2 = ''
        }
        resultado.innerText = res
        num1 = num2 = 0
    }
    if (oper.includes("/")) {
        if (res == 0) {
            res = num1 / num2   
            num_str2 = ''
        } else {
            res /= num2
            num_str2 = ''
        }
        resultado.innerText = res
        num1 = num2 = 0
    }
    if (oper.includes("²")) {
        if (res == 0) {
            res = num1 * num1
            num_str2 = ''
            resultado.innerText = res
            num1 = res
        } else {
            res *= res
            num_str2 = ''
            resultado.innerText = res
            num1 = res
        }
    }
    oper = []
}