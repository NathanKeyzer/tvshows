<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="navbarLogo">
      <h1><span>Show</span>Flix</h1>
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>&nbsp;&nbsp;
          <RouterLink to="/tvshows">TV Shows</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  &::selection {
    background: transparentize(#59b2ec, 0.5);
  }
}

body {
  background-color: #183758;
  margin: auto;
}
a,
.green {
  text-decoration: none;
  color: #59b2ec;
  transition: 0.4s;
  padding: 3px;
}
a:active {
  /* color: hsla(227, 52%, 36%, 0.2); */
  color: #496583;
}
.navbarlogo {
  align-content: center;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(222, 59%, 23%, 0.2);
  }
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
  width: 100%;
  height: auto;
  padding: 2em;
  justify-content: center;
  margin-bottom: 1rem;
  /* position: fixed; */
}
h1 {
  color: #59b2ec;
  font-size: 28px;
  display: flex;
  justify-content: center;
  span {
    color: #fff;
  }
}
.wrapper {
  display: flex;
  justify-content: center;
  /* flex-wrap: wrap; */
}

/* @media (min-width: 800px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
} */
/* aanpassen
@media (min-width: 1024px) {}
*/
</style>
