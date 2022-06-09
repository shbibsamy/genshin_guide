<template>
  <div class="hello">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    message: ""
  },
  data: function() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0.5rem;
}

h2 {
  width: 50%;
  padding: 0.5rem;
  background: #2D2A29;
}
</style>
