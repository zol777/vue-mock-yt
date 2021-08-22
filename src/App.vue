<template>
    <div class="container">
      <SearchBar @termChange="onTermChange"></SearchBar>
      <VideoPlayer :video="selectedVideo"/>
      <VideoList :videos="videos" @videoSelect="videoSelect"/>
    </div>
</template>

<script>
    import axios from 'axios';
    import SearchBar from './components/SearchBar';
    import VideoList from './components/VideoList';
    import VideoPlayer  from './components/VideoPlayer';
    const API_KEY = 'AIzaSyCrmOMpOJwmixB_3R1R70xhhLXE0-VPbf4';
    const SEARCH_API = "https://www.googleapis.com/youtube/v3/search";

    export default {
      name: 'App',
      components: {
         SearchBar, VideoList, VideoPlayer
      },
      data() {
        return {
          videos: [],
          selectedVideo: null
        }
      },
      methods: {
          onTermChange(searchTerm) {
            axios.get(SEARCH_API, {
              params: {
                key : API_KEY,
                type: 'video',
                part: 'snippet',
                q: searchTerm
              }
            }).then(response => {
              this.videos = response.data.items
            })
          },
          videoSelect(video){
            this.selectedVideo = video;
          }
        }
    };
</script>