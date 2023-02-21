<template>
    <div class="card">
        <img src="{{ gifts.url }}">
        <div class="card-body">
            <h4>{{ gifts.tag }}</h4>
        </div>

    </div>
</template>


<script>
export default {
    // props: {
    //     gift: {type: Gift}
    // },
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>