<template>
  <div class="card" v-for="gift in gifts">
        <img :src="gift.url">
        <div class="card-body">
            <h4>{{ gift.tag }}</h4>
        </div>

    </div>
</template>

<script>
import { logger } from '../utils/Logger';
import { giftsService } from '../services/GiftsService.js'
import { onMounted, computed } from 'vue';
import Pop from '../utils/Pop';
import { AppState } from '../AppState';

export default {
  
  setup() {
    async function getGifts() {
      try {
        await giftsService.getGifts()
      } catch (error) {
        Pop.error(error.message)
        logger.error(error)
      }
    }

    onMounted(() => {
      logger.log('home stuff')
      getGifts()
    })


    return{
    gifts: computed(()=> AppState.gifts)
  }


} 

}

</script>

<style scoped lang="scss">

</style>
