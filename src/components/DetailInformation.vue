<template>
  <div class="series">
    <router-link to="/tvshows" class="return">Go Back</router-link>
    <div class="detail" v-if="show">
      <div class="detailContainer">
        <div class="showPosterContainer">
          <div class="imageWrap">
            <img class="showPoster" :src="show.image.original" />
          </div>
        </div>
        <div class="infoContainer">
          <h3>{{ show.name }}</h3>
          <div class="showContainerItem">
            <span>Premiered:</span>
            <p>{{ show.premiered }}</p>
          </div>
          <p v-html="show.summary" class="summary"></p>
          <p class="rating">Rating: {{ show.rating.average }}</p>
          <div class="showGenres">
            <span>Genres:</span>
            <p v-for="genre in show.genres" :key="genre">{{ genre }}</p>
          </div>
          <div class="showContainerItem">
            <span>Network:</span>
            <p>{{ show.network.name }}</p>
          </div>
          <div class="showContainerItem">
            <span>Language:</span>
            <p>{{ show.language }}</p>
          </div>
          <div class="showContainerItem">
            <span>Status:</span>
            <p>{{ show.status }}</p>
          </div>
        </div>
      </div>
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
h3 {
  font-family: sans-serif;
  font-size: 1.875rem;
  color: #fff;
  padding-right: 2rem;
  font-weight: 700;
}
.return {
  padding: 1.25rem;
}
.series {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  /* align-items: center; */
}
.detail {
  display: flex;
  flex-direction: column;
  /* width: 50%; */
}
.detailContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.showPosterContainer {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
}
.imageWrap {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  justify-content: center;
  display: flex;
}
img.showPoster {
  width: 70%;
  height: auto;
}
.infoContainer {
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  --tw-space-y-reverse: 0;
  margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));
  margin-top: calc(1.25rem * (1 - var(--tw-space-y-reverse)));
}
.showContainerItem {
  display: flex;
  gap: 1.25rem;
}
.showContainerItem p {
  font-style: italic;
}
.infoContainer,
span {
  color: #fff;
}
span {
  font-weight: bold;
}
p.summary {
  color: #fff;
  font-size: 1rem;
  text-align: justify;
  padding-right: 1.25rem;
  width: 50%;
  font-style: italic;
}
.rating {
  color: #46d369;
  font-weight: bold;
}
.showGenres {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;
}
.showGenres p {
  background-color: #59b2ec;
  border-radius: 5px;
  padding: 5px;
}
@media (min-width: 1024px) {
  /* .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    } */
}
@media (max-width: 1280px) {
  h3 {
    font-family: sans-serif;
    font-size: 1.875rem;
    color: #fff;
    padding-right: 0;
  }
  .return {
    padding: 1.25rem;
  }
  .series {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    /* align-items: center; */
  }
  .detail {
    display: flex;
    flex-direction: column;
    /* width: 50%; */
  }
  .detailContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .showPosterContainer {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  .imageWrapper {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  img.showPoster {
    width: 60vw;
    height: auto;
  }
  .infoContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.25rem;
    width: 100%;
  }
  p.summary {
    text-align: justify;
    padding-right: 0;
    width: 85%;
  }
  .rating {
    color: #46d369;
    font-weight: bold;
  }
  .showGenres {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .showContainerItem {
    display: flex;
    gap: 1.25rem;
  }
}
</style>
