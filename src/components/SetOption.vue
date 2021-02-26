<template>
  <li id="set-option" :title="set.name">
    <div
      class="option-wrapper"
      @mouseover="hovering = true"
      @mouseleave="hovering = false"
    >
      <div class="option-portrait">
        <img
          :class="[{ grey: hovering }, 'setImage']"
          :src="set.splashImgSrc"
          :alt="set.name"
        />
        <img class="set-logo" :src="set.logoSrc" :alt="`${set.name} - logo`" />
      </div>
      <div v-if="hovering" class="actions">
        <LinkButton
          v-for="(action, index) in actions"
          :key="index"
          :to="action.to"
          :label="action.label"
        />
      </div>
    </div>
  </li>
</template>

<script>
// renders a set "card" with splash image, logo, and links to draft/sealed sims for the set
import LinkButton from "@/components/LinkButton";

export default {
  props: {
    set: Object
  },
  components: {
    LinkButton
  },
  data() {
    return {
      hovering: false,
      actions: [
        // {
        //   to: { name: "draft-set", params: { code: this.set.code } },
        //   label: "Draft"
        // },
        // {
        //   to: { name: "sealed-set", params: { code: this.set.code } },
        //   label: "Sealed"
        // },
        {
          to: { name: "pack-set", params: { code: this.set.code } },
          label: "Open Pack"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#set-option {
  line-height: 1.2;
  vertical-align: top;
  width: 80%;
  margin: $spacing-2 $spacing-0;

  @include md {
    width: 42%;
    &:nth-of-type(2n) {
      margin-left: $spacing-5;
    }
  }
  @include lg {
    width: calc(20% - #{$spacing-5} - #{$spacing-2});
    margin-left: $spacing-5;
    &:first-of-type {
      margin-left: $spacing-0;
    }
  }
}

.option-wrapper {
  min-height: 324px;
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.option-portrait {
  height: 100%;
  width: 100%;
  @include absoluteContainer;
  @include flexCenter(row);
}

.setImage {
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

.set-logo {
  display: block;
  width: 80%;
  max-width: 80%;
  padding: 8px;
  position: absolute;
  bottom: 0;
}

.grey {
  filter: grayscale(100%);
}

.actions {
  position: absolute;
  min-width: 124px;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
