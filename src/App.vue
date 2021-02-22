<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <font-awesome-icon
        icon="user-secret"
        :style="{ color: 'var(--forest-light)' }"
      />
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  height: 100%;
  text-align: center;
  color: $swamp-light;
  background-color: $swamp-ultra-dark;
  overflow: hidden;
}

#nav {
  padding: 30px;
  height: $header-height;

  a {
    font-weight: bold;
    color: $forest-light;
  }
}

#nav a.router-link-exact-active {
  color: $forest-dark;
}
</style>
