<template>
  <div id="app">
    <header>
      <ul>
        <router-link tag="li" to="/"><a>Top</a></router-link>
        <router-link tag="li" to="/poly"><a>Poly DEMO</a></router-link>
        <router-link tag="li" to="/anatome"><a>Anatome DEMO</a></router-link>
      </ul>
    </header>

    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'app',
  mounted() {

  }
}
</script>

<style lang="scss">
html,body { height:100%; }

header {
  position: fixed; top: 0; left: 0;
  z-index: 999;

  ul {
    display: flex;
  }

  li {
    background-color: #000;
    color: #fff;
    border-right: 1px solid #fff;

    a {
      display: block;
      padding: 5px 10px;
    }
  }
}
</style>
