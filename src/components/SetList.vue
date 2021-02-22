<template>
  <div id="set-list">
    <ul>
      <SetOption v-for="set in sets" :key="set.code" :set="set" />
    </ul>
  </div>
</template>

<script>
import sets from "@/constants/sets";
import SetOption from "@/components/SetOption.vue";

export default {
  data() {
    return {
      sets: Object.values(sets)
    };
  },
  components: {
    SetOption
  }
};
</script>

<style lang="scss" scoped>
#set-list {
  flex-grow: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  ul {
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>
