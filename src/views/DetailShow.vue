<template>
  <div class="series">
    <div class="show-detail">Detail of show {{ $route.params.id }}</div>
    <h1>This is an Detail page</h1>
    <h2>Show title</h2>
    <router-link to="/series">Go Back</router-link>
    <div v-if="show">
      <div>{{ show.name }}</div>
      <div>{{ show.summary }}</div>
      <div>{{ show.rating.average }}</div>
      <div>{{ show.genres }}</div>
      <img :src="show.image.original" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],

  data() {
    return {
      show: null
    }
  },
  mounted() {
    fetch('https://api.tvmaze.com/shows/' + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => (this.show = data))
      .catch((err) => console.log(err.message))
  }
}
// data binnenhalen
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
