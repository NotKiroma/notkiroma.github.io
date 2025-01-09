<template>
  <p>{{ track.name }}</p>
  <audio :src="track.src" controls></audio>
  <button @click="like(track.id)" :class="this.tracks[track.id].like ? 'like' : ''">
    <img :src="track.like? heart_filled : heart" alt="">
  </button>
</template>

<script>
import heart from "@/assets/heart.png"
import heart_filled from "@/assets/heart_filled.png"

export default {
  name: "Audio_track",
  props: {
    track: {
      required: true,
      type: Object
    }
  },
  methods: {
    like(id){
      this.$emit("like_emit", id);
    }
  },
  data() {
    return {
      heart: heart,
      heart_filled: heart_filled
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

