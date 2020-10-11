import Vue from "vue";
import Svgicons from "./Svgicon.vue";

Vue.component("svg-icon", Svgicons);

const req = require.context("./svg", false, /\.svg$/);
const requireAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
};
requireAll(req);
