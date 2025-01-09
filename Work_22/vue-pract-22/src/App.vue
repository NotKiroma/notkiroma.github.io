<template>
  <header>

  </header>

  <main>
    <div class="info">
    <h2>{{ name }}</h2>
    <p v-if="info" v-html="info"></p>
    <p v-else>Info is missing.</p>
    </div>
    <div class="poster">
      <img v-if="poster" :src="poster" alt="" v-on:click="poster_view">
      <p v-else>NO&nbsp;POSTER =(</p>
    </div>
    <div class="playlist">
      <div class="search">
        <input type="text" v-model="search" placeholder="Search..." />
      </div>
      <div class="track" v-for="track in tracks_search" :key="track.id">
        <p>{{ track.name }}</p>
        <audio :src="track" controls></audio>
        <button @click="like(track.id)" :class="this.tracks[track.id].like ? 'like' : ''">
          <img :src="this.tracks[track.id].like? heart_filled : heart" alt="">
        </button>
      </div>
    </div>
  </main>
  <dialog :open="!!dialog_open" @click="poster_view">
    <img :src="poster" alt="">
  </dialog>
</template>
<script>
import poster from "@/assets/poster.jpg";
import heart from "@/assets/heart.png"
import heart_filled from "@/assets/heart_filled.png"
let tracks = import.meta.glob("@/assets/kish/*.m4a");
let tracks_names = Object.entries(tracks);
tracks_names = tracks_names.map((el, index) => {
  return {
    src: el[0],
    like: false,
    name: el[0].split("/").at(-1),
    id: index
  }
});

export default {
  data() {
    return {
      poster: poster,
      tracks: tracks_names,
      heart: heart,
      heart_filled: heart_filled,
      name: "Король И Шут - Акустический Альбом (1998)",
      info: `Группа: Король И Шут<br/>
          Альбом: Акустический Альбом<br/>
          Год: 1998<br/>
          Стиль: Punk Rock<br/>
          Страна: Россия`,
      dialog_open: false,
      search: "",
    }
  },
  methods: {
    poster_view() {
      this.dialog_open = !this.dialog_open;
    },
    like(id) {
      let index = this.tracks.findIndex(track => track.id === id);
      this.tracks[index].like = !this.tracks[index].like;
    }
  },
  computed: {
    tracks_search() {
      return this.tracks.filter(track => track.name.includes(this.search))
    }
  }
}
</script>
<style scoped>
@keyframes show {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
dialog{
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
  img{
    max-width: 90%;
    max-height: 90%;
  }
  &[open]{
    display: flex;
    animation: show .5s forwards ;
  }
}
main{
  display: grid;
  grid-template-columns: min-content min-content;
  justify-content: center;
  align-items: start;
  gap: 2rem;
  .poster{
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0 0 5px 5px var(--text_lighter);
    background: var(--text_light);
    img{
      max-width: 500px;
      max-height: 500px;
      display: block;
    }
    p{
      padding: 1rem;
      text-align: center;
      font-size: 2rem;
    }
  }
  .playlist {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .search{
      input{
        background: var(--bg_dark);
        border: 1px solid var(--text_light);
        color: var(--text_light);
        padding: 0.5rem 1rem;
        font-size: 1rem;
        width: 100%;
        box-sizing: border-box;
      }
    }
    .track{
      display: flex;
      gap: 1rem;
      align-items: center;
      flex-wrap: wrap;
      min-width: 500px;
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
    }
  }
  .info{
    grid-column: span 2;
    h2{
      font-size: 2rem;
      color: var(--text_lighter);
    }
    p{
      font-size: 1rem;
      color: var(--text_light);
    }
  }
}
</style>
