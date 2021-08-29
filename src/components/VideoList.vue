<template>
<ul class="list-group col-md-4">
  <VideoDetail v-for="video in videos" :video="video" :key="video.eta" @videoSelect="videoSelect"/>
</ul>
</template>

<script>
import VideoDetail from './VideoDetail';

export default {
  name: 'VideoList',
  components:{
    VideoDetail
  },
  props : {
    videos: Array
  },
  methods: {
    videoSelect(video){
      this.$emit('videoSelect', video);
    }
  }
}
</script>

<style>

</style>