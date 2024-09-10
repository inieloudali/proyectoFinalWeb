function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function nuevaMezcla() {
    mezcla=""

    i=randomIntFromInterval(1,10)

    switch (i) {
        case 1:
            mezcla="F' U2 L' F2 D2 U2 R2 B2 R' B2 R F2 U' F2 R D2 L' F' R U'";
            break;
        case 2:
            mezcla="L U2 B' U2 R F2 L' F2 D2 L2 F' L2 U2 L2 U2 F U2 F2"
            break;
        case 3:
            mezcla="B' L2 U2 F' D2 F2 L D' F2 U2 B L2 U2 B L2 U2 L2 D2 B2"
            break;
        case 4:
            mezcla="B U' B' R D' F D' F' U2 B U2 B' U2 L2 D2 F2 D2 F' L D'"
        break;
        case 5:
            mezcla="F B2 L B2 L F2 R' D2 U2 L U2 L U B L' F2 U F' L2 D2"
        break;
        case 6:
            mezcla="B D R2 B2 D' F2 U2 L2 B2 R2 D F2 L R U' F' D' L2 R' U' B'"
        break;
        case 7:
            mezcla="F' U2 R2 D' F2 L2 U F2 U' L2 R2 U2 R U' B U2 F2 U L2"
        break;
        case 8:
            mezcla="R2 F2 D2 U2 L2 F2 R B2 F2 U2 B' L' U F2 D' B U2 L' F'"
        break;
        case 9:
            mezcla="R2 D L2 D U' L2 F2 D2 L2 R2 F2 L' R' B' D B2 D' R U' L2 R2"
        break;
        case 10:
            mezcla="D2 F L2 D2 U2 F2 L2 D2 B' F2 R2 D' R' F' D' U2 B F' D2 R'"
        break;
    }

    document.getElementById("algoritmo").innerHTML=mezcla
}



var interval
var centesimas = 0
var centesimasString = ""
var segundos = 0
var segundosString = ""
var minutos = 0
var minutosString = ""

function startTimer() {
    document.getElementById("iniciar").disabled = true
    interval = setInterval(tick,10)
}

function tick() {
    centesimas++
    if (centesimas > 99) {
        segundos++
        centesimas = 0
    }
    if (segundos > 59) {
        minutos++
        segundos = 0
    }
    
    if (centesimas <= 9) {
        centesimasString = "0" + centesimas.toString()
    } else {
        centesimasString = centesimas.toString()
    }

    if (segundos <= 9) {
        segundosString = "0" + segundos.toString()
    } else {
        segundosString = segundos.toString()
    }

    document.getElementById("timer").innerHTML=minutos+":"+segundosString+":"+centesimasString
}

function stopTimer() {
    clearInterval(interval)
    document.getElementById("iniciar").disabled = false
}

function resetTimer() {
    clearInterval(interval)
    centesimas = 0
    segundos = 0
    minutos = 0
    document.getElementById("timer").innerHTML="0:00:00"
    document.getElementById("iniciar").disabled = false
}