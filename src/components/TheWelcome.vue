<script>
import { ref } from 'vue'
export default {
  setup() {
    const search = ref('')
    const shows = ref([])

    const SearchShows = () => {
      if (search.value != '') {
        fetch(`https://api.tvmaze.com/search/shows?q=${search.value}`)
          .then((response) => response.json())
          .then((data) => {
            shows.value = data[0]
            search.value = ''
            console.log(shows.value, 'hallo')
            console.log('lijst met', data)
          })
      }
    }
    return {
      search,
      shows,
      SearchShows
    }
  }
}
</script>
<template>
  <form @submit.prevent="SearchShows()" class="search-box">
    <input type="text" placeholder="Wat wil jij kijken?" v-model="search" />
    <input type="submit" value="Search" />
  </form>

  <div class="show-list">
    <div class="show" v-for="show in shows" :key="show.id">
      {{ show.name }}
    </div>
  </div>
</template>

<style>
.search-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;

  input {
    display: block;
    appearance: none;
    border: none;
    outline: none;
    background: none;

    &[type='text'] {
      width: 100%;
      color: #fff;
      background-color: #496583;
      font-size: 20px;
      padding: 10px 16px;
      border-radius: 8px;
      margin-bottom: 15px;
      transition: 0.4s;

      &::placeholder {
        color: #f3f3f3;
      }

      &:focus {
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
      }
    }
    &[type='submit'] {
      width: 100%;
      max-width: 300px;
      background-color: #42b883;
      padding: 16px;
      border-radius: 8px;
      color: #fff;
      font-size: 20px;
      text-transform: uppercase;
      transition: 0.4s;

      &:active {
        background-color: #3b8070;
      }
    }
  }
}
</style>
