document.querySelector('#zero').addEventListener('click', zero)
document.querySelector('#one').addEventListener('click', one)
document.querySelector('#two').addEventListener('click', two)
document.querySelector('#three').addEventListener('click', three)
document.querySelector('#four').addEventListener('click', four)
document.querySelector('#five').addEventListener('click', five)
document.querySelector('#six').addEventListener('click', six)
document.querySelector('#seven').addEventListener('click', seven)
document.querySelector('#eight').addEventListener('click', eight)
document.querySelector('#nine').addEventListener('click', nine)
document.querySelector('#addition').addEventListener('click', add)
document.querySelector('#minus').addEventListener('click', subtract)
document.querySelector('#multiply').addEventListener('click', multiply)
document.querySelector('#divide').addEventListener('click', divide)
document.querySelector('#rightPar').addEventListener('click', rightPar)
document.querySelector('#leftPar').addEventListener('click', leftPar)
document.querySelector('#clear').addEventListener('click', clear)
document.querySelector('#equal').addEventListener('click', equal)
document.querySelector('#hireMe').addEventListener('click', hireMe)


let equation = ""

function zero() {
    equation += 0
    document.querySelector('#screen').innerHTML = equation
}

function one() {
equation += 1
document.querySelector('#screen').innerHTML = equation

}

function two() {
    equation += 2
    document.querySelector('#screen').innerHTML = equation
}

function three() {
    equation += 3
    document.querySelector('#screen').innerHTML = equation}

function four() {
    equation += 4
    document.querySelector('#screen').innerHTML = equation}

function five() {
    equation += 5
    document.querySelector('#screen').innerHTML = equation}

function six() {
    equation += 6
    document.querySelector('#screen').innerHTML = equation}

function seven() {
    equation += 7
    document.querySelector('#screen').innerHTML = equation}

function eight() {
    equation += 8
    document.querySelector('#screen').innerHTML = equation}

function nine() {
    equation += 9
    document.querySelector('#screen').innerHTML = equation}

function add() {
    equation += " + "
    document.querySelector('#screen').innerHTML = equation}

function subtract() {
    equation += " - "
    document.querySelector('#screen').innerHTML = equation}

function multiply() {
    equation += ' * '
    document.querySelector('#screen').innerHTML = equation}

function divide() {
    equation += " / "
    document.querySelector('#screen').innerHTML = equation
}

function leftPar() {
    equation += " ( "
    document.querySelector('#screen').innerHTML = equation
}

function rightPar() {
    equation += " ) "
    document.querySelector('#screen').innerHTML = equation
}

function clear() {
    equation = ''
    document.querySelector('#screen').innerHTML = equation
}

function equal(){
    let equationSplit = equation.split(" ");
    equation2 = eval(equationSplit.join(""))
    document.querySelector('#screen').innerHTML = equation2
    equation = ''
}
function hireMe() {
    let hire = "<span>Hire Me </span>"
    let beg = '<span style="font-size: 1rem;">please</span>'
    document.querySelector('#screen').innerHTML = `<div style="display: flex; flex-direction: column; text-align: center;">${hire} ${beg}</div>`
}

function narcissistic(value) {
  let number = value;
  let str = number.toString();
  let answer = 0
    for (i=0; i<str.length; i++ ) {
    answer += Math.pow(str[i], value.length)
    console.log(answer)
    }
    console.log(answer);
  
  if( answer === value) {
    return true;
  } else return false;
  }

  narcissistic(371);