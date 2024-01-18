<script setup>
import { ref } from 'vue'
import TvShow from '@/components/TvShow.vue'

const search = ref('')
const shows = ref([])

const SearchShows = () => {
  if (search.value != '') {
    fetch(`https://api.tvmaze.com/search/shows?q=${search.value}`)
      .then((response) => response.json())
      .then((data) => {
        shows.value = data
        search.value = ''
        console.log(shows.value, 'hallo')
        console.log('search results', data)
      })
  }
  return {
    search,
    shows,
    SearchShows
  }
}
</script>

<template>
  <form @submit.prevent="SearchShows()" class="search-box" id="search">
    <input type="text" placeholder="What to watch?" v-model="search" id="search" />
    <input type="submit" value="Search" />
  </form>

  <div class="show-list">
    <div class="container">
      <div class="show" v-for="item in shows" :key="item.id">
        <TvShow :show="item.show" v-if="item.show" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.show-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.container {
  display: flex;
  padding: 2em;
  flex-wrap: wrap;
  justify-content: center;
}
.show {
  display: flex;
  width: min-content;
}
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
      width: 30%;
      color: #000;
      background-color: #fff;
      font-size: 20px;
      padding: 10px 16px;
      border-radius: 8px;
      margin-bottom: 15px;
      transition: 0.4s;

      &::placeholder {
        color: #000;
      }

      &:focus {
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
      }
    }
    &[type='submit'] {
      width: 100%;
      max-width: 200px;
      background-color: #59b2ec;
      padding: 16px;
      border-radius: 8px;
      color: #fff;
      font-size: 20px;
      text-transform: uppercase;
      transition: 0.4s;

      &:active {
        background-color: #496583;
      }
    }
  }
}
@media (max-width: 800px) {
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
        color: #000;
        background-color: #fff;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transition: 0.4s;

        &::placeholder {
          color: #000;
        }

        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }
      &[type='submit'] {
        width: 100%;
        max-width: 200px;
        background-color: #59b2ec;
        padding: 16px;
        border-radius: 8px;
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;

        &:active {
          background-color: #496583;
        }
      }
    }
  }
}
.container {
  display: flex;
  width: 100%;
  gap: 1.5rem;
}
</style>
