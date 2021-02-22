<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {
    AppHeader
  }
};
</script>

<style lang="scss">
#app {
  height: 100%;
  text-align: center;
  color: $swamp-light;
  background-color: $swamp-ultra-dark;
  overflow: hidden;
}
</style>
