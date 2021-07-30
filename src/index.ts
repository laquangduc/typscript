import { UserCreate } from "./Components/Users/UserCreate.js";
import { UserIndex } from "./Components/Users/UserIndex.js";
import { Component } from "./Components/Component.js";
import Navigo from "navigo";

//router

const render = async () =>{
  let gui: Component = new UserIndex();
  gui.render();
  await gui.afterRender();
}
render();



// const router = new Navigo("/");

// const routes = () => {
//   router
//     .on('/users/index', () => {
//       const gui: Component = new UserIndex();
//       gui.render();
//     })
//     .on('/users/create', () => {
//       const gui: Component = new UserCreate();
//       gui.render();
//     })
// }

// routes();
