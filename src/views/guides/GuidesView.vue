<template>
  <div class="guides">
    <h2>Guides</h2>
    <input type="button" value="Write a new guide" v-if="this.$store.state.loggedIn == 'admin'" @click="openNewGuide()">
    <div class="newGuide" v-if="newGuide==true">
      <NewGuide />
    </div>
  </div>
</template>
<script>
import NewGuide from '@/components/NewGuide.vue'
export default {
  name: 'Guides',
  components: {
    NewGuide,
  },
  data: function(){
    return {
      newGuide: false,
    }
  },
  methods: {
    openNewGuide() {
      this.newGuide = !this.newGuide;
    }
  }
}
</script>
<style scoped>
.guides {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 330px;
  margin: 0;
  padding: 0;
}
.newGuide {
  min-width: 330px;
  padding: 0;
}
input[type=button] {
    width: 200px;
    padding: 0.5rem;
    font-size: 1.2rem;
    border-radius: 1rem;
    border-top-left-radius: 0;
}

@media screen and (min-width: 1061px) {
  .guides {
    min-width: 1024px;
  }
  .newGuide {
    min-width: 1024px;
  
  }
}
</style>