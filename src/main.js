import Engine from "./engine";
import GameObject from "./gameobject";

// set assets directory to png folder

let engine = new Engine();

let testObj = new GameObject();
testObj.position = (100,100);
engine.addObject(testObj);