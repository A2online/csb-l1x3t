/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class LoadingScreen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./LoadingScreen/costumes/costume1.svg", {
        x: 240.3081141489001,
        y: 180.59376525878906
      }),
      new Costume("costume2", "./LoadingScreen/costumes/costume2.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("pop", "./LoadingScreen/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "done" }, this.whenIReceiveDone)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.goto(0, 0);
    this.stage.vars.turbo = 0;
    this.effects.clear();
    while (true) {
      this.restartTimer();
      for (let i = 0; i < 10; i++) {
        this.move(0);
        yield;
      }
      if (this.timer > 0.1) {
        null;
      } else {
        this.stage.vars.turbo = 1;
        this.costume = "costume2";
        this.visible = true;
        this.effects.ghost = 0;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.costume = "costume1";
    this.goto(0, 0);
    this.visible = true;
  }

  *whenIReceiveDone() {
    this.visible = false;
    while (true) {
      if (this.stage.vars.turbo == 1) {
        this.costume = "costume2";
        this.visible = true;
      } else {
        this.costume = "costume1";
        this.visible = false;
      }
      yield;
    }
  }
}
