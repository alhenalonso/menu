input.onButtonPressed(Button.A, function () {
    if (Menu_2 == false) {
        Menu_1 = 1
    } else {
        opcion_a = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    Menu_1 = 0
    Menu_2 = false
    opcion_m = 0
    opcion_a = 0
})
input.onButtonPressed(Button.B, function () {
    if (Menu_2 == false) {
        Menu_1 = 2
    } else {
        opcion_m = 1
    }
})
let opcion_m = 0
let opcion_a = 0
let Menu_2 = false
let Menu_1 = 0
Menu_1 = 0
Menu_2 = false
basic.forever(function () {
    if (Menu_2 == false) {
        if (Menu_1 == 1) {
            basic.showString("Alfabeto")
            Menu_2 = true
        } else if (Menu_1 == 2) {
            basic.showString("Morse")
            Menu_2 = true
        } else {
            basic.showString("Menu Principal")
            Menu_2 = false
        }
    } else {
        if (opcion_a == 1) {
            basic.showString("[Opciones A]")
        } else if (opcion_m == 1) {
            basic.showString("[Opciones m]")
        }
    }
})
