<template>
    <div class="character-info">
        
        <section class="comments-section">
            <CommentsBox></CommentsBox>
        </section>
    </div>
</template>
<script>
import CommentsBox from '@/components/CommentsBox.vue'
export default {
  name: 'CharacterInfoView',
  components: {
    CommentsBox
  }
}
</script>
<style>
    
</style>