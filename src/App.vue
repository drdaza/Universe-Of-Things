<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    
    <h1>WE MASTER YOUR EXPERIENCE</h1>
    <div class="wrapper">

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Favorites</RouterLink>
      </nav> -->
    </div>
  </header>
  
  <RouterView />
</template>

<style scoped lang="scss">
header {

  background-color: #E34038;
  width:85% ;
  height: 20%;
  border-top-left-radius: 40px 40px;
  border-bottom-right-radius: 40px 40px;
  border-top-right-radius: 40px 40px;
  border-bottom-left-radius: 40px 40px;
  justify-content: center;
}

h1{
  color: #312D2D;
  

}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  justify-content: end;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  justify-content: end;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
