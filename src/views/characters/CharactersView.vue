<template>
  <div class="characters">
    <h2>Characters</h2>
    <div class="cards">
        <CharacterCard v-for="name in this.$store.state.data.characters" :characterName=name class="character" />
    </div>
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue'
export default {
  name: 'CharactersView',
  components: {
    CharacterCard
  },
  props: {
    
  },
  data: function () {
    return {
      characterInfo: [],
    }
  },
}

</script>
<style scoped>
.characters {
  min-height: 50vh;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  margin: 1rem;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.character {
  border: 2px solid #FAF6EC;
  box-shadow: 0 0 0 3px #adaaa3;
  width: 180px;
  margin: 10px;
  height: 235px;
}

@media screen and (min-width: 1061px) {
  .characters {
    width: 80%;
  }

  .character {
  width: 288px;
  margin: 15px;
  height: 380px;
  }
}
</style>