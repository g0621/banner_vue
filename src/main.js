import Vue from "vue";
import App from "./App.vue";
import TypeIt from "typeit";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");

new TypeIt("#inner-demo-2", {
  speed: 100,
  lifelike: true,
  cursor: true,
  cursorSpeed: 300,
  loop: true
})
  .pause(1000)
  .type('<span style="font-family: Segoe UI Emoji">👋</span>', {
    html: true
  })
  .type("&nbspHi&nbspthere!&nbspI'm&nbspGyan&nbspSingh.")
  .pause(750)
  .move(-1)
  .delete(5, { deleteSpeed: 130 })
  .pause(500)
  .type("Vardhan")
  .pause(500)
  .move(-18)
  .pause(200)
  .delete(5, { deleteSpeed: 130 })
  .type("Engineers")
  .pause(200)
  .move(1)
  .pause(200)
  .type("😁")
  .move("END")
  .pause(1000)
  .go();
