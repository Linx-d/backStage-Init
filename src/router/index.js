import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/backStage",
  },
  {
    path: "/backStage",
    name: "BackStage",
    component: (resolve) => require(["../views/BackStage/index.vue"], resolve),
    children: [],
  },
];

//避免对当前位置的冗余导航
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  mode: "hash", // history
  routes,
});

export default router;
