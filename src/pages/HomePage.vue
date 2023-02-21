<template>
  <div class="container">
    <form @submit.prevent="submit()">
          <div class="input-group mb-3 me-3">
            <input v-model="editable.query" required type="url" class="form-control" placeholder="URL"
              aria-label="url" aria-describedby="button-addon2" name="url">
              <input v-model="editable.query" required type="tag" name="tag" class="form-control" placeholder="TAG"
              aria-label="TAG" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
              <i class="mdi mdi-earth mdi-spin"></i>
            </button>
          </div>
        </form>
  </div>
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
import { onMounted, computed, ref } from 'vue';
import Pop from '../utils/Pop';
import { AppState } from '../AppState';


export default {
  
  setup() {
    const editable = ref({})
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
      editable,
    gifts: computed(()=> AppState.gifts),


    async submit(){
      try {
        let formData = editable.value
        await giftsService.submit(formData)
        editable.value = {}
      } catch (error) {
        logger.error(error)
      }
  }
  }


} 

}

</script>

<style scoped lang="scss">

</style>
