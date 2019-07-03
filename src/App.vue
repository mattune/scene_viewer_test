<template>
  <div id="app">
    <model-viewer id="sceneViewer" src="assets/model/mattune.glb" auto-rotate camera-controls ar shadow-intensity="2" camera-orbit="125deg 75deg 2.5m"></model-viewer>
  </div>
</template>

<script>
import '@google/model-viewer';

export default {
  name: 'app',
  mounted() {

  }
}
</script>

<style lang="scss">
#sceneViewer {
  width: 100vw;
  height: 100vh;
}
.container {
  width: 100%;
  height: 100%;
}
</style>
