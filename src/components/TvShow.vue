<template>
  <div class="coverShow">
    <router-link :to="'/tvshow/' + show.id"><img :src="show.image.medium" /></router-link>
    <div class="titleRating">
      <p>{{ show.name }}</p>
      <p class="rating">{{ show.rating.average }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['show']
}
</script>
<style scoped>
p {
  color: #fff;
  font-size: large;
  font-weight: 600;
}
.rating {
  color: #46d369;
  font-weight: bold;
  font-weight: 500;
}
.series {
  display: flex;
  flex-wrap: wrap;
  padding: 2em;
}
.titleRating {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 1rem;
}

.coverShow {
  width: auto;
}
.coverShow,
a {
  padding: 0;
}
img {
  border-radius: 5px;
  box-shadow: 0 19px 30px -10px #000000cc;
}
img:hover {
  transform: scale(1.1);
  /* transform: translateX(1em); */
  transition: all 0.2s linear;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
@media (min-width: 430px) {
  img {
    border-radius: 5px;
  }
}
@media (max-width: 800px) {
  img {
    border-radius: 5px;
  }
}
</style>
