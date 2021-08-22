<template>
<li class="list-unstyled" @click="onVideoSelect">
  <img class="mr-3" :src="thumbnailUrl" />
  <div class="media-body">
    {{video.snippet.title}}
  </div>
</li>
</template>

<script>
  export default {
    name: 'VideoDetail',
    props : {
      video: Object
    },
    computed : {
      thumbnailUrl() {
        return this.video.snippet.thumbnails.default.url;
      }
    },
    methods:{
      onVideoSelect() {
        this.$emit('videoSelect', this.video);
      }
    }
  }
</script>

<style scoped>
li{
  display: flex;
  cursor: pointer
}

li:hover{
  background-color: #eee;
}

</style>