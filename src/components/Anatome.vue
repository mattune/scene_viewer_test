<template>
  <div class="anatome">
    <form id="search">
      <input id="query" value="NYR0Q" placeholder="serach anatome_id"/>
      <button id="button">search</button>
    </form>

    <section class="right_content">
      <div id="viewer">
        <model-viewer id="sceneViewer" src="assets/model/RobotExpressive.glb" auto-rotate camera-controls ar autoplay></model-viewer>
      </div>
    </section>
  </div>
</template>

<script>
import '@google/model-viewer';
import axios from 'axios';

export default {
  name: 'Anatome',
  data() {
    return {
      results: {},
      isResult: false
    }
  },
  methods: {
    getAatome(anatome_id){
      const url = 'https://dev.anatome.tech/system/api/viewer/show.php';

      axios.get(url, {
        params: {
          anatome_id: anatome_id
        }
      })
      .then(function (response) {
        console.log(response);

        // empty
        document.getElementById('viewer').innerHTML = '';

        var objURL = response.data.data.files.pose_glb;

        const modelViewer = '<model-viewer id="sceneViewer" src="'+ objURL +'" auto-rotate camera-controls ar autoplay></model-viewer>';

        document.getElementById('viewer').innerHTML = modelViewer;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  mounted() {
    search.addEventListener( 'submit', (event)=> {
      event.preventDefault()
      this.getAatome( query.value);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.anatome {
  section {
    width: 100%;
    position: relative;
  }

  #sceneViewer {
    position: fixed; top: 0; right: 0;
    width: 100%;
    height: 100%;

    .container {
      width: 100%;
      height: 100%;
    }
  }

  #search {
    position: absolute; top: 50px; left: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    z-index: 999;

    #query {
      background-color: #fff;
      border-radius: 5px;
      border: 1px solid #ccc;
      width: calc(100% - 115px);
      padding: 15px;
    }

    #button {
      background-color: #ccc;
      border-radius: 5px;
      padding: 15px;
      width: 100px;
      letter-spacing: 0.1em;
      font-weight: bold;
    }
  }
}




@media screen and (max-width: 768px) {
  .anatome {
    display: block;

    section {
      width: 100%;
    }

    .left_content {
      transition: all 0.2s ease;
      transform: translateX(100%);
      padding: 50px 20px 20px 20px;
      position: fixed; top: 0; right: 0;
      width: 80%;
      height: 100%;
      background-color: rgba(255,255,255,0.7);
      z-index: 99;
      overflow-y: scroll;
      overflow-scrolling: touch;

      &.active {
        transform: translateX(0);
      }
    }

    #sceneViewer {
      position: absolute; top: 0; right: 0;
      width: 100%;
      height: calc(100vh - 50px);
    }

    #search {
      margin-bottom: 30px;
    }
  }
}
</style>
