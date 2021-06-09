import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import WaterPhysics from "./WaterPhysics/WaterPhysics.js";
import Ox from "./Ox/Ox.js";
import LoadingScreen from "./LoadingScreen/LoadingScreen.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  WaterPhysics: new WaterPhysics({
    x: 222.5,
    y: 0,
    direction: -67.29362915969409,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Ox: new Ox({
    x: -10,
    y: 15,
    direction: 101.53695903281549,
    costumeNumber: 2,
    size: 240,
    visible: false,
    layerOrder: 2
  }),
  LoadingScreen: new LoadingScreen({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
