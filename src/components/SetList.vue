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
  flex-wrap: wrap;
  @include absoluteContainer;
  @include flexCenter(row);

  .list-wrapper {
    flex-grow: 1;
    padding-top: $spacing-3;

    @include lg {
      padding-top: 0;
    }

    h2 {
      text-transform: uppercase;
      letter-spacing: $spacing-1;
      margin: $spacing-0 $spacing-0 $spacing-3;
    }
  }

  ul {
    flex-grow: 1;
    flex-wrap: wrap;
    @include flexCenter(row);
    max-width: $screen-xl-min;
    margin: 0 auto 48px;
  }
}

@include fade(1.5s);
@include slideIn;
</style>
