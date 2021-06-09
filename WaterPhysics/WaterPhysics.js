/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class WaterPhysics extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм1", "./WaterPhysics/costumes/костюм1.png", {
        x: 15,
        y: 25
      })
    ];

    this.sounds = [new Sound("поп", "./WaterPhysics/sounds/поп.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.CLONE_START, this.startAsClone5)
    ];

    this.vars.yvel = 0;
  }

  *whenGreenFlagClicked() {
    this.goto(-235, 0);
    this.visible = false;
    this.visible = true;
    this.vars.yvel = 0;
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      this.y += this.vars.yvel;
      this.vars.yvel += (this.y * -1) / 50;
      this.vars.yvel = this.vars.yvel * 0.98;
      if (this.stage.vars.yess == 0 && this.mouse.down) {
        this.vars.yvel +=
          Math.cos(this.degToRad(this.direction)) *
          (100 / Math.hypot(this.mouse.x - this.x, this.mouse.y - this.y)) *
          -1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    for (let i = 0; i < 192; i++) {
      this.createClone();
      this.stage.vars.camt += 1;
      this.x += 2.5;
      yield;
    }
    this.broadcast("done");
    this.goto(-235, this.y);
  }

  *startAsClone() {
    this.vars.yvel = 0;
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      this.y += this.vars.yvel;
      this.vars.yvel += (this.y * -1) / 50;
      this.vars.yvel = this.vars.yvel * 0.98;
      if (this.mouse.down) {
        this.vars.yvel +=
          Math.cos(this.degToRad(this.direction)) *
          (100 / Math.hypot(this.mouse.x - this.x, this.mouse.y - this.y)) *
          -1;
      }
      yield;
    }
  }

  *startAsClone2() {
    while (true) {
      this.stage.vars.coordinatesY.push(this.y);
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.clearPen();
    while (true) {
      this.stage.vars.coordinatesY = [];
      yield;
    }
  }

  *startAsClone3() {}

  *whenGreenFlagClicked4() {
    this.clearPen();
    while (true) {
      this.stage.vars.coordinatesX = [];
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      this.size = this.stage.vars.sizeD;
      yield;
    }
  }

  *startAsClone4() {
    while (true) {
      this.size = this.stage.vars.sizeD;
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    while (true) {
      this.stage.vars.coordinatesX.push(this.x);
      yield;
    }
  }

  *startAsClone5() {
    while (true) {
      this.stage.vars.coordinatesX.push(this.x);
      yield;
    }
  }
}
