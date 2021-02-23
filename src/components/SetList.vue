<template>
  <div id="set-list">
    <div class="list-wrapper">
      <transition name="fade" appear><h2>Pick a Set</h2></transition>
      <transition-group
        :style="{ '--total': sets.length }"
        name="slide-in"
        tag="ul"
        appear
      >
        <SetOption
          data-test-id="set-option"
          v-for="(set, index) in sets"
          :style="{ '--i': index }"
          :key="set.code"
          :set="set"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import sets from "@/constants/sets";
import SetOption from "@/components/SetOption.vue";

// renders a list of set options (current standard sets)
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

  .list-wrapper {
    flex-grow: 1;

    h2 {
      text-transform: uppercase;
      letter-spacing: $spacing-1;
      margin: $spacing-0 $spacing-0 $spacing-3;
    }
  }

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

@include fade;
@include slideIn;
</style>
