<template>
  <img
    @load="loaded = true"
    @error="hasError = true"
    :class="[{ show: loaded && !hasError, [rarity]: true }, 'card-image']"
    :src="src"
    :alt="label"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    rarity: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loaded: false,
      hasError: false
    };
  }
};
</script>

<style lang="scss" scoped>
.card-image {
  cursor: pointer;
  display: block;
  height: 100%;
  background: $swamp-dark;
  border-radius: $card-radius;
  transition: transform 0.25s ease-in;
  opacity: 0;
  @include float;

  &:hover {
    animation: none;
    transform: scale(1.25);
    transition: transform 0.25s ease-in;
  }
}

.card-image.show {
  opacity: 1;
  transition: opacity 0.25s ease-in;
}

.card-image.mythic {
  box-shadow: 0 0 40px $mountain-dark;
}
.card-image.rare {
  box-shadow: 0 0 30px $plains-dark;
}
.card-image.uncommon {
  box-shadow: 0 0 20px $forest-light;
}
.card-image.common {
  box-shadow: 0 0 10px $island-light;
}
</style>
