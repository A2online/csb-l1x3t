/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 242.30557250976562,
        y: -153.65623474121094
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.myVariable = 0;
    this.vars.waterLoad = 192;
    this.vars.xx = -220;
    this.vars.yy = 180;
    this.vars.camt = 21824;
    this.vars.hold = 0;
    this.vars.movey = -52;
    this.vars.turbo = 0;
    this.vars.yess = 0;
    this.vars.held = 1;
    this.vars.sizeD = 100;
    this.vars.color = 100;
    this.vars.load = 68;
    this.vars.coordinatesY = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
    this.vars.coordinatesX = [
      222.5,
      -235,
      -232.5,
      -230,
      -227.5,
      -225,
      -222.5,
      -220,
      -217.5,
      -215,
      -212.5,
      -210,
      -207.5,
      -205,
      -202.5,
      -200,
      -197.5,
      -195,
      -192.5,
      -190,
      -187.5,
      -185,
      -182.5,
      -180,
      -177.5,
      -175,
      -172.5,
      -170,
      -167.5,
      -165,
      -162.5,
      -160,
      -157.5,
      -155,
      -152.5,
      -150,
      -147.5,
      -145,
      -142.5,
      -140,
      -137.5,
      -135,
      -132.5,
      -130,
      -127.5,
      -125,
      -122.5,
      -120,
      -117.5,
      -115,
      -112.5,
      -110,
      -107.5,
      -105,
      -102.5,
      -100,
      -97.5,
      -95,
      -92.5,
      -90,
      -87.5,
      -85,
      -82.5,
      -80,
      -77.5,
      -75,
      -72.5,
      -70,
      -67.5,
      -65,
      -62.5,
      -60,
      -57.5,
      -55,
      -52.5,
      -50,
      -47.5,
      -45,
      -42.5,
      -40,
      -37.5,
      -35,
      -32.5,
      -30,
      -27.5,
      -25,
      -22.5,
      -20,
      -17.5,
      -15,
      -12.5,
      -10,
      -7.5,
      -5,
      -2.5,
      0,
      2.5,
      5,
      7.5,
      10,
      12.5,
      15,
      17.5,
      20,
      22.5,
      25,
      27.5,
      30,
      32.5,
      35,
      37.5,
      40,
      42.5,
      45,
      47.5,
      50,
      52.5,
      55,
      57.5,
      60,
      62.5,
      65,
      67.5,
      70,
      72.5,
      75,
      77.5,
      80,
      82.5,
      85,
      87.5,
      90,
      92.5,
      95,
      97.5,
      100,
      102.5,
      105,
      107.5,
      110,
      112.5,
      115,
      117.5,
      120,
      122.5,
      125,
      127.5,
      130,
      132.5,
      135,
      137.5,
      140,
      142.5,
      145,
      147.5,
      150,
      152.5,
      155,
      157.5,
      160,
      162.5,
      165,
      167.5,
      170,
      172.5,
      175,
      177.5,
      180,
      182.5,
      185,
      187.5,
      190,
      192.5,
      195,
      197.5,
      200,
      202.5,
      205,
      207.5,
      210,
      212.5,
      215,
      217.5,
      220
    ];

    this.watchers.sizeD = new Watcher({
      label: "size :D",
      style: "slider",
      visible: true,
      value: () => this.vars.sizeD,
      setValue: value => {
        this.vars.sizeD = value;
      },
      x: 584,
      y: 180
    });
  }
}
