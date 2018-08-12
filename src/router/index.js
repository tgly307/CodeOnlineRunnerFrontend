import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: () => import("@/components/HelloWorld")
    },
    {
      path: "/node",
      name: "node",
      component: () => import("@/views/node/node")
    },
    {
      path: "/python",
      name: "python",
      component: () => import("@/views/python/python")
    },
    {
      path: "/c_cpp",
      name: "c_cpp",
      component: () => import("@/views/c_cpp/c_cpp")
    }
  ]
});
