<template>
  <div class="top">
    <model-viewer id="sceneViewer" src="assets/model/mattune.glb" auto-rotate camera-controls ar shadow-intensity="2" camera-orbit="125deg 75deg"></model-viewer>
  </div>
</template>

<script>
import '@google/model-viewer';

export default {
  name: 'Top'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#sceneViewer {
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
}
</style>
