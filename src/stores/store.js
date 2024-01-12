import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useShowsStore = defineStore('shows', () => {
  const shows = ref([])

  function getShows() {
    fetch('https://api.tvmaze.com/shows')
      .then((res) => res.json())
      .then((data) => (this.shows = Object.groupBy(data, (show) => show.genres[1])))
      .catch((err) => console.log(err.message))
    console.log()
  }
  getShows()
  return {
    shows,
    getShows
  }
})
