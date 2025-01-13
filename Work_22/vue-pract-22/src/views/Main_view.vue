<template>
<main>
  <RouterLink :to="`/album/${album.id}`" class="album" v-for="album in tracks_store.albums" :key="album.id">
    <div class="poster">
      <img :src="album.poster" alt="">
    </div>
    <div class="text">
      <p>{{ album.name }}</p>
    </div>
  </RouterLink>
</main>
</template>

<script>
import { use_tracks_store } from "@/stores/track.js";

export default {
  setup() {
    return {
      tracks_store: use_tracks_store(),
    }
  }
}

</script>

<style scoped>
main{
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 2rem;
  .album{
    display: grid;
    grid-template: 300px / 300px;
    align-items: end;
    text-decoration: none;
    &:hover{
      .poster img{
        transform: scale(1.2);
      }
    }
    .poster{
      width: 100%;
      height: 100%;
      grid-area: 1 / 1 / 1 / 1;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all .5s;
      }
    }
    .text{
      grid-area: 1 / 1 / 1 / 1;
      padding: .5rem;
      background: linear-gradient(
       to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .5) 25%, rgba(0, 0, 0, 1) 75%
      );
      position: relative;
      z-index: 10;
      p{
        margin: 0;
        color: var(--text_light);
      }
    }
  }
}
</style>
