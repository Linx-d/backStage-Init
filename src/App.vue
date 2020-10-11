<template>
  <div id="app" v-if="loading">
    <router-view />
  </div>
</template>
<script>
import { computed, ref, watchEffect } from "@vue/composition-api";
export default {
  name: "App",
  setup(props, { root }) {
    const loading = ref(true);
    return { loading };
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100vh;
  background: #e9eaeb;
}
</style>
