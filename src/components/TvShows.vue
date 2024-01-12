<template>
  <h1 class="h1Shows">The best TV Shows</h1>
  <div class="series">
    <div class="show" v-for="genre in Object.keys(shows)" :key="genre">
      <h3 class="genre">{{ genre }}</h3>

      <div
        class="coverShow"
        v-for="show in shows[genre].sort((a, b) => b.rating.average - a.rating.average)"
        :key="show.id"
      >
        <router-link :to="'/tvshow/' + show.id"><img :src="show.image.medium" /></router-link>
        <div class="titleRating">
          <p>{{ show.name }}</p>
          <p class="rating">{{ show.rating.average }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// to enable connection with pinia
// import { ref } from 'vue'
// import { useShowsStore } from '@/stores/counter'
// const store = useShowsStore()
// const shows = ref(store.shows)

// store.getShows()
// console.log(shows)
//    Connection with pinia
export default {
  data() {
    return {
      shows: []
    }
  },
  mounted() {
    fetch('https://api.tvmaze.com/shows')
      .then((res) => res.json())
      .then((data) => (this.shows = Object.groupBy(data, (show) => show.genres[1])))
      .catch((err) => console.log(err.message))
    console.log()
  }
}
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
  position: absolute;
}
p {
  color: #fff;
  font-size: large;
}
p.rating {
  color: #46d369;
  font-weight: bold;
}
.series {
  display: flex;
  flex-wrap: wrap;
  padding: 2em;
}
.show {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.genre {
  align-content: flex-start;
}
.titleRating {
  display: flex;
  justify-content: space-between;
}

.coverShow {
  margin-right: 1rem;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .show {
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }
}
@media (min-width: 430px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .show {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 400px;
    overflow-x: auto;
    overflow-y: hidden;
  }
}
@media (max-width: 800px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .show {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 400px;
    overflow-x: auto;
    overflow-y: hidden;
  }
  h3 {
    font-family: sans-serif;
    font-size: 1.25rem;
    color: #fff;
    padding-right: 2rem;
    position: absolute;
  }
}
</style>
