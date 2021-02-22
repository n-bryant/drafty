<template>
  <div id="set-list">
    <div class="list-wrapper">
      <h2>Pick a Set</h2>
      <transition-group name="list" tag="ul" appear>
        <SetOption v-for="set in sets" :key="set.code" :set="set" />
      </transition-group>
    </div>
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

  .list-enter-active,
  .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    filter: grayscale(100%);
    transform: translateY(30px);
  }

  @keyframes bounce {
    from,
    20%,
    53%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -30px, 0) scaleY(1.1);
    }

    70% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -15px, 0) scaleY(1.05);
    }

    80% {
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 0, 0) scaleY(0.95);
    }

    90% {
      transform: translate3d(0, -4px, 0) scaleY(1.02);
    }
  }

  .bounce-enter-active {
    animation: bounce 0.75s;
  }

  .bounce-leave-active {
    animation: bounce 0.75s reverse;
  }
}
</style>
