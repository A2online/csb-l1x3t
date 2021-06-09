/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ox extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Ox/costumes/costume1.svg", { x: 47, y: 55 }),
      new Costume("costume2", "./Ox/costumes/costume2.svg", {
        x: 4.109790000000004,
        y: 4.166966190476188
      }),
      new Costume("costume3", "./Ox/costumes/costume3.png", { x: 28, y: 29 })
    ];

    this.sounds = [new Sound("meow", "./Ox/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.BROADCAST, { name: "done" }, this.whenIReceiveDone),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.CLONE_START, this.startAsClone5),
      new Trigger(Trigger.CLONE_START, this.startAsClone6)
    ];

    this.vars.direction = -6;
    this.vars.slope = 0;
    this.vars.xvel = -0.6;
    this.vars.yvel2 = -773;
    this.vars.gothold = 0;
    this.vars.movex = 0;
  }

  *whenGreenFlagClicked() {
    while (true) {
      /* TODO: Implement motion_ifonedgebounce */ null;
      /* TODO: Implement sensing_setdragmode */ null;
      yield;
    }
  }

  *whenGreenFlagClicked2() {}

  *turn() {
    this.x += 10;
    if (
      !(
        this.touching(Color.rgb(255, 102, 102)) ||
        this.touching(this.sprites[undefined].andClones())
      )
    ) {
      this.vars.direction += 3;
      this.vars.xvel += 0.3;
    }
    this.x += -20;
    if (
      !(
        this.touching(Color.rgb(255, 102, 102)) ||
        this.touching(this.sprites[undefined].andClones())
      )
    ) {
      this.vars.direction += -3;
      this.vars.xvel += -0.3;
    }
    this.x += 10;
    this.direction += 2;
    if (
      !(
        this.touching(Color.rgb(255, 102, 102)) ||
        this.touching(this.sprites[undefined].andClones())
      )
    ) {
      this.vars.direction += 1;
    }
    this.direction -= 4;
    if (
      !(
        this.touching(Color.rgb(255, 102, 102)) ||
        this.touching(this.sprites[undefined].andClones())
      )
    ) {
      this.vars.direction += -1;
    }
    this.direction += 2;
    this.direction += 10;
    if (
      !(
        this.touching(Color.rgb(255, 102, 102)) ||
        this.touching(this.sprites[undefined].andClones())
      )
    ) {
      this.vars.direction += 2;
    }
    this.direction -= 20;
    if (
      !(
        this.touching(Color.rgb(255, 102, 102)) ||
        this.touching(this.sprites[undefined].andClones())
      )
    ) {
      this.vars.direction += -2;
    }
    this.direction += 10;
  }

  *physics(friction, stiffnes) {
    if (
      !(
        this.touching(Color.rgb(255, 102, 102)) ||
        this.touching(this.sprites[undefined].andClones())
      )
    ) {
      this.vars.yvel2 += -1;
    }
    this.y += this.vars.yvel2;
    if (
      this.touching(Color.rgb(255, 102, 102)) ||
      this.touching(this.sprites[undefined].andClones())
    ) {
      for (let i = 0; i < Math.abs(Math.ceil(this.vars.yvel2)); i++) {
        if (
          this.touching(Color.rgb(255, 102, 102)) ||
          this.touching(this.sprites[undefined].andClones())
        ) {
          this.y += (Math.abs(this.vars.yvel2) / this.vars.yvel2) * -1;
        }
      }
      this.vars.yvel2 = 0;
    }
    this.x += this.vars.xvel;
    if (
      this.touching(Color.rgb(255, 102, 102)) ||
      this.touching(this.sprites[undefined].andClones())
    ) {
      this.vars.slope = 0;
      while (
        !(
          this.vars.slope == -8 ||
          !(
            this.touching(Color.rgb(255, 102, 102)) ||
            this.touching(this.sprites[undefined].andClones())
          )
        )
      ) {
        this.vars.slope += -1;
        this.y += 1;
      }
      if (this.vars.slope == -8) {
        this.y += this.vars.slope;
      }
      for (let i = 0; i < Math.abs(Math.ceil(this.vars.xvel)); i++) {
        this.x += (Math.abs(this.vars.yvel2) / this.vars.yvel2) * -1;
      }
      this.vars.xvel = 0;
    }
    this.direction += this.vars.direction;
    this.vars.direction = this.vars.direction * stiffnes;
    this.vars.xvel = this.vars.xvel * friction;
    this.warp(this.turn)();
  }

  *startAsClone() {
    this.costume = "costume2";
    this.size = 240;
    this.visible = true;
    this.direction = 90;
    this.vars.direction = 0;
    this.vars.slope = 0;
    this.vars.xvel = 0;
    this.vars.yvel2 = 0;
    while (true) {
      this.stage.vars.yess = 0;
      yield* this.physics(0.95, 0.6);
      if (this.vars.gothold == 1) {
        this.goto(this.mouse.x, this.mouse.y);
        if (!(this.touching("mouse") && this.mouse.down)) {
          this.vars.xvel = this.x - this.vars.movex;
          this.vars.yvel2 = this.y - this.stage.vars.movey;
        }
      }
      if (
        this.touching("mouse") &&
        this.mouse.down &&
        this.stage.vars.hold == 0
      ) {
        this.stage.vars.hold = 1;
        this.vars.yvel2 = 2;
        this.vars.gothold = 1;
        this.goto(this.mouse.x, this.mouse.y);
        this.stage.vars.yess = 1;
        this.vars.movex = this.x;
        this.stage.vars.movey = this.y;
      }
      this.vars.gothold = 0;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.stage.vars.hold = 0;
      yield;
    }
  }

  *startAsClone2() {}

  *whenGreenFlagClicked4() {
    this.visible = false;
  }

  *startAsClone3() {}

  *whenIReceiveDone() {
    for (let i = 0; i < 3; i++) {
      this.createClone();
      yield;
    }
    while (true) {
      while (!this.keyPressed("space")) {
        yield;
      }
      this.goto(this.mouse.x, this.mouse.y);
      yield;
    }
  }

  *startAsClone4() {
    this.goto(this.random(-200, 200), 300);
  }

  *startAsClone5() {
    while (true) {
      if (this.touching(Color.rgb(0, 0, 0))) {
        this.goto(this.random(-200, 200), 300);
      }
      yield;
    }
  }

  *startAsClone6() {
    while (true) {
      if (!(this.touching("mouse") && this.mouse.down)) {
        this.stage.vars.held = 1;
      }
      if (this.touching("mouse") && this.mouse.down) {
        this.stage.vars.held = 0;
      }
      yield;
    }
  }
}
