// 
// main.js | microbe
// 
// Source code by よね/Yone
// Licensed under the MIT License
// 

let box_loc_H             = -1;
let box_locLimit_lower_H  = 0;
let box_locLimit_higher_H = 100;
let box_loc_Y             = -1;
let box_locLimit_lower_Y  = 0;
let box_locLimit_higher_Y = 100;

let moveVal               = 1/4;
let mode_H                = -1;
let mode_Y                = -1;
let modeChgCnt            = -1;
let modeChgInterval       = -1;

const box = document.getElementById("box");

// ---------- Main ---------- //
mainloop();

// ---------- Functions ---------- //
function mainloop(){

    // Random
    modeChgCnt++;

    if (modeChgCnt >= modeChgInterval || modeChgCnt == -1){
        mode_H = rnd(2)
        mode_Y = rnd(2)
        modeChgInterval = rnd(120);
        modeChgCnt = 0;
    }

    // Mover
    if (mode_H == 0){
        box_loc_H += moveVal;
        if (box_loc_H > box_locLimit_higher_H){
            mode_H = 1;
            box_loc_H = box_locLimit_higher_H
        }
    } else if (mode_H == 1){
        box_loc_H -= moveVal;
        if (box_loc_H < box_locLimit_lower_H){
            mode_H = 0;
            box_loc_H = box_locLimit_lower_H
        }
    }

    if (mode_Y == 0){
        box_loc_Y += moveVal;
        if (box_loc_Y > box_locLimit_higher_Y){
            mode_Y = 1;
            box_loc_Y = box_locLimit_higher_Y
        }
    } else if (mode_Y == 1){
        box_loc_Y -= moveVal;
        if (box_loc_Y < box_locLimit_lower_Y){
            mode_Y = 0;
            box_loc_Y = box_locLimit_lower_Y
        }
    }

    // Set
    box.style.top = `${box_loc_H}vh`;
    box.style.left = `${box_loc_Y}vw`;

    requestAnimationFrame(mainloop);
}

// ----- Random ----- //
function rnd(max) {
    return Math.floor(Math.random() * max);
}
