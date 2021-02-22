<template>
  <li id="set-option" :title="set.name">
    <div class="option-wrapper">
      <div class="option-portrait">
        <img :src="set.splashImgSrc" :alt="set.name" />
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    set: Object
  }
};
</script>

<style lang="scss" scoped>
#set-option {
  line-height: 1.2;
  vertical-align: top;
  width: 80%;
  margin: $spacing-2 $spacing-0 $spacing-2 $spacing-5;
  transition: filter 0.25s ease;

  &:hover {
    filter: grayscale(100%);
    transition: filter 0.25s ease;
  }

  @include md {
    width: 42%;
  }
  @include lg {
    width: calc(20% - #{$spacing-5} - #{$spacing-2});
  }
}

.option-wrapper {
  min-height: 324px;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.option-portait {
  height: 100%;
  width: 100%;
}

.option-portrait {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  img {
    display: block;
    height: 100%;
    margin: 0;
    padding: 0;
    width: auto;
    transition: transform 0.25s ease;

    &:hover {
      transform: scale(1.02);
      transition: transform 0.25s ease;
    }
  }
}
</style>
