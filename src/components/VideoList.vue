<template>
<ul class="list-group">
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