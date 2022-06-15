<template>
  <div class="characters">
  <h2>Characters</h2>
  <CharacterCard></CharacterCard>
  </div>
</template>

<script>
// import CharacterCard from '@/components/CharacterCard.vue'
export default {
  name: 'CharactersView',
  components: {
    // CharacterCard
  },
  props: {
    
  },
}

</script>
<style>
.characters {
  min-height: 50vh;
}
</style>