<template>
  <div id="app">
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
header {
  position: fixed; top: 25px; right: 25px;
  z-index: 999;

  ul {
    display: flex;
  }

  li {
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin-left: 10px;

    a {
      display: block;
      padding: 10px;
    }
  }
}
</style>
