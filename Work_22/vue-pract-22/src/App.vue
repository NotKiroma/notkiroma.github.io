<template>
  <header>

  </header>

  <main>
    <div class="info">
      <h2>{{ tracks_store.albums[tracks_store.current_album].name }}</h2>
      <p v-if="tracks_store.albums[tracks_store.current_album].info"
         v-html="tracks_store.albums[tracks_store.current_album].info"
      ></p>
      <p v-else>Info is missing.</p>
    </div>
    <div class="poster">
      <img v-if="tracks_store.albums[tracks_store.current_album].poster"
           :src="tracks_store.albums[tracks_store.current_album].poster" alt=""
           v-on:click="poster_view"
      >
      <p v-else>NO&nbsp;POSTER =(</p>
    </div>
    <div class="playlist">
      <div class="search">
        <input type="text" v-model="search" placeholder="Search..." />
      </div>
      <div class="track" v-for="track in tracks_search" :key="track.id">
        <Audio_track :track="track"/>
      </div>
    </div>
  </main>
  <dialog :open="!!dialog_open" @click="poster_view">
    <img :src="tracks_store.albums[tracks_store.current_album].poster" alt="">
  </dialog>
</template>

<script>
import Audio_track from "@/components/Audio_track.vue";
import { use_tracks_store } from "@/stores/track.js";

export default {
  setup() {
    return{
      tracks_store: use_tracks_store(),
    }
  },
  async mounted() {
    await this.tracks_store.load_albums();
    let album_id = this.tracks_store.albums[0].id;
    await this.tracks_store.load_tracks(album_id);
    this.tracks_store.change_current_album(album_id);
  },
  components: {
    Audio_track
  },
  data() {
    return {
      dialog_open: false,
      search: ""
    }
  },
  methods: {
    poster_view() {
      this.dialog_open = !this.dialog_open;
    }
  },
  computed: {
    tracks_search() {
      if (this.tracks_store.tracks) {
        return this.tracks_store.tracks.filter(
          track => track.name.toLowerCase().includes(this.search.toLowerCase())
        )
      }
      return [];
    }
  }
}
</script>

<style scoped>
@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

dialog {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: transparent;
  border: none;
  backdrop-filter: blur(10px);

  img {
    max-width: 90%;
    max-height: 90%;
  }

  &[open] {
    display: flex;
    animation: show .5s forwards;
  }
}

main {
  display: grid;
  grid-template-columns: min-content min-content;
  justify-content: center;
  align-items: start;
  gap: 2rem;

  .poster {
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0 0 5px 5px var(--text_lighter);
    background: var(--text_light);

    img {
      max-width: 500px;
      max-height: 500px;
      display: block;
    }

    p {
      padding: 1rem;
      text-align: center;
      font-size: 2rem;
    }
  }

  .playlist {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .search {
      input {
        background: var(--bg_dark);
        border: 1px solid var(--text_light);
        color: var(--text_light);
        padding: 0.5rem 1rem;
        font-size: 1rem;
        width: 100%;
        box-sizing: border-box;
      }
    }

    .track {
      display: flex;
      gap: 1rem;
      align-items: center;
      flex-wrap: wrap;
      min-width: 500px;
    }
  }

  .info {
    grid-column: span 2;

    h2 {
      font-size: 2rem;
      color: var(--text_lighter);
    }

    p {
      font-size: 1rem;
      color: var(--text_light);
    }
  }
}
</style>
