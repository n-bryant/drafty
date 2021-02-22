<template>
  <div id="home">
    <div id="set-list-wrapper">
      <SetList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SetList from "@/components/SetList.vue";

export default {
  name: "Home",
  components: {
    SetList
  }
};
</script>

<style lang="scss" scoped>
#home {
  height: calc(100% - #{$header-height});
  overflow: auto;
}

#set-list-wrapper {
  height: 100%;
  position: relative;
}
</style>
