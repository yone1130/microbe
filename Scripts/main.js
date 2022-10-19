// 
// main.js | microbe
// 
// Source code by よね/Yone
// Licensed under the MIT License
// 

let boxes = [];

// ---------- Functions ---------- //
function mainloop(){

    for (i = 0; i <= boxes.length-1; i++){
        boxes[i].move(i);
    }

    requestAnimationFrame(mainloop);
}

// ----- Box ----- //
class Box{
    constructor(){
        this.box_loc_H             = rnd(100);
        this.box_locLimit_lower_H  = 0;
        this.box_locLimit_higher_H = 100;
        this.box_loc_Y             = rnd(100);
        this.box_locLimit_lower_Y  = 0;
        this.box_locLimit_higher_Y = 100;

        this.moveVal               = 1/4;
        this.mode_H                = -1;
        this.mode_Y                = -1;
        this.modeChgCnt            = -1;
        this.modeChgInterval       = -1;

        document.getElementById("main").innerHTML += `
            <div class="box" id=${boxes.length}></div>
        `;
        this.box = document.getElementById(boxes.length);

        this.box.style.top = `${this.box_loc_H}vh`;
        this.box.style.left = `${this.box_loc_Y}vw`;
        this.box.style.background = `#${rnd(12700)}`;

        this.box.addEventListener('click', function(){
            boxes[boxes.length] = new Box();
        })
    }

    move(id){
        this.box = document.getElementById(id);

        // Random
        this.modeChgCnt++;

        if (this.modeChgCnt >= this.modeChgInterval || this.modeChgCnt == -1){
            this.mode_H = rnd(2)
            this.mode_Y = rnd(2)
            this.modeChgInterval = rnd(120);
            this.modeChgCnt = 0;
        }

        // Mover
        if (this.mode_H == 0){
            this.box_loc_H += this.moveVal;
            if (this.box_loc_H > this.box_locLimit_higher_H){
                this.mode_H = 1;
                this.box_loc_H = this.box_locLimit_higher_H
            }
        } else if (this.mode_H == 1){
            this.box_loc_H -= this.moveVal;
            if (this.box_loc_H < this.box_locLimit_lower_H){
                this.mode_H = 0;
                this.box_loc_H = this.box_locLimit_lower_H
            }
        }

        if (this.mode_Y == 0){
            this.box_loc_Y += this.moveVal;
            if (this.box_loc_Y > this.box_locLimit_higher_Y){
                this.mode_Y = 1;
                this.box_loc_Y = this.box_locLimit_higher_Y
            }
        } else if (this.mode_Y == 1){
            this.box_loc_Y -= this.moveVal;
            if (this.box_loc_Y < this.box_locLimit_lower_Y){
                this.mode_Y = 0;
                this.box_loc_Y = this.box_locLimit_lower_Y
            }
        }

        // Set
        this.box.style.top = `${this.box_loc_H}vh`;
        this.box.style.left = `${this.box_loc_Y}vw`;
    }
}

// ----- Random ----- //
function rnd(max) {
    return Math.floor(Math.random() * max);
}

// ---------- Main ---------- //
for (i = 0; i < 20; i++){
    boxes[i] = new Box();
}

mainloop();
