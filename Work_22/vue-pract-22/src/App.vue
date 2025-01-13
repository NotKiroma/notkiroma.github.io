<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
  </header>
  <RouterView v-slot="{ Component }">
    <Transition name="slide-fade" mode="out-in">
      <Component :is="Component" />
    </Transition>
  </RouterView>
</template>

<script>
import { use_tracks_store } from "@/stores/track.js";

export default {
  setup() {
    return {
      tracks_store: use_tracks_store(),
    }
  },
  async mounted() {
    await this.tracks_store.load_albums();
  }
}
</script>

<style scoped>
header{
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 1rem;
  box-shadow: 0 0 5px var(--text_lighter);
  position: sticky;
  top: 0;
  background-color: var(--bg_dark);
  z-index: 10;
  a{
    color: var(--text_light);
    text-decoration: none;
  }
}
.slide-fade-enter-active{
  transition: all .5s;
}
.slide-fade-leave-active{
  transition: all .5s;
}
.slide-fade-leave-to{
  transform: translateX(-20px);
  opacity: 0;
}
.slide-fade-enter-from{
  transform: translateX(20px);
  opacity: 0;
}

</style>
