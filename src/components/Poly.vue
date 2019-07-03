<template>
  <div class="poly">
    <div id="btnMenu">
      <a class="menu-trigger" href="javascript:void(0)">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <section class="left_content">
      <form id="search">
        <input id="query" value="mecha" placeholder="serach keyword"/>
        <button id="button">search</button>
      </form>

      <div id="results"></div>
    </section>

    <section class="right_content">
      <div id="viewer">
        <model-viewer id="sceneViewer" src="assets/model/mattune.glb" auto-rotate camera-controls ar shadow-intensity="2" camera-orbit="125deg 75deg 1m"></model-viewer>
      </div>
      <div id="info">
        <span id="asset_name">mattune</span><br/>
        by <span id="asset_author">mattune</span>
      </div>
    </section>
  </div>
</template>

<script>
import '@google/model-viewer';
import axios from 'axios';

const API_KEY = 'AIzaSyDzFFvye56YqkrIWKNod02jUEeHaN2M9wc';

export default {
  name: 'Poly',
  data() {
    return {
      results: {},
      isResult: false
    }
  },
  methods: {
    searchPoly(keywords, onLoad){
      var url = `https://poly.googleapis.com/v1/assets?pageSize=21&keywords=${keywords}&format=OBJ&key=${API_KEY}`;

      var request = new XMLHttpRequest();
      request.open( 'GET', url, true );
      request.addEventListener( 'load', function ( event ) {
        onLoad( JSON.parse( event.target.response ) );
      } );
      request.send( null );

      axios.get(url)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },

    createImage(asset) {
      let figure = document.createElement('figure');
      let image = document.createElement('img');
      image.src = asset.thumbnail.url;

      figure.appendChild(image);

      var format = asset.formats.find( format => { return format.formatType === 'GLTF2'; } );

      if ( format !== undefined ) {
        image.onclick = function () {
          asset_name.textContent = asset.displayName;
          asset_author.textContent = asset.authorName;

          var obj = format.root;
          var objURL = obj.url;
          var mtl = format.resources.find( resource => {
            return resource.url.endsWith( 'mtl' )
          });
          var path = obj.url.slice( 0, obj.url.indexOf( obj.relativePath ) );

          // empty
          document.getElementById('viewer').innerHTML = '';

          const modelViewer = '<model-viewer id="sceneViewer" src="'+ objURL +'" auto-rotate camera-controls ar shadow-intensity="2" camera-orbit="125deg 75deg"></model-viewer>';

          document.getElementById('viewer').innerHTML = modelViewer;
        }
      }
      return figure;
    },

    onResults(data) {
      while ( results.childNodes.length ) {
        results.removeChild( results.firstChild );
      }

      var assets = data.assets;
      if ( assets ) {
        for ( var i = 0; i < assets.length; i ++ ) {
          var asset = assets[ i ];
          var image = this.createImage( asset );
          results.appendChild( image );
        }
      }
      else {
        results.innerHTML = '<center>NO RESULTS</center>';
      }
    }
  },
  mounted() {
    search.addEventListener( 'submit', (event)=> {
      event.preventDefault()
      this.searchPoly( query.value, this.onResults );
    });

    button.click();

    if ( API_KEY.startsWith( '**' ) ) {
      alert( 'Sample incorrectly set up. Please enter your API Key for the Poly API in the API_KEY variable.' );
    }

    let _globalNavi = document.querySelector('.left_content');
    let _menuBtn = document.querySelector('#btnMenu a');
    document.querySelector('#btnMenu a').addEventListener('click', ()=>{
      _globalNavi.classList.toggle('active');
      _menuBtn.classList.toggle('active');
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.poly {
  display: flex;
  justify-content: space-between;

  section {
    width: 50%;
    position: relative;
  }

  .left_content {
    padding: 40px;
  }
}

#sceneViewer {
  position: fixed; top: 0; right: 0;
  width: 50%;
  height: 100%;

  .container {
    width: 100%;
    height: 100%;
  }
}

#info {
  position: absolute; top: 40px; left: 40px;
  z-index: 2;
  font-size: 1.6rem;
  line-height: 1.5;

  span {
    font-weight: bold;
  }
}


#search {
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;

  #query {
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

#results {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  figure {
    overflow: hidden;
    position: relative;
    width: calc(33.3% - 10px);
    margin-bottom: 10px;
    cursor: pointer;

    &:before {
      content: '';
      display: block;
      padding-top: 75%;
    }

    img {
      transition: all 0.2s ease;
      transform: translate(-50%,-50%) scale(1);
      position: absolute; top: 50%; left: 50%;
    }

    &:hover {
      img {
        transform: translate(-50%,-50%) scale(1.1);
      }
    }
  }
}

#btnMenu {
  position: fixed; top: 20px; right: 20px;
  z-index: 9999;
  display: none;

  .menu-trigger,
  .menu-trigger span {
    transition: all .4s ease;
    display: inline-block;
    box-sizing: border-box;
  }

  .menu-trigger {
    position: relative;
    width: 32px; height: 32px;
    overflow: hidden;
    margin-bottom: 35px;

    span {
      transition: all 0.2s ease;
      background-color: #000;
      height: 2px;
      width: 25px;
      position: absolute;
      left: 0;

      &:nth-of-type(1) {top: 0;}
      &:nth-of-type(2) {top: 5px; left: 5px;}
      &:nth-of-type(3) {top: 10px;}
      &:nth-of-type(4) {top: 15px; left: 5px;}
    }

    &.active {
      span {
        &:nth-of-type(1) {
          transform : translate(2px, 8px) rotate(-45deg);
        }

        &:nth-of-type(2) {
          opacity: 0;
        }

        &:nth-of-type(3) {
          transform : translate(2px, -2px) rotate(45deg);
        }

        &:nth-of-type(4) {
          opacity: 0;
        }
      }
    }
  }
} // btnMenu


@media screen and (max-width: 768px) {
  .poly {
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
  }

  #btnMenu {
    display: block;
  }

  #sceneViewer {
    position: absolute; top: 0; right: 0;
    width: 100%;
    height: 100vh;
  }

  #search {
    margin-bottom: 30px;
  }

  #results {
    figure {
      width: calc(50% - 10px);
      margin-bottom: 20px;
    }
  }
}
</style>
