<template>
  <div class="weapons">
    <h2>Weapons</h2>
    <div class="cards">
      <WeaponCard v-for="name in this.$store.state.data.weapons" :weaponName="name" class="weapon"/>
    </div>
  </div>
</template>

<script>
import WeaponCard from '@/components/WeaponCard.vue'
export default {
  name: 'WeaponsView',
  components: {
    WeaponCard
  },
  props: {
    
  },
  data() {
    return {
      weaponInfo: [],
    }
  },
}

</script>
<style scoped>
.weapons {
  min-height: 50vh;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.weapon {
  border: 2px solid #FAF6EC;
  box-shadow: 0 0 0 3px #adaaa3;
  width: 180px;
  margin: 10px;
  height: 235px;
}

@media screen and (min-width: 1061px) {
  .weapons {
    width: 80%;
  }

  .weapon {
  width: 288px;
  margin: 15px;
  height: 380px;
  }
}
</style>