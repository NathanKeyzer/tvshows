<template>
  <h1 class="h1Shows">The best TV Shows</h1>
  <div class="series">
    <div class="show" v-for="genre in Object.keys(store.shows)" :key="genre">
      <h3 class="genre">{{ genre }}</h3>
      <div class="container">
        <TvShow
          :show="show"
          v-for="show in store.shows[genre].sort((a, b) => b.rating.average - a.rating.average)"
          :key="show.id"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// to enable connection with pinia
// import { ref } from 'vue'
import { useShowsStore } from '@/stores/store'
import TvShow from '@/components/TvShow.vue'
const store = useShowsStore()
// const shows = ref(store.shows)

store.getShows()
// console.log(shows)
//    Connection with pinia
// request data from api
// export default {
//   data() {
//     return {
//       shows: []
//     }
//   },
//   mounted() {
//     fetch('https://api.tvmaze.com/shows')
//       .then((res) => res.json())
//       .then((data) => (this.shows = Object.groupBy(data, (show) => show.genres[1])))
//       .catch((err) => console.log(err.message))
//     console.log()
//   }
// }
</script>

<style scoped>
h1 {
  font-family: sans-serif;
  color: #fff;
}
.h1Shows {
  font-family: sans-serif;
  color: #fff;
  display: flex;
  justify-content: center;
}
h3 {
  font-family: sans-serif;
  font-size: 2rem;
  color: #fff;
  padding-right: 2rem;
}
.rating {
  color: #46d369;
  font-weight: bold;
}
.series {
  display: flex;
  flex-wrap: wrap;
  padding: 2em;
  gap: 1rem;
}
.container {
  display: flex;
  width: 100%;
  gap: 1.5rem;
}
.show {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.genre {
  align-content: flex-start;
  margin-bottom: 2rem;
}
@media (min-width: 1024px) {
  .show {
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }
}
@media (min-width: 430px) {
  .show {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* height: 400px; */
    overflow-x: auto;
    overflow-y: hidden;
  }
}
@media (max-width: 800px) {
  .show {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* height: 400px; */
    overflow-x: auto;
    overflow-y: hidden;
  }
  h3 {
    font-family: sans-serif;
    font-size: 1.85rem;
    color: #fff;
    padding-right: 2rem;
  }
}
</style>
