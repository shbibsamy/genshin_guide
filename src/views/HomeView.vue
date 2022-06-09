<template>
  <div class="home">
  <p>hello</p>
  <input type="text" v-model="message">
    <HelloWorld :message="message"></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data: function() {
    return {
      message: ""
    }
  }
}
</script>

<style>
.home {
  min-height: 50vh;
  background-image: url(../assets/Azhdaha.png);
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: bottom;

}

img {
  width: 100%;
}
</style>