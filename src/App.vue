<template>
  <div id="app">
        <router-view></router-view>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
export default {
    name: "App",
  components: {
    RouterView
}
}
</script>

<style>
@font-face {
  font-family: "PlayfairDisplayBold";
  src: local("PlayfairDisplayBold"),
   url(./assets/fonts/PlayfairDisplay-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "PlayfairDisplayRegular";
  src: local("PlayfairDisplayRegular"),
   url(./assets/fonts/PlayfairDisplay-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "SourceSansProBold";
  src: local("SourceSansProBold"),
   url(./assets/fonts/sourcesansprobold.ttf) format("truetype");
}

@font-face {
  font-family: "SourceSansProRegular";
  src: local("SourceSansProRegular"),
   url(./assets/fonts/sourcesanspro.ttf) format("truetype");
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #373333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


</style>