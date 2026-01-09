/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bryan
 * Created on: Jan 2026
 * This program ...
*/

//set radio group
radio.setGroup(41)
basic.showString("Control")

input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1) // 1 = "Button A pressed"
})
