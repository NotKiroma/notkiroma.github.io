<template>
  <main>
    <div class="track" v-for="liked in tracks_store.liked_tracks" :key="liked.track.id">
      <RouterLink :to="`/album/${liked.album.id}`">{{ liked.album.name }}</RouterLink>
      <Audio_track :track="liked.track"/>
    </div>
  </main>
</template>

<script>
import { use_tracks_store } from "@/stores/track.js";
import Audio_track from "@/components/Audio_track.vue";

export default {
  components: {Audio_track},
  setup() {
    return {
      tracks_store: use_tracks_store(),
    }
  },
  name: "Liked_view",
}
</script>

<style scoped>
main{
  .track{
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
    max-width: 500px;
    margin: 1rem auto 5rem auto;
    a{
      color: var(--text_light);
    }
  }
}
</style>
