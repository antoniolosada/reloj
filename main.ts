let hora = 0
let minuto = 0
let segundo = 0
basic.forever(function () {
    if (60 == segundo) {
        segundo = 0
        minuto = minuto + 1
    }
    if (60 == minuto) {
        minuto = 0
        hora = hora + 1
    }
    if (24 == hora) {
        hora = 0
        minuto = 0
        segundo = 0
    }
    basic.pause(1000)
    segundo = segundo + 1
})
basic.forever(function () {
    basic.showString("" + hora + ":" + minuto + ":" + segundo)
})
