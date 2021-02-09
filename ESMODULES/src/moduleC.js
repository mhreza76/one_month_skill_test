import { greet, GreetMessage } from "./moduleD.js";
let msg = "Welcome";
greet(msg);
let gm = new GreetMessage();
gm.greet();