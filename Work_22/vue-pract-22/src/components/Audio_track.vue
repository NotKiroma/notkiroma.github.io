<template>
  <p>{{ track.name }}</p>
  <audio @play="play_started(track.id)" ref="audio_tag" :src="track.src" controls
         @ended="track_ended(track.id)"
  ></audio>
  <button @click="like(track.id)" :class="track.like ? 'like' : ''">
    <img :src="track.like? heart_filled : heart" alt="">
  </button>
</template>

<script>
import heart from "@/assets/heart.png";
import heart_filled from "@/assets/heart_filled.png";
import { use_tracks_store } from "@/stores/track.js";
import {mapActions} from "pinia";

export default {
  setup(){
    return {
      tracks_store: use_tracks_store(),
    }
  },
  name: "Audio_track",
  props: {
    track: {
      required: true,
      type: Object
    }
  },
  methods: {
    ...mapActions(use_tracks_store, ["like", "track_ended", "play_started"]),
  },
  data() {
    return {
      heart: heart,
      heart_filled: heart_filled
    }
  },
  computed: {
    status() {
      return this.track.id === this.tracks_store.current_track;
    }
  },
  watch: {
    status(new_val) {
      if (new_val) {
        this.$refs.audio_tag.play();
      }
      else{
        this.$refs.audio_tag.pause();
        this.$refs.audio_tag.currentTime = 0;
      }
    }
  }
}
</script>

<style scoped>
p{
  color: var(--text_light);
  flex-basis: 100%;
}
audio{
  flex: 1;
}
button{
  background: var(--text_light);
  border-radius: 0.5rem;
  border: 1px solid var(--text_lighter);
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  transition: all .5s;
  &.like{
    background: pink;
  }
  img{
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
}
</style>

