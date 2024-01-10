<template>
  <div class="series">
    <h1>This is an Series page</h1>
    <!-- overzicht van alle shows -->
    <div class="show" v-for="show in shows" :key="show.id">
      <div>{{ show.name }}</div>
      <router-link :to="'/show/' + show.id"><img :src="show.image.medium" /></router-link>
    </div>
    <!-- overzicht alle shows -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      shows: []
    }
  },
  mounted() {
    fetch('https://api.tvmaze.com/shows')
      .then((res) => res.json())
      .then((data) => (this.shows = data))
      .catch((err) => console.log(err.message))
    console.log()
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
