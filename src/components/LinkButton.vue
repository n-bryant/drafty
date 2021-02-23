<template>
  <transition name="fade" appear
    ><router-link id="link-button" :to="to">{{
      label
    }}</router-link></transition
  >
</template>

<script>
// renders a styled router-link that routes to the given path and presents the provided label
export default {
  props: {
    to: {
      type: Object,
      default: () => ({}),
      required: true
    },
    label: {
      type: String,
      default: "",
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
#link-button {
  color: $swamp-light;
  text-decoration: none;
  padding: 8px;
  margin-bottom: 8px;
  background-color: rgba(0, 0, 0, 0.65);
  border: 1px solid $swamp-light;
  @include transitionAll;

  &:hover {
    background-color: $island-dark;
    @include transitionAll;
  }

  &:active {
    color: $plains-dark;
    border: 1px solid $plains-dark;
  }
}

@include fade;
</style>
