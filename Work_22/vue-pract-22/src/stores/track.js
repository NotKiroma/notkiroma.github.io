import { defineStore } from 'pinia'

let tracks = import.meta.glob("@/assets/tracks/*.m4a");
let track_names = Object.entries(tracks);
track_names = track_names.map((el, index) => {
  return {
    src: el[0],
    like: false,
    name: el[0].split("/").at(-1),
    id: index,
  }
});

export const  use_tracks_store = defineStore("tracks", {
  state: () => ({
    tracks: track_names,
    current_track: -1,
  }),
  getters: {

  },
  actions: {

  }
})
