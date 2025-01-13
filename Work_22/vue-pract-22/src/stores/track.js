import { defineStore } from 'pinia'

export const  use_tracks_store = defineStore("tracks", {
  state: () => ({
    albums: [],
    current_track: -1,
    current_album: -1,
  }),
  getters: {
    tracks: state => state.albums[state.current_album]?.tracks ?? [],
    liked_tracks: state => {
      let found = [];
      for (let album of state.albums) {
        for (let track of album.tracks) {
          if (track.like){
            found.push({
              album: album,
              track: track,
            });
          }
        }
      }
      return found
    },
  },
  actions: {
    async load_albums() {
      if (!this.albums || this.albums.length === 0) {
        let response = await fetch(`${import.meta.env.VITE_API_HOST}/albums`, {
          headers: {
            Token: import.meta.env.VITE_NOT_SO_SECRET_TOKEN,
          },
          cache: "no-store"
        });
        response = await response.json();
        if (!response.error) {
          this.albums = response.data;
        }
      }
    },
    async load_tracks(album_id) {
      let index = this.albums.findIndex(album => album.id === album_id);
      if (!this.albums[index].tracks) {
        let response = await fetch(`${import.meta.env.VITE_API_HOST}/album/${album_id}`, {
          headers: {
            Token: import.meta.env.VITE_NOT_SO_SECRET_TOKEN,
          },
          cache: "no-store"
        });
        response = await response.json();
        this.albums[index].tracks = response.data.tracks;
      }
    },
    like(track_id){
      for (let album of this.albums) {
        for (let track of album.tracks) {
          if (track.id === track_id) {
            track.like = !track.like;
            return;
          }
        }
      }
    },
    track_ended(id){
      let index = this.tracks.findIndex(track => track.id === id);
      if (this.tracks[index + 1]){
        this.current_track = this.tracks[index + 1];
      }else{
        this.current_track = this.tracks[0].id;
      }
    },
    play_started(id){
      this.current_track = id;
    },
    change_current_album(id){
      this.current_album = this.albums.findIndex(album => album.id === id);
    }
  },
  persist: true,
})
