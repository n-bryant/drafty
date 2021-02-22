<template>
  <header id="app-header">
    <nav id="nav">
      <router-link to="/">
        <div id="logo">
          <h1 class="app-title">Drafty</h1>
          <div class="icon-wrapper">
            <PackIcon class="icon" />
          </div>
        </div>
      </router-link>
    </nav>
  </header>
</template>

<script>
import PackIcon from "@/assets/pack.svg";

export default {
  components: {
    PackIcon
  }
};
</script>

<style lang="scss" scoped>
#app-header {
  padding: $spacing-0 $spacing-4;
  height: $header-height;

  nav {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;
    }
  }

  #logo {
    color: $swamp-light;
    display: flex;
    align-items: center;

    .app-title {
      margin: 0;
      margin-right: $spacing-1;
    }

    .icon-wrapper {
      height: 24px;
      width: 24px;

      .icon {
        fill: $swamp-light;
        @include fillShift;
      }
    }

    &:hover {
      .icon {
        fill: $forest-light;
        @include fillShift;
      }
    }
  }
}
</style>
